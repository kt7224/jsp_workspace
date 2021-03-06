<%@page import="java.util.List"%>
<%@page import="com.favor.model.dao.FavorDAO"%>
<%@page import="com.favor.domain.Favor"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%!FavorDAO dao = new FavorDAO();%>
<%
	List<Favor> list = dao.selectAll();
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Marker animations with <code>setTimeout()</code></title>
<style>
html, body {
	height: 100%;
	margin: 0;
	padding: 0;
}

#map {
	height: 100%;
}

#floating-panel {
	position: absolute;
	top: 10px;
	left: 25%;
	z-index: 5;
	background-color: #fff;
	padding: 5px;
	border: 1px solid #999;
	text-align: center;
	font-family: 'Roboto', 'sans-serif';
	line-height: 30px;
	padding-left: 10px;
}

#floating-panel {
	margin-left: -52px;
}
</style>
</head>
<body>
	<div id="floating-panel">
		<button id="drop" onclick="drop()">Drop Markers</button>
	</div>
	<div id="map"></div>
	<script>

// If you're adding a number of markers, you may want to drop them on the map
// consecutively rather than all at once. This example shows how to use
// window.setTimeout() to space your markers' animation.

var neighborhoods = [
  <%for (int i = 0; i < list.size(); i++) {%>
  <%Favor dto = list.get(i);%>
 <%if (i < list.size()) {%>
  {lat: <%=dto.getLati()%>, lng: <%=dto.getLng()%>},
  <%} else {%>
  {lat: <%=dto.getLati()%>, lng: <%=dto.getLng()%>}
  <%}
			}%>
];

var markers = [];
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 37.497602, lng: 127.038105}
  });
}

function drop() {
  clearMarkers();
  for (var i = 0; i < neighborhoods.length; i++) {
    addMarkerWithTimeout(neighborhoods[i], i * 200);
  }
}

function addMarkerWithTimeout(position, timeout) {
  window.setTimeout(function() {
    markers.push(new google.maps.Marker({
      position: position,
      map: map,
      animation: google.maps.Animation.DROP
    }));
  }, timeout);
}
//화면에 보이는 모든 정보 지우기
function clearMarkers() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);//marker 초기화 
    }
  markers = [];//배열 정보 초기화
}

    </script>
	<script async defer
		src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBX8drDvOqr_tyz7EhnU4Y5Hko8HYVJrrw&callback=initMap"></script>
</body>
</html>