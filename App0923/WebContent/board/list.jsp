<%@ page contentType="text/html;charset=utf-8"%>

<%
	//게시판 페이징처리 로직에 필요한 변수 선언~
	int currentPage = 1;
	if (request.getParameter("currentPage") != null) {
		//링크를 눌렀을때만 (파라미터를 가지고 )
		currentPage = Integer.parseInt(request.getParameter("currentPage"));
	}
	//레코드 관련
	int totalRecord = 67;//총 레코드 수!!
	int pageSize = 10;//한페이지당 보여질 레코드의 갯수
	int firstRecord =1+((currentPage-1)*pageSize);
	int lastRecord =(currentPage*pageSize);
	if(lastRecord>totalRecord){
		lastRecord=totalRecord;
	}
	//페이지 관련
	int totalPage = 0;
	int blockSize = 5+6;
	totalPage = (int) Math.ceil((float) totalRecord / pageSize);
	//힌트: 아래의 공식은 이미 위에서 선언된 변수를 조합하면 된다.
	int firstPage=1+((int)Math.floor(((float)currentPage)-1)/blockSize)*blockSize;//블럭당, for문의 시작 페이지	
	int lastPage=blockSize+((int)Math.floor(((float)currentPage-1)/blockSize)*blockSize);//블럭당, for문의 마지막 페이지
	if(lastPage>totalPage){
		lastPage=totalPage;
	}
	

	out.print("현재 페이지는 " + currentPage + "<br>");
	out.print("totalRecord는" + totalRecord + "<br>");
	out.print("pageSize는" + pageSize + "<br>");
	out.print("totalPage는" + totalPage + "<br>");
	out.print("blockSize는" + blockSize + "<br>");
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>Untitled Document</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<style>
#box {
	border: 1px solid #CCCCCC
}

#title {
	font-size: 9pt;
	font-weight: bold;
	color: #7F7F7F;
	돋움
}

#category {
	font-size: 9pt;
	color: #7F7F7F;
	돋움
}

#keyword {
	width: 80px;
	height: 17px;
	font-size: 9pt;
	border-left: 1px solid #333333;
	border-top: 1px solid #333333;
	border-right: 1px solid #333333;
	border-bottom: 1px solid #333333;
	color: #7F7F7F;
	돋움
}

#paging {
	font-size: 9pt;
	color: #7F7F7F;
	돋움
}

#list td {
	font-size: 9pt;
}

#copyright {
	font-size: 9pt;
}

a {
	text-decoration: none
}

img {
	border: 0px
}
/*현제보고있는 페이지에 대한 시각적 알람 효과*/
.pageNum{
	color:red;
	font-size:14pt;
	font-weight:bold;
}
</style>
</head>
<body>
	<table id="box" align="center" width="603" border="0" cellpadding="0"
		cellspacing="0">
		<tr>
			<td colspan="5"><img src="/board/images/ceil.gif" width="603"
				height="25"></td>
		</tr>
		<tr>
			<td height="2" colspan="5" bgcolor="#6395FA"><img
				src="/board/images/line_01.gif"></td>
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

					<%
						for (int i = firstRecord; i <= lastRecord; i++) {
					%>
					<tr align="center" height="20px"
						onMouseOver="this.style.background='#FFFF99'"
						onMouseOut="this.style.background=''">
						<td width="50"><%=i%></td>
						<td width="303"><a href="detail.jsp">제목입니다.</a></td>
						<td width="100">관리자</td>
						<td width="100">2008/02/10</td>
						<td width="50">5</td>
					</tr>
					<tr>
						<td height="1" colspan="5" background="/board/images/line_dot.gif"></td>
					</tr>
					<%
						}
					%>
				</table>
			</td>
		</tr>

		<tr>

			<td id="paging" height="20" colspan="5" align="center">
			<%if(currentPage!=1){%><a 	href="/board/list.jsp?currentPage=<%=currentPage-1%>">◀</a><%}%> 
			<%for (int i = firstPage; i <= lastPage; i++) { %> 
				<a <%if(i==currentPage){%>class="pageNum" <%}%>href="/board/list.jsp?currentPage=<%=i%>">[<%=i%>]
			</a> 
			<%}%> 
			<%if(currentPage!=totalPage){%><a href="/board/list.jsp?currentPage=<%=currentPage+1%>">▶</a><%}%></td>

		</tr>

		<tr>
			<td height="20" colspan="5" align="right" style="padding-right: 2px;">
				<table width="160" border="0" cellpadding="0" cellspacing="0">
					<tr>
						<td width="70"><select name="select" id="category">
								<option>제목</option>
								<option>내용</option>
								<option>글쓴이</option>
						</select></td>
						<td width="80"><input name="textfield" id="keyword"
							type="text" size="15"></td>
						<td><img src="/board/images/search_btn.gif" width="32"
							height="17"></td>
					</tr>
				</table>
			</td>
		</tr>
		<tr>
			<td height="30" colspan="5" align="right" style="padding-right: 2px;"><a
				href="write.jsp"><img src="/board/images/write_btin.gif"
					width="61" height="20" border="0"></a></td>
		</tr>
		<tr>
			<td height="1" colspan="5" bgcolor="#CCCCCC"></td>
		</tr>
		<tr>
			<td height="20" colspan="5" align="center" id="copyright">Copyright
				zino All Rights Reserved</td>
		</tr>
	</table>
</body>
</html>
