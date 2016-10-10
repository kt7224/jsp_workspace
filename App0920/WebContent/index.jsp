<%@ page contentType="text/html; charset=utf-8"%>
<%
	//서버에서 정해놓은 객체들을 가리켜 내장객체
	//JSP에서 지원하는 내장객체에는 어떤것이 있는지 조사해보자~
	
	//1. out내장 객체 (client의 browser에 문자열 출력을 처리하는 Stream객체)
	out.print("");

	//2.request객체
	String ip=request.getRequestURI();
	out.print("ip는 "+ip);
	
	//3.
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>
나의 웹사이트 성공!
</body>
</html>