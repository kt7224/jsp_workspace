<%@page import="com.sds.notice.dao.NoticeDAO"%>
<%@page import="com.sds.notice.domain.Notice"%>
<%@ page contentType="text/html;charset=utf-8"%>
<%@ include file="/inc/message.jsp" %>
<%! NoticeDAO dao= new NoticeDAO(); %>
<% request.setCharacterEncoding("utf-8"); %>
<!-- Bean : 객체를 뜻함 Notice dto= new Notice();와 동일-->
<jsp:useBean id="dto" class="com.sds.notice.domain.Notice"/>
<!-- 메모리에 올릴때는 id 메모리에 올라온 객체를 쓸때는 name을 쓴다.
	해당 객체에 동일name의 파라미터의 값을 해당 요소에 넣어줌
	------------------------------------------------------
	jsp에서 즉 서버측에서도 실행되는 태그를 javaEE에서는 지원하며, 이러한
	태그를 ㄱ가리켜 빈즈태그라 한다!!
	목적-jsp코드의 간소화..(즉 사용할지 여부는 선택사항)
 -->
<jsp:setProperty property="*" name="dto"/>
 <!-- 
<jsp:setProperty property="writer" name="dto"/>
<jsp:setProperty property="title" name="dto"/>
<jsp:setProperty property="content" name="dto"/>
 -->
<%
	//글쓰기 폼에서 전송되어온 파라미터 값들을 오라클에 insert 시키자~

	/* 빈즈 태그로 대체!!!!!!
	String writer=request.getParameter("writer");
	String title=request.getParameter("title");
	String content=request.getParameter("content"); */
	
	int result=dao.insert(dto);
	
	//메세지 뿌리는 영역을 재활용성이 좋게 jsp로 따로 빼서 지시영역사용
	if(result!=0){
		out.print(showMsgURL("등록 성공", "/board/list.jsp"));
	}else{
		out.print(showMsgBack("등록 실패"));
	}
%>