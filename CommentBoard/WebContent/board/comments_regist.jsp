<%@page import="com.sds.comments.domain.Comments"%>
<%@page import="com.sds.comments.dao.CommentsDAO"%>
<%@ page contentType="text/html;charset=utf-8"%>
<%@ include file="/inc/message.jsp" %>
<%!CommentsDAO dao=new CommentsDAO();%>

<%
	request.setCharacterEncoding("utf-8");
	//넘겨받은 파라미터값을 이용하여 db에 insert하자!
	String writer=request.getParameter("writer");
	String title=request.getParameter("title");
	int board_id=Integer.parseInt(request.getParameter("board_id"));
	
	Comments com= new Comments();
	
	com.setWriter(writer);
	com.setTitle(title);
	com.setBoard_id(board_id);
	
	int result=dao.insert(com);
	
	if(result!=0){
		out.print(showMsgURL("댓글 등록 성공",	"/board/detail.jsp?board_id="+board_id));
	}else{
		out.print(showMsgBack("댓글 등록 실패"));
	}
%>