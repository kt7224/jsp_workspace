<%@page import="java.io.File"%>
<%@page import="com.oreilly.servlet.MultipartRequest"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	request.setCharacterEncoding("utf-8");
	//클라이언트가 전송한 파라미터와 파일을 넘겨받아
	//서버의 하드디스크에 적재 시키자 = 업로드
	//직접 개발하지 말고, 외부 라이브러리 이용해 보자!!!
	String saveDir="C:/jsp_workspace/App0923/WebContent/data/";
	int maxSize=2*1024*1024;	

	MultipartRequest multi= new MultipartRequest(request,saveDir,maxSize,"utf-8");
	
	//파라미터 및 업로드된 파일에 대한 정보 결과 출력
	String msg=multi.getParameter("msg");
	out.print(msg);
	//파일명을 출력하시오!!
	String fileName=multi.getOriginalFileName("myFile");
	out.print("<br>");
	out.print(fileName);
	//파일명 바꾸기
	//1단계-이미 업로드된 파일에 대한 인스턴스 얻기!!
	File file=multi.getFile("myFile");
	//2단계- renameTo()를 이용하여 파일의 이름을 교체!!
	//확장자 얻기!
	int index=fileName.lastIndexOf(".");
	String ext=fileName.substring(index, fileName.length());
	
	boolean result=file.renameTo(new File(saveDir+msg+ext));
	out.print("<br>");
	if(result){
		out.print("변경성공");
	}else{
		out.print("변경실패");
	}
	
%> 
