<%@page import="com.sds.notice.dao.NoticeDAO"%>
<%@ include file="/inc/message.jsp" %>
<%@ page contentType="text/html;charset=utf-8"%>
<%!
	NoticeDAO dao= new NoticeDAO();
%>
<%
	request.setCharacterEncoding("utf-8");
	
	int result=dao.delete(Integer.parseInt(request.getParameter("notice_id")));
	
	if(result!=0){
		out.print(showMsgURL("삭제 성공", "/board/list.jsp"));
	}else{
		out.print(showMsgBack("삭제실패"));
	}
%>
