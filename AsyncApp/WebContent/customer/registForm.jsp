<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script>
	function regist() {
		var xhttp=getHttp();
		//서버의
		xhttp.onreadystatechange = function() {
			//서버의 상태가 변할때마다 우측의 콜백함수가 호출된다!!
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				
				//서버에 회원 등록이 완료 되었다면!!
				if(xhttp.responseText==1){
					//비동기로 새로운 요청을 시도!!
					//alert("등록성공");
					getlist();
				}
			}
		}
		
		xhttp.open("post", "/customer/insert.jsp", true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send("id="+form1.id.value+"&password="+form1.password.value+"&zipcode1="+form1.zipcode1.value+"&zipcode2="+form1.zipcode2.value+"&addr1="+form1.addr1.value+"&addr2="+form1.addr2.value);
	}
	/*
	 동기 방식으로 아이디 중복 조회를 요청할 경우, 서버의 응답이 오기 전까지 메인 실행부는 아무것도 하지 못하며, 
	 메인 실행부가 요청을 하러 가기때문에 화면은 새로고침이 일어난다.
	 즉 웹의 단점....
	 해결책) 요청시 비동기 방식으로 처리하자,
	 비동기 방식이란 서버의 응답이 올때까지 기다릴 필요 없는 요청방식을 말한다.
	 예) 검색,지도 웹을 마치 응용프로그램 처럼 상태를 유지하는 것처럼 보이려고 할때!!!
	 참고) X-Internet 솔루션에는 miplatform이란게 있다...(국내업체)
	 */

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

	function idCheck() {
		var xhttp = getHttp();

		//서버로부터 응답받은 데이터를 처리해 보자!
		/*
		0: request not initialized 
		1: server connection established
		2: request received 
		3: processing request 
		4: request finished and response is ready
		 */
		//서버의 상태에 따라 아래의 콜빽 함수가 호출된다..
		//서버의 상태는 총 0~4까지 5단계까지 있다..
		//비동기방식을 처리함에 있어 서버의 응답타이밍을 알수있는 유일한 단서~~
		xhttp.onreadystatechange = function() {

			if (xhttp.readyState == 0) {
				console.log("요청할 준비가 안되어 있습니다.");
			} else if (xhttp.readyState == 1) {
				console.log("서버와 연결되었습니다." + xhttp.status);
			} else if (xhttp.readyState == 2) {
				console.log("서버에 요청이 전달되었습다." + xhttp.status);
			} else if (xhttp.readyState == 3) {
				console.log("서버에서 요청을 처리하고있습니다." + xhttp.status);
			} else if (xhttp.readyState == 4) {
				console.log("요청에 대한 응답할 준비가 끝났습니다." + xhttp.status);
			}

			
			//개발자는 제4단계와 서버에서 아무런 문제가 없다는 HTTP응답코드를 200으로 받았을때, 원하는 처리를 해야한다.
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				//alert(xhttp.responseText);
				document.getElementById("msg").innerHTML = xhttp.responseText;
			}
		}

		//비동기 요청
		xhttp.open("get", "/customer/id_check.jsp?id=" + form1.id.value, true);
		xhttp.send(); //이시점에 요청이 일어남
	}
	function getlist(){
		var xhttp=getHttp();
		
		xhttp.onreadystatechange=function(){
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				//alert(xhttp.responseText);
				var json=JSON.parse(xhttp.responseText);
				
				var tag="<table border=\"1px\">";
				
				for(i=0; i<json.customerList.length; i++){
				var customer=json.customerList[i];
				tag=tag+"<tr>";
				tag=tag+"<td>"+customer.customer_id+"</td>";
				tag=tag+"<td>"+customer.id+"</td>";
				tag=tag+"<td>"+customer.password+"</td>";
				tag=tag+"<td>"+customer.zipcode1+"</td>";
				tag=tag+"<td>"+customer.zipcode2+"</td>";
				tag=tag+"<td>"+customer.addr1+"</td>";
				tag=tag+"<td>"+customer.addr2+"</td>";
				tag=tag+"<td>"+customer.regdate+"</td>";
				tag=tag+"</tr>";	
				}
				
				tag=tag+"</table>";
				alert(tag);
				document.getElementById("customerList").innerHTML=tag;
				
			}
		}
		
		xhttp.open("get","/customer/list.jsp",true);
		xhttp.send();
		
	}
	function zipcode(){
		var zipcord=window.open("post.jsp","_blank","width=400px,height=600px");
		
	}
</script>
</head>
<body>
	<form name="form1" method="post">
		<pre>
		ID	 1  : <input type="text" name="id"> <input type="button" value="중복확인" onClick="idCheck()">
				<span id="msg"></span> 
		비밀번호   : <input type="password" name="password">
		우편번호   : <input type="text" name="zipcode1">-<input type="text"	name="zipcode2"><input type="button" value="우편번호검색" onClick="zipcode()"> 
		주소       : <input type="text" name="addr1">
		             <input type="text" name="addr2">
	 
		<input type="button" value="가입" onClick="regist()">
	</pre>
	</form>
	<p>
	<div id="customerList"></div>
	
	
	
</body>
</html>