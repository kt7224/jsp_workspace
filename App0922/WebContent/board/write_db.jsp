<%@page import="com.sds.model.board.BoardDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%!
	BoardDAO dao = new BoardDAO();//DAO(oracle 연동을 하는 객체) 중립적인 Class 생성
%>
<%
	//글쓰기 폼 양식으로 부터 전송되어온 파라미터값들을 이용하여, 오라클에 insert 시키자
	//그리고 나서, 다시 list를 보여주자~

	request.setCharacterEncoding("utf-8");

	String writer = request.getParameter("writer");
	String title = request.getParameter("title");
	String content = request.getParameter("content");
	//Connection pool로부터 Connection 대여
	
	
	out.print(dao);
	int result=dao.insert(writer, title, content);
	
	out.print("<script>");
	if(result!=0){
		out.print("alert('성공성공');");
		//client browser로 하여금, 지정된 url로 재접속을 명령한다.
		out.print("location.href='/board/list.jsp'");
	}else{
		out.print("alert('실패실패');");
		out.print("history.back();");
	}
	out.print("</script>");		
	
	//반납하기!
	
%>