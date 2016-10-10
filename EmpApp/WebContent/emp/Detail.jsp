<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="com.sds.pool.PoolManager"%>
<%@ page import="java.sql.Connection"%>
<%@ page import="java.sql.PreparedStatement"%>
<%@ page import="java.sql.ResultSet"%>

<%!
	PoolManager pool;
	Connection con;
	PreparedStatement pstmt;
	ResultSet rs;

	String[] empInfo = new String[8];
%>

<%
	//선택한 사원 한사람에 대한 정보를 가져와서 출력해보자!!!
	String empno = request.getParameter("empno");
	String sql = "select * from emp where empno=" + empno;

	pool = PoolManager.getInstance();
	con = pool.getConnection();
	pstmt = con.prepareStatement(sql);
	rs = pstmt.executeQuery();

	while (rs.next()) {
		empInfo[0] = Integer.toString(rs.getInt("empno"));
		empInfo[1] = rs.getString("ename");
		empInfo[2] = rs.getString("job");
		empInfo[3] = Integer.toString(rs.getInt("mgr"));
		empInfo[4] = rs.getString("hiredate");
		empInfo[5] = Integer.toString(rs.getInt("sal"));
		empInfo[6] = Integer.toString(rs.getInt("comm"));
		empInfo[7] = Integer.toString(rs.getInt("deptno"));
	}

	pool.freeConnection(con, pstmt, rs);

%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script>
	//이전화면 보여주기!!
	function prev() {
		history.back();
	}
	function update() {
		//오라클에 insert 시켜달라고 서버측에 요청하자!
		form1.action = "/update"; //요청할 서버의 url
		form1.submit();//전송 행위!! 전송이 일어나는 시점!!!
	}
	function remove() {
		form1.action = "/remove"; //요청할 서버의 url
		form1.submit();//전송 행위!! 전송이 일어나는 시점!!!
	}
	
	function golist() {
		location.href="/list";
	}
	
</script>
</head>
<body bgcolor="cyan">
	<Form name="form1" method="post">
		<div>
			<pre>
			EMPNO : <input type="text" name="empno" value=<%out.print(empInfo[0]);%>>
			ENAME : <input type="text" name="ename" value=<%out.print(empInfo[1]);%>>
			JOB	:	<input type="text" name="job" value=<%out.print(empInfo[2]);%>>
			MGR	:	<input type="text" name="mgr" value=<%out.print(empInfo[3]);%>>
			HIREDATE : <input type="text" name="hiredate" value=<%out.print(empInfo[4]);%>>
			SAL	:	<input type="text" name="sal" value=<%out.print(empInfo[5]);%>>
			COMM : <input type="text" name="comm" value=<%out.print(empInfo[6]);%>>
			DEPTNO : <input type="text" name="deptno" value=<%out.print(empInfo[7]);%>>
			<input type="button" value="수정" onClick="update()">	 <input
					type="button" value="삭제" onClick="remove()">  <input type="button"
					value="목록" onClick="golist()">
		</pre>
		</div>
	</Form>
</body>
</html>