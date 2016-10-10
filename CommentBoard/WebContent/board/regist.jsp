<%@page import="com.sds.board.dao.BoardDAO"%>
<%@ page contentType="text/html;charset=utf-8"%>
<%@ include file="/inc/message.jsp" %>
<%!
	BoardDAO dao= new BoardDAO();
%>

<jsp:useBean id="dto" class="com.sds.board.domain.Board"/>
<%request.setCharacterEncoding("utf-8"); %>
<jsp:setProperty property="*" name="dto"/>
<%
	//넘겨받은 파라미터 값을 이용하여 , insert!!
	int result=dao.insert(dto);
		
	if(result!=0){
		out.print(showMsgURL("등록 성공", "/board/list.jsp"));
	}else{
		out.print(showMsgBack("등록 실패"));
	}
%>