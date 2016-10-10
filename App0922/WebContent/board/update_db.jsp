<%@page import="com.sds.model.board.BoardDTO"%>
<%@page import="com.sds.model.board.BoardDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%!BoardDAO dao = new BoardDAO();%>
<%
	request.setCharacterEncoding("utf-8");

	int board_id = Integer.parseInt(request.getParameter("board_id"));
	String writer = request.getParameter("writer");
	String title = request.getParameter("title");
	String content = request.getParameter("content");
	//int result = dao.update(writer, title, content, board_id);
	
	//낱개로 존재하는 data들을 하나의 객체로 담아 처리하면 유지보수성이 좋다
	BoardDTO dto=new BoardDTO();
	dto.setBoard_id(board_id);
	dto.setWriter(writer);
	dto.setTitle(title);
	dto.setContent(content);
	
	int result=dao.update(dto);
	
	out.print("<script>");
	if (result != 0) {
		out.print("alert('Update성공');");
		out.print("location.href='/board/detail.jsp?board_id="+board_id+"';");
	} else {
		out.print("alert('Update실패');");
		out.print("history.back();");
	}
	out.print("</script>");
%>