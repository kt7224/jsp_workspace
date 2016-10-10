<%@page import="com.sds.customer.domain.Customer"%>
<%@page import="com.sds.customer.dao.CustomerDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%! CustomerDAO dao= new CustomerDAO(); %>
<%request.setCharacterEncoding("utf-8"); %>
<jsp:useBean id="dto" class="com.sds.customer.domain.Customer"/>
<jsp:setProperty property="*" name="dto"/>
<%
	int result=dao.insert(dto);
	
	out.print(result);
	
%>
