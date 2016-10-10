/*
jsp로도 업로드 처리를 할수는 있으나, 좀더 깊입피~ 공부하고 잊지 않기 위래 오랜만에 서블릿으로 개발해본다.
*/
package com.sds.gallery.servlet;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.imageio.ImageIO;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import com.sds.gallery.dao.GalleryDAO;
import com.sds.gallery.domain.Gallery;

public class RegistServlet extends HttpServlet{
	GalleryDAO dao= new GalleryDAO();
	String temp="C:/jsp_workspace/Galley/WebContent/temp";
	String dest="C:/jsp_workspace/Galley/WebContent/data";
	String thumb="C:/jsp_workspace/Galley/WebContent/thumb";
	
	//client가 post방식으로 전송하면 아래의 메서드가 service()에 의해서 호출된다.!!!
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
		req.setCharacterEncoding("utf-8");
		Gallery dto= new Gallery();
		
		PrintWriter out=res.getWriter();
		//out.print("업로드 할라고???");
		//apache fileupload 컴포넌트를 이용한 업로드 시작!!
		DiskFileItemFactory factory=new DiskFileItemFactory();
		//1메가 이하의 파일은 메모리상에서 업로드를 처리해버린다.
		factory.setSizeThreshold(1*1024*1024);
		//client가 올리는 file의 용량이 클경우 임시적으로  디렉토리
		factory.setRepository(new File(temp));
		
		ServletFileUpload upload=new ServletFileUpload(factory);
		try {
			//FileItem이란 업로드된 파라미터들을 가리킨다.
			//우리의 경우엔 4개!!
			List<FileItem> list=upload.parseRequest(req);//업로드 해석시작!!!
			//out.print("업로드된 파일아이템 갯수!!!"+list.size());
			for(int i=0; i<list.size();i++){
				FileItem item=list.get(i);
				
				String param=item.getFieldName();
				String value=item.getString("utf-8");
				//item의 isFromField()는 String형 인경우만 true를 반환해준다!
				if(item.isFormField()){
					//out.print(item.getFieldName()+"의 값은"+item.getString("utf-8")+"<br>");
					if(param.equals("writer")){
						dto.setWriter(value);
					}else if(param.equals("title")){
						dto.setTitle(value);
					}else if(param.equals("content")){
						dto.setContent(value);
					}
				}else{
					//파일 업로드 마무리!!
					try {
						//실제 디렉토리에 파일이 저장되는 시점!!!
						item.write(new File(dest,item.getName()));
						//temp 디렉토리에 파일 삭제!!!
						item.delete();
						out.print("업로드 완료!");
						
						//원본 이미지를 원하는 크기로 축소시키자 즉 Thumbnail 만들기!!
						int width=40;
						int height=30;
						
						BufferedImage thumb_image=new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
						
						//그림을 직접 그리기 위해 Graphics 객체를 사용해보자!
						Graphics2D g=(Graphics2D)thumb_image.getGraphics();
						BufferedImage original_image=ImageIO.read(new File(dest+"/"+item.getName()));
						g.drawImage(original_image, 0, 0, width, height, null);
						
						//메모리상에 그려진 벞퍼이미지를 저장하자!!
						String mimeType=item.getName().substring(item.getName().lastIndexOf(".")+1, item.getName().length());
						
						ImageIO.write(thumb_image, mimeType,new File(thumb+"/"+item.getName()));
						
						dto.setImg(item.getName());
						
						//DB에 insert
						int result=dao.insert(dto);
						out.print("<script>");
						if(result!=0){
							out.print("alert('등록 성공');");
							out.print("location.href='/board/list.jsp';");
						}else{
							out.print("alert('등록 실패');");
							out.print("history.back();");
						}
						out.print("</script>");
						
					} catch (Exception e) {
						e.printStackTrace();
					}
				}
			}
		} catch (FileUploadException e) {
			e.printStackTrace();
		}
		

	}
}
