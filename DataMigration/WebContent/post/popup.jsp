<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<style>
#area{
	background:yellow;
	width:100%;
	height:400px;
	overflow:scroll;
}

</style>
<script>


function getXhttp(){
	var xhttp;
	if(xhttp==undefined){
		xhttp=new XMLHttpRequest();
	}
	
	return xhttp;
}
//오프너에게 데이터 전송(메모리)
function sendData(zip){
	opnner.form1.zipcord.value=zip;
}

function findZip(){
	var xhttp= getXhttp();
	//alert(xhttp);
	
	xhttp.onreadystatechange=function(){
		if(xhttp.readyState==4&&xhttp.Status==200){
			alert(xhttp.responseText);
			var data=xhttp.responseText;
			var json=JSON.parse(data);
			
			var area= document.getElementById("area");
			var list=json.zipList;
			for(var i=0; i< list.length;i++){
				var obj=list[i];
				area.innerHTML="<a href=\"javascript:sendData('"+obj.zipcord+"')\">"+obj.zipcord+"</a>";
			}
			
			
		}
		
	}
	
	xhttp.open("post","/post/list.jsp",true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("dong="+form1.dong.value);
	
}

</script>
</head>
<body>
	<form name="form1" method="post">
		<input type="text" name="dong"> <input type="button" value="검색" onClick="findZip()">
	</form>
	<br>
	<div id="area">
	
	</div>
</body>
</html>