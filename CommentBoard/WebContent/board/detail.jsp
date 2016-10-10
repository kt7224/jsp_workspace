<%@page import="java.util.List"%>
<%@page import="com.sds.comments.domain.Comments"%>
<%@page import="com.sds.comments.dao.CommentsDAO"%>
<%@page import="com.sds.board.domain.Board"%>
<%@page import="com.sds.board.dao.BoardDAO"%>
<%@ page contentType="text/html;charset=utf-8"%>
<%!BoardDAO dao= new BoardDAO();
	CommentsDAO comDao= new CommentsDAO();
%>
<%
	request.setCharacterEncoding("utf-8");
	int board_id=Integer.parseInt(request.getParameter("board_id"));

	int result=dao.hitUp(board_id);
	
	Board dto=dao.select(board_id);
	
	//현재 내가 보고있는 게시물의 댓글목록 가져오기!
	List<Comments> list=comDao.selectAll(board_id);
	//out.print("댓글 갯수 : "+list.size());
%>
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
function regist(){
	if(form2.writer.value==""){
		alert("댓글작성자를 입력하세요!!!");
		form2.writer.focus();
		return;
	}
	if(form2.title.value==""){
		alert("댓글을 입력하세요!!!");
		form2.title.focus();
		return;
	}
	form2.action="/board/comments_regist.jsp?board_id=<%=board_id%>";
	form2.submit();
}
</script>
</head>
<body>
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
   <form name="form1" method="post">
	<tr>	
		<td id="list"><table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td width="100">&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr id="writer">
            <td height="25" align="center">작성자</td>
            <td><input type="text" name="writer" value="<%=dto.getWriter() %>"></td>
          </tr>
          <tr id="title">
            <td height="25" align="center">제목</td>
            <td><input type="text" name="title" value="<%=dto.getTitle() %>"></td>
          </tr>
          <tr id="content">
            <td align="center">내용</td>
            <td><textarea name="content" style=""><%=dto.getContent() %></textarea></td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </table></td>
	</tr>
  <tr>
    <td height="30" align="right" style="padding-right:2px;">
	<img src="/board/images/write_btin.gif" width="61" height="20">
	<img src="/board/images/delete_btn.gif" width="61" height="20"> <a href="list.jsp"><img src="/board/images/list_btn.gif" width="61" height="20" border="0"></a> </td>
  </tr>
  </form>
  <!-- 댓글 영역 begin -->
  <form name="form2" method="post">
  <tr>
  	<td align="center">
	<input type="text" name="writer"  size="5">
	<input type="text" name="title"  size="70">
	<input type="button" value="등록" onClick="regist()">
	<!-- form tag의 action url을 이용하여 전송하자! 
	<input type="hidden" name="board_id" value="<%=dto.getBoard_id()%>">
	 -->
  	</td>
  </tr>
   </form>
	<%if(list.size()!=0){%>
	<tr>
	<td align="center">
	<table width="100%" border="1px">
	
	<%for(int i=0;i<list.size();i++){ %>
	<%Comments comDto=list.get(i); %>
	<tr>
		<td><%=comDto.getWriter()%></td>
		<td><%=comDto.getTitle()%></td>
		<td><%=comDto.getRegdate().substring(0,10)%></td>
		<!--
		<input type="text" name="writer"  size="5" value="<%=comDto.getWriter()%>">
		<input type="text" name="title"  size="70" value="<%=comDto.getTitle()%>">
		<input type="button" value="수정" onClick="">
		-->
	</tr>
	<%} %>

	</table>	
	</td>
	</tr>

	<%}%>
	
	
  <!-- 댓글 영역 END -->
  <tr>
    <td height="1" bgcolor="#CCCCCC"></td>
  </tr>
  <tr>
    <td height="20" align="center" id="copyright">Copyright zino All Rights Reserved </td>
  </tr>
</table>
</body>
</html>
