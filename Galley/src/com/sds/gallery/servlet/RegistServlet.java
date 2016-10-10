/*
jsp�ε� ���ε� ó���� �Ҽ��� ������, ���� ������~ �����ϰ� ���� �ʱ� ���� �������� �������� �����غ���.
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
	
	//client�� post������� �����ϸ� �Ʒ��� �޼��尡 service()�� ���ؼ� ȣ��ȴ�.!!!
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
		req.setCharacterEncoding("utf-8");
		Gallery dto= new Gallery();
		
		PrintWriter out=res.getWriter();
		//out.print("���ε� �Ҷ��???");
		//apache fileupload ������Ʈ�� �̿��� ���ε� ����!!
		DiskFileItemFactory factory=new DiskFileItemFactory();
		//1�ް� ������ ������ �޸𸮻󿡼� ���ε带 ó���ع�����.
		factory.setSizeThreshold(1*1024*1024);
		//client�� �ø��� file�� �뷮�� Ŭ��� �ӽ�������  ���丮
		factory.setRepository(new File(temp));
		
		ServletFileUpload upload=new ServletFileUpload(factory);
		try {
			//FileItem�̶� ���ε�� �Ķ���͵��� ����Ų��.
			//�츮�� ��쿣 4��!!
			List<FileItem> list=upload.parseRequest(req);//���ε� �ؼ�����!!!
			//out.print("���ε�� ���Ͼ����� ����!!!"+list.size());
			for(int i=0; i<list.size();i++){
				FileItem item=list.get(i);
				
				String param=item.getFieldName();
				String value=item.getString("utf-8");
				//item�� isFromField()�� String�� �ΰ�츸 true�� ��ȯ���ش�!
				if(item.isFormField()){
					//out.print(item.getFieldName()+"�� ����"+item.getString("utf-8")+"<br>");
					if(param.equals("writer")){
						dto.setWriter(value);
					}else if(param.equals("title")){
						dto.setTitle(value);
					}else if(param.equals("content")){
						dto.setContent(value);
					}
				}else{
					//���� ���ε� ������!!
					try {
						//���� ���丮�� ������ ����Ǵ� ����!!!
						item.write(new File(dest,item.getName()));
						//temp ���丮�� ���� ����!!!
						item.delete();
						out.print("���ε� �Ϸ�!");
						
						//���� �̹����� ���ϴ� ũ��� ��ҽ�Ű�� �� Thumbnail �����!!
						int width=40;
						int height=30;
						
						BufferedImage thumb_image=new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
						
						//�׸��� ���� �׸��� ���� Graphics ��ü�� ����غ���!
						Graphics2D g=(Graphics2D)thumb_image.getGraphics();
						BufferedImage original_image=ImageIO.read(new File(dest+"/"+item.getName()));
						g.drawImage(original_image, 0, 0, width, height, null);
						
						//�޸𸮻� �׷��� �����̹����� ��������!!
						String mimeType=item.getName().substring(item.getName().lastIndexOf(".")+1, item.getName().length());
						
						ImageIO.write(thumb_image, mimeType,new File(thumb+"/"+item.getName()));
						
						dto.setImg(item.getName());
						
						//DB�� insert
						int result=dao.insert(dto);
						out.print("<script>");
						if(result!=0){
							out.print("alert('��� ����');");
							out.print("location.href='/board/list.jsp';");
						}else{
							out.print("alert('��� ����');");
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
