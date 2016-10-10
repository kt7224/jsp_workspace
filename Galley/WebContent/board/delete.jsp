<%@page import="java.io.File"%>
<%@page import="com.sds.gallery.dao.GalleryDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%!GalleryDAO dao=new GalleryDAO(); 
	String dest="C:/jsp_workspace/Galley/WebContent/data";
	String thumb="C:/jsp_workspace/Galley/WebContent/thumb";
%>
<%
	request.setCharacterEncoding("utf-8");
	
	String fileName= request.getParameter("fileName");
	int gallery_id = Integer.parseInt(request.getParameter("gallery_id"));
	
	int result=dao.delete(gallery_id);
	out.print("<script>");
	if(result!=0){
		
		File original=new File(dest+"/"+fileName);
		original.delete();
		File mini = new File(thumb+"/"+fileName);
		mini.delete();
		
		out.print("alert('삭제 성공');");
		out.print("location.href='/board/list.jsp';");
	}else{
		out.print("alert('삭제 실패');");
		out.print("history.back();");
	}
	out.print("</script>");
%>
