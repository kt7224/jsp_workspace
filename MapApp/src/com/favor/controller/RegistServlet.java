package com.favor.controller;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import com.favor.domain.Favor;
import com.favor.model.dao.FavorDAO;

public class RegistServlet extends HttpServlet{
	DiskFileItemFactory factory;
	ServletFileUpload upload;
	int tempSize=1*1024*1024;//1MB
	String tempPath; //용량이 클경우으 ㅣ임시디렉토리
	String realPath;//파일이 서버에 저장되는 실제 디렉토리
	File saveFile; //실제 저장된 파일에 대한 객체!!
	FavorDAO dao;
	//jsp의 application 내장객체의 자료형은 ServletContext 이다!!

	//Servlet은 태어날때, 즉 인스턴스가 메모리에 올라올때 컨테이너로부터 환경설정 정보등을 전달받는다..
	@Override
	public void init(ServletConfig config) throws ServletException {
		dao= new FavorDAO();
		ServletContext context=config.getServletContext();
		//web.xml에 해당 파라미터를 통해 value를 전달할수있다.!! init-param
		//유지 보수성을 높이기 위해 자원의 결로가 바뀌는 경우 클래스 코드에서 수정하면 안된다.
		//따락서 dd에 자원을 명시하는 방법이 추천된다.!!
		String tempDir=config.getInitParameter("tempDir");
		String realDir=config.getInitParameter("realDir");
		
		tempPath=context.getRealPath(tempDir);
		realPath=context.getRealPath(realDir);
		
		System.out.println(tempDir);
		factory = new DiskFileItemFactory(tempSize, new File(tempPath));
		upload = new ServletFileUpload(factory);
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
		
		//upload 실시!!
		try {
			List<FileItem> params =upload.parseRequest(req);
			Favor dto= new Favor();
			for(int i =0;i< params.size();i++){
				FileItem item=params.get(i);
				
				if(item.isFormField()){//text파라미터라면~
					if(item.getFieldName().equals("lati")){
						System.out.println(item.getString());
						dto.setLati(Double.parseDouble(item.getString()));
					}else if(item.getFieldName().equals("lng")){
						dto.setLng(Double.parseDouble(item.getString()));
					}else if(item.getFieldName().equals("name")){
						dto.setName(item.getString());
					}else if(item.getFieldName().equals("content")){
						dto.setContent(item.getString());
					}else if(item.getFieldName().equals("score")){
						dto.setScore(Double.parseDouble(item.getString()));
					}
				}else{//바이너리 파일 이라면~
					try {
						item.write(saveFile=new File(realPath+"/"+item.getName()));
						item.delete();
						dto.setImg(saveFile.getName());
					} catch (Exception e) {
						e.printStackTrace();
					}
				}
				
			}
			PrintWriter out= res.getWriter();
			//데이터베이스에 레코드 1건 넣기!
			int result = dao.insert(dto);
			
			out.print("<script>");
			if(result!=0){
				out.print("alert('등록 성공');");
				out.print("location.href='/admin/';");				
			}else{
				out.print("alert('등록 실패');");
				out.print("history.back();");
			}
			out.print("</script>");
		} catch (FileUploadException e) {
			e.printStackTrace();
		}
	
	}
	
	//반납할 자원들이 있으면 여기서 처리~~(db, stream~)
	@Override
	public void destroy() {
	}
}
