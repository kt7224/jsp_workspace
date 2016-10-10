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
	String tempPath; //�뷮�� Ŭ����� ���ӽõ��丮
	String realPath;//������ ������ ����Ǵ� ���� ���丮
	File saveFile; //���� ����� ���Ͽ� ���� ��ü!!
	FavorDAO dao;
	//jsp�� application ���尴ü�� �ڷ����� ServletContext �̴�!!

	//Servlet�� �¾��, �� �ν��Ͻ��� �޸𸮿� �ö�ö� �����̳ʷκ��� ȯ�漳�� �������� ���޹޴´�..
	@Override
	public void init(ServletConfig config) throws ServletException {
		dao= new FavorDAO();
		ServletContext context=config.getServletContext();
		//web.xml�� �ش� �Ķ���͸� ���� value�� �����Ҽ��ִ�.!! init-param
		//���� �������� ���̱� ���� �ڿ��� ��ΰ� �ٲ�� ��� Ŭ���� �ڵ忡�� �����ϸ� �ȵȴ�.
		//������ dd�� �ڿ��� ����ϴ� ����� ��õ�ȴ�.!!
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
		
		//upload �ǽ�!!
		try {
			List<FileItem> params =upload.parseRequest(req);
			Favor dto= new Favor();
			for(int i =0;i< params.size();i++){
				FileItem item=params.get(i);
				
				if(item.isFormField()){//text�Ķ���Ͷ��~
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
				}else{//���̳ʸ� ���� �̶��~
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
			//�����ͺ��̽��� ���ڵ� 1�� �ֱ�!
			int result = dao.insert(dto);
			
			out.print("<script>");
			if(result!=0){
				out.print("alert('��� ����');");
				out.print("location.href='/admin/';");				
			}else{
				out.print("alert('��� ����');");
				out.print("history.back();");
			}
			out.print("</script>");
		} catch (FileUploadException e) {
			e.printStackTrace();
		}
	
	}
	
	//�ݳ��� �ڿ����� ������ ���⼭ ó��~~(db, stream~)
	@Override
	public void destroy() {
	}
}
