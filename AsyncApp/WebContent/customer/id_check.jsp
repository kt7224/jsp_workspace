<%@page import="com.sds.customer.dao.CustomerDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%!CustomerDAO dao = new CustomerDAO(); %>
<%
	//넘겨받은 아이디를 이용하여, 중복 체크후, 알맞는 메세지 결과를 클라이언트에 전달하자!!
	String id=request.getParameter("id");
	boolean result=dao.isExist(id);
	
	if(result){
		out.print("아이디가 이미 사용중입니다.");
	}else{
		out.print("사용가능한 아이디 입니다.");
	}
%>