<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	String color=request.getParameter("color");
	
	//만일 최초접속자와 같이 파라미터가 없이 요청을 하면 color의 디폴트 값을 pink로 설정한다!!
	if(color==null){
		color="pink";
	}
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script>
function setBg(){
	var c=document.getElementById("color");
	location.href="/color/bg.jsp?color="+c.value;
}
</script>
</head>
<body bgcolor="<%=color %>">
	<select name="color" id="color">
		<option value="Yellow">Yellow</option>
		<option value="Red">Red</option>
		<option value="Green">Green</option>
		<option value="Blue">Blue</option>
		<option value="Navy">Navy</option>
	
	</select>
	<input type="button" value="OK" onClick="setBg()">
</body>
</html>