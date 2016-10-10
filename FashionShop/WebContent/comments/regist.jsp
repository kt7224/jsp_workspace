<%@page import="com.fashion.product.mybatis.dao.CommentsDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<jsp:useBean id="dto" class="com.fashion.admin.domain.Comments"/>
<%! CommentsDAO dao = new CommentsDAO(); %>
<%
	//클라이언트가 비동기로 전송한 파라미터값을 이용하여
	//db에 넣어주자
	String product_id=request.getParameter("product_id");
	String title=request.getParameter("title");
	String writer=request.getParameter("writer");
	request.setCharacterEncoding("utf-8");

%>
<jsp:setProperty property="*" name="dto"/>
<%
	int result=dao.insert(dto);

	StringBuffer sb= new StringBuffer();
	
	sb.append("{");
	sb.append("\"result\":"+result);	
	sb.append("}");
	
	out.print(sb.toString());
	
%>