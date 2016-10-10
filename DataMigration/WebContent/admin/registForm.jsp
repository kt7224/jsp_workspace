<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script>
function regist(){
	if(checkFile(form1.file)){
		alert("등록 할수없는 확장자 파일입니다.");
		return;
	};
 	form1.encoding="multipart/form-data";
	form1.action="/admin/regist.jsp";
	form1.submit(); 
}

function checkFile(obj){
	var path=obj.value;
	var dot=path.lastIndexOf(".");

	var extension=path.substring(dot+1,path.length);
//	alert(extension);
	var result=false;
	
	if(extension !="xlsx" && extension !="xls"){
	
		result=true;
	}
	return result;	
}

</script>
</head>
<body>
	<form name="form1" method="post">
	<input type="file" name="file" onchange="checkFile(this)">
	<input name="res" type="button" value="우편번호 등록" onClick="regist()">
	</form>
</body>
</html>