<%@page import="com.sds.zipcode.domain.Zipcode"%>
<%@page import="java.util.List"%>
<%@page import="com.sds.zipcode.dao.ZipcodeDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%!ZipcodeDAO dao= new ZipcodeDAO(); %>    
<%
	List<Zipcode> list = dao.selectAll();

%>    
    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script>
function zipcode_search(){
	var xhttp = getHttp();
	
	xhttp.onreadystatechange= function(){
		
		if(xhttp.readyState==4&&xhttp.Status==200){
			
		}
	}
	
	
	xhttp.open("get","/customer/...",true);
	xhttp.send();
	
}

function getHttp() {
	var xhttp;//비동기 요청을 처리하는 핵심 객체!!!
	if (xhttp == undefined) {
		if (window.XMLHttpRequest) {
			xhttp = new XMLHttpRequest();
		} else {
			// code for IE6, IE5
			xhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	return xhttp;
}


</script>

</head>
<body>
	<form name="form1">
	<select name="column" >
		<option value="gugun">군</option>
		<option value="bungi">번지</option>
	</select>
	<input type="text" name="search"> <input type="button" value="검색">
	<br><br>
	<table border="1px" width="300">
		<tr>
			<td>zipcord</td>
			<td>시</td>
			<td>군</td>
			<td>동</td>
			<td>번지</td>
		</tr>
		<%for(int i=0;i<list.size();i++){ %>
		<%Zipcode dto=list.get(i); %>
		<tr>
			<td><%=dto.getZipcode()%></td>
			<td><%=dto.getSi() %></td>
			<td><%=dto.getGugun() %></td>
			<td><%=dto.getDong() %></td>
			<td><%=dto.getBungi() %></td>
		</tr>
		<%} %>
	</table>
	</form> 
</body>
</html>