<%@page import="com.sds.model.board.BoardDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%!
	BoardDAO dao= new BoardDAO();
%>
<% 
	request.setCharacterEncoding("utf-8");
	//넘겨받은 파라미터 값을 이용하여 delete 수행
	int board_id = Integer.parseInt(request.getParameter("board_id"));
	
	int result=dao.remove(board_id);
	out.print("<script>");
	if(result!=0){
		out.print("alert('삭제 성공');");
		out.print("location.href='/board/list.jsp'");
	}else{
		out.print("alert('삭제 실패');");
		out.print("history.back();");
	}
	out.print("</script>");
%>