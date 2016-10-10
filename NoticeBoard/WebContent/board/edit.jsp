<%@page import="com.sds.notice.dao.NoticeDAO"%>
<%@ page contentType="text/html;charset=utf-8"%>
<%@ include file="/inc/message.jsp" %>
<%request.setCharacterEncoding("utf-8"); %>
<jsp:useBean id="dto" class="com.sds.notice.domain.Notice"></jsp:useBean>
<jsp:setProperty property="*" name="dto"/>

<%!
	NoticeDAO dao = new NoticeDAO();
%>
<%
	int result=dao.update(dto);	
	int notice_id=dto.getNotice_id();	

	if(result!=0){
		out.print(showMsgURL("Update성공", "/board/detail.jsp?notice_id="+notice_id));
	}else{
		out.print(showMsgBack("Update실패"));
	}
%>