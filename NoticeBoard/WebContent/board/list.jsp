<%@page import="java.util.List"%>
<%@page import="com.sds.notice.domain.Notice"%>
<%@page import="com.sds.notice.dao.NoticeDAO"%>
<%@page import="sun.text.normalizer.CharTrie.FriendAgent"%>
<%@ page contentType="text/html;charset=utf-8"%>
<%!
	NoticeDAO dao = new NoticeDAO();
%>
<%
	List<Notice> dtoArr = null;
	if(request.getParameter("record")==null){
		dtoArr= dao.selectAll();	
	}else{
		out.print(request.getParameter("record")+request.getParameter("data")+"<br>");
		dtoArr= dao.search(request.getParameter("record"),request.getParameter("data"));
		out.print(dtoArr);
	}
	
	int currentPage=1;//현재 페이지
	if(request.getParameter("currentPage")!=null){
		currentPage=Integer.parseInt(request.getParameter("currentPage"));
	}
	int totalRecord=dtoArr.size();//총 레코드 수
	int pageSize=10;//한 Page당 보여질 레코드 수
	int totalPage= (int)Math.ceil((float)totalRecord/pageSize);
	int blockSize=10;//block당 보여질 page 수
	int curPos=(currentPage-1)*pageSize;//각 페이지당 시작 index
	int num=totalRecord-curPos;//각 페이지당 시작번호
	
	int firstPage=currentPage-((currentPage-1)%blockSize);
	int lastPage=firstPage+blockSize-1;
	
	out.print("총 Record수는:"+totalRecord+"<br>");
	out.print("현재 Page:"+currentPage+"<br>");
	out.print("총 Page:"+totalPage);
	

%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>Untitled Document</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<style>
#box{border:1px solid #CCCCCC}
#title{font-size:9pt;font-weight:bold;color:#7F7F7F;돋움}
#category{font-size:9pt;color:#7F7F7F;돋움}
#keyword{
	width:80px;
	height:17px;
	font-size:9pt;
	border-left:1px solid #333333;
	border-top:1px solid #333333;
	border-right:1px solid #333333;
	border-bottom:1px solid #333333;
	color:#7F7F7F;돋움
}
#paging{font-size:9pt;color:#7F7F7F;돋움}
#list td{font-size:9pt;}
#copyright{font-size:9pt;}
a{text-decoration:none}
img{border:0px}
/* .점을 찍고 정의해놓은 스타일 집합=클래스*/
.pageNum{
	color:green;
	font-weight:bold;
	font-size:14pt;
}
</style>
<script>
window.addEventListener("load",function(){
	var category=document.getElementById("category");
	var keyword=document.getElementById("keyword");
});
function search(){
	//alert(keyword.value);
	var record=null;
	var data=keyword.value;
	if(category.value=="제목"){
		record="title";
	}else if(category.value=="내용"){
		record="content";
	}else if(category.value=="글쓴이"){
		record="writer";
	}
	alert(data);
	if(data!=""){
		location.href="/board/list.jsp?record="+record+"&data="+data;
	}else{
		alert("검색어를 입력해주세요!");
	}
}
</script>
</head>
<body>
<table id="box" align="center" width="603" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td colspan="5"><img src="/board/images/ceil.gif" width="603" height="25"></td>
  </tr>
  <tr>
    <td height="2" colspan="5" bgcolor="#6395FA"><img src="/board/images/line_01.gif"></td>
  </tr>
  <tr id="title" align="center">
    <td width="50" height="20">번호</td>
    <td width="303" height="20">제목</td>
    <td width="100" height="20">글쓴이</td>
    <td width="100" height="20">날짜</td>
    <td width="50" height="20">조회수</td>
  </tr>
  <tr>
    <td height="1" colspan="5" bgcolor="#CCCCCC"></td>
  </tr>
	<tr>	
		<td colspan="5" id="list">
		  <table width="100%" border="0" cellpadding="0" cellspacing="0">
		  <%for(int i=1;i<=pageSize;i++){ %>
		  	<%if(num<1)break; %>
		    <tr align="center" height="20px" onMouseOver="this.style.background='#FFFF99'" onMouseOut="this.style.background=''">
			  <td width="50"><%=num--%></td>
			  <td width="303"><a href="detail.jsp?notice_id=<%=dtoArr.get(curPos).getNotice_id()%>"><%=dtoArr.get(curPos).getTitle() %></a></td>
			  <td width="100"><%=dtoArr.get(curPos).getWriter() %></td>
			  <td width="100"><%=dtoArr.get(curPos).getRegdate().substring(0, 10) %></td>
			  <td width="50"><%=dtoArr.get(curPos).getHit() %></td>
			<%curPos++;%>
		    </tr>
		    <%} %>
			<tr>
				<td height="1" colspan="5" background="/board/images/line_dot.gif"></td>
			</tr>
		  </table>		</td>
	</tr>
  <tr>
    <td id="paging" height="20" colspan="5" align="center">
  <%if((firstPage-1)<1){ %>  
  <a href="javascript:alert('이전 페이지가 없습니다.');">◀</a>
  <%}else{%>
  <a href="/board/list.jsp?currentPage=<%=firstPage-1%>">◀</a>
  <%}%>
  
   <%for(int i=firstPage;i<=lastPage;i++){%>
  	 <%if(i>totalPage)break; %>
  	 <a <%if(currentPage==i){ %>class="pageNum"<%}%> href="/board/list.jsp?currentPage=<%=i%>">
  	 [<%=i %>]
  	 </a>
   <%}%>
  
   <%if((lastPage+1)>totalPage){ %>
   <a href="javascript:alert('다음 페이지가 없습니다.');">▶</a>
   <%}else{ %>
  <a href="/board/list.jsp?currentPage=<%=lastPage+1%>">▶</a>
  <%} %>
    </td>
  </tr>
  <tr>
    <td height="20" colspan="5" align="right" style="padding-right:2px;">
	<table width="160" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td width="70">
          <select name="select" id="category">
            <option>제목</option>
            <option>내용</option>
            <option>글쓴이</option>
          </select>        </td>
        <td width="80">
          <input name="textfield" id="keyword" type="text" size="15">        </td>
        <td><img src="/board/images/search_btn.gif" width="32" height="17" onClick="search()"></td>
      </tr>
    </table></td>
  </tr>
  <tr>
    <td height="30" colspan="5" align="right" style="padding-right:2px;"><a href="write.jsp"><img src="/board/images/write_btin.gif" width="61" height="20" border="0"></a></td>
  </tr>
  <tr>
    <td height="1" colspan="5" bgcolor="#CCCCCC"></td>
  </tr>
  <!--웹컨테이너가 해당 파일의 코드를 그냥 붙여 넣음 -->
  <%@ include file="/inc/bottom.jsp"%>
</table>
</body>
</html>
