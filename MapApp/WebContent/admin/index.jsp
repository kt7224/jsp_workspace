<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!doctype html>	
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<style>
#map {
	width: 70%;
	height: 800px;
	border: 3px solid red;
	float: left;
}

#info {
	width: 25%;
	height: 800px;
	border: 3px solid green;
	background: yellow;
	float: left;
}

ul {
	width: 90%;
}

ul li {
	list-style: none;
}

ul li img {
	width: 90%;
}

textarea {
	width: 90%;
}

#star img {
	width: 20%;
}
</style>
<script>
	//원하는 위도 경도 및 Zoom을 설정하여 지도를 불러오자
	function loadMap() {
		var container = document.getElementById("map");
		var options = {
			center : new google.maps.LatLng(37.497602, 127.038105),
			zoom : 15
		}

		var map = new google.maps.Map(container, options);
		//	alert("맴객체 생성"+map);
		var lati;
		var lng;
		
		map.addListener('click', function(e) {
			//	alert(e.latLng.lat() + "," + e.latLng.lng());
			lati=e.latLng.lat();
			lng=e.latLng.lng();
			form1.lati.value = lati;
			form1.lng.value = lng;
				
			addMarker(lati,lng,map);
		});
	}
	
	//marker생성 
	function addMarker(lati,lng,map){
		var image="/images/Full.png";
		//클릭시 마커 등록
		var marker = new google.maps.Marker({
			position : {lat: lati, lng: lng},
			animation : google.maps.Animation.DROP,
			map : map,
			title : '요기 맛집?',
			icon: image,
			label: "맛!"
		});
		var infoWindow = new google.maps.InfoWindow({
			content : "<div>맛집이야</div>"
		});
		
		marker.addListener('click',function(){
			infoWindow.open(map,marker);
		}); 
		
		marker.addListener('dblclick',function(){
			if(confirm("해당 마커를 삭제 하시겠습니까?")){
			marker.setMap(null);
			}
		}); 
	}
	
	function regist(){
		form1.encoding="multipart/form-data";
		form1.action="/admin/regist";	
		form1.submit();
	}
	
	function preView(input){
		var preview = document.getElementById("pic");
		
		if(input.files && input.files[0]){
			var reader = new FileReader();
			
			reader.onload=function(e){
				preview.setAttribute("src",e.target.result);
			}
			reader.readAsDataURL(input.files[0]);
		}else{
			preview.setAttribute("src","placeholder.png");
		}
		
	}
</script>

</head>
<body>
	<div id="map">여기에 지도 나올 예정</div>
	<div id="info">
		<form name="form1" method="post">
			<ul>
				<li>위도 : <input type="text" name="lati"></li>
				<li>경도 : <input type="text" name="lng"></li>
				<li>상호 : <input type="text" name="name"></li>

				<li>사진 : <input type="file" name="img" onChange="preView(this)"></li>
				<li><img id="pic"></li>
				<li><textarea rows="10" cols="30" name="content"></textarea></li>
				<li><select name="score">
						<%
							for (int i = 1; i <= 10; i++) {
						%>
						<option value="<%=i*0.5 %>"><%=i * 0.5%></option>
						<%
							}
						%>
				</select></li>
				<li><span id="star"> <img src="/images/Half.png">
				</span></li>
				<li><input type="button" value="등록" onClick="regist()"></li>
			</ul>
		</form>
	</div>
</body>
</html>
<script
	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBX8drDvOqr_tyz7EhnU4Y5Hko8HYVJrrw&callback=loadMap"></script>