<%@ page contentType="text/html;charset=utf-8"%>
<%@ page import="java.sql.DriverManager"%>
<%@ page import="java.sql.Connection"%>
<%@ page import="java.sql.PreparedStatement"%>
<%!
	Connection con;
	PreparedStatement pstmt;
%>
<%
	//클라이언트가 전송한 데이터를 받아서 오라클에 insert 시켜보자~
	
	//클라이언트가 현재 페이지를 요청하면서 보낸 파라미터를 낚아채보자!
	request.setCharacterEncoding("utf-8"); //파라미터에 대한 언어 인코딩 지정
	String id=request.getParameter("id");
	String password=request.getParameter("password");
	String name=request.getParameter("name");

	out.print("ID : "+id+"비번 : "+password+"이름 : "+name);
	String sql="insert into member(member_id,id,password,name)";
	sql= sql+"values(seq_member.nextval,?,?,?)";
	
	out.print(sql);
	//드라이버 로드
	Class.forName("oracle.jdbc.driver.OracleDriver");
	con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","java0919","java0919");
	if(con!=null){
		pstmt = con.prepareStatement(sql);
		pstmt.setString(1, id);
		pstmt.setString(2, password);
		pstmt.setString(3, name);

		int result=pstmt.executeUpdate();
		if(result!=0){
			out.print("성공성공");
		}else{
			out.print("실패 실패");
		}

	}
	
	if(pstmt!=null){
		pstmt.close();
	}
	if(con!=null){
		con.close();
	}
	

%>

