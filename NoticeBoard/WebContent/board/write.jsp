<!--ckeditor 태그를 사용하기위해 -->
<%@ taglib uri="http://ckeditor.com" prefix="ckeditor" %>
<%@page import="java.util.HashMap"%>
<%@page import="java.util.Map"%>

<%@ page contentType="text/html;charset=utf-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>Untitled Document</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<style>
#box{border:1px solid #CCCCCC}
#writer,#title,#content{font-size:9pt;font-weight:bold;color:#7F7F7F;돋움}
input{
	font-size:9pt;
	border-left:1px solid #C3C3C3;
	border-top:1px solid #C3C3C3;
	border-right:1px solid #C3C3C3;
	border-bottom:1px solid #C3C3C3;
	color:#7F7F7F;돋움
}
#title input{width:250px;}
#content textarea{
width:503px;
border:0;
height:153;
background:url("/board/images/write_bg.gif");
border:#C3C3C3 1px solid 
}
#copyright{font-size:9pt;}
a{text-decoration:none}
img{border:0px}
</style>
<script>
window.addEventListener("load",function(){
	var bt_write=document.getElementById("bt_write");
	
	bt_write.addEventListener("click",function(){
		regist();			
	});
});
	
function regist(){
	//오라클 입력을 요청하자!
	form1.action="/board/regist.jsp";
	form1.submit();//전송
}

</script>
</head>
<body>
<form name="form1" method="post">
<table id="box" align="center" width="603" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td><img src="/board/images/ceil.gif" width="603" height="25"></td>
  </tr>
  <tr>
    <td height="2" bgcolor="#6395FA"><img src="/board/images/line_01.gif"></td>
  </tr>
  <tr>
    <td height="1" bgcolor="#CCCCCC"></td>
  </tr>
	<tr>	
		<td id="list"><table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td width="100">&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr id="writer">
            <td height="25" align="center">작성자</td>
            <td><input type="text" name="writer"></td>
          </tr>
          <tr id="title">
            <td height="25" align="center">제목</td>
            <td><input type="text" name="title"></td>
          </tr>
          <tr id="content">
            <td align="center">내용</td>
            <td><textarea id="area" name="content" style="" ></textarea>
            <!-- 아래의 태그는 클라이언트측의 html태그가 아니라, 서버에서 실행됭수있는 jsp 태그이다.
            	즉, jsp 태그를 좀더 간소화하기 위해 JavaEE에서는 커스텀 태그라는 것을 지원한다. -->
            <ckeditor:replace replace="area" basePath="/ckeditor/" />
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </table></td>
	</tr>
  <tr>
    <td height="30" align="right" style="padding-right:2px;">
	<img id="bt_write" src="/board/images/write_btin.gif" width="61" height="20" > 
	<a href="list.jsp"><img src="/board/images/list_btn.gif" width="61" height="20"></a>	</td>
  </tr>
  <tr>
    <td height="1" bgcolor="#CCCCCC"></td>
  </tr>
  <%@ include file="/inc/bottom.jsp" %>
</table>
</form>
</body>
</html>
