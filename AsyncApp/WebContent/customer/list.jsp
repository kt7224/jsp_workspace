<%@page import="com.sds.customer.domain.Customer"%>
<%@page import="java.util.List"%>
<%@page import="com.sds.customer.dao.CustomerDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%!CustomerDAO dao= new CustomerDAO(); %>
<%
	//회원들의 정보를 ajax 객체에게 응답해주자!!
	List<Customer> list= dao.selectAll();
	
	StringBuffer sb = new StringBuffer();
	sb.append("{");
	sb.append("\"customerList\" : [");
	

	for(int i=0;i<list.size();i++){
		sb.append("{");
		sb.append("\"customer_id\":"+list.get(i).getCustomer_id()+",");
		sb.append("\"id\" : \""+list.get(i).getId()+"\",");
		sb.append("\"password\" : \""+list.get(i).getPassword()+"\",");
		sb.append("\"zipcode1\" : \""+list.get(i).getZipcode1()+"\",");
		sb.append("\"zipcode2\" : \""+list.get(i).getZipcode2()+"\",");
		sb.append("\"addr1\" : \""+list.get(i).getAddr1()+"\",");
		sb.append("\"addr2\" : \""+list.get(i).getAddr2()+"\",");
		sb.append("\"regdate\" : \""+list.get(i).getRegdate()+"\"");
		
		if(i!=list.size()-1){
			sb.append("},");
		}else{
			sb.append("}");
		}
		
	}
	sb.append("]");
	sb.append("}");
	
	out.print(sb.toString());
%>