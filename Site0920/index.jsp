<%@ page contentType="text/html;charset=utf-8"%>
<%!
int x=0;
%>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
고양이 웹어플리케이션 구축 성공!!
	<table width="200px" border="1px">
	<%for(int i=0;i<10;i++){%>
		<tr>
		<%for(int j=0; j<2;j++){%>
		<td>
		<%out.print(i+j);%>
		</td>
		<%}%>
		</tr>
	<%}%>
	<table>
</body>
</html>
