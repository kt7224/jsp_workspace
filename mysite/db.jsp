<%@ page contentType="text/html;charset=utf-8"%>
<%@ page import="com.test.Dog"%>
<%@ page import="java.sql.DriverManager"%>
<%@ page import="java.sql.Connection"%>
<%@ page import="java.sql.PreparedStatement"%>
<%@ page import="java.sql.ResultSet"%>

<%!
	String driver="oracle.jdbc.driver.OracleDriver";
	String url="jdbc:oracle:thin:@localhost:1521:XE";
	String user="java0919";
	String password="java0919";
	Connection con;
	PreparedStatement pstmt;
	ResultSet rs;

%>
<%
	//스크립틀릿영역 : 로직을 작성하는 영역
	
	//드라이버 로드
	Class.forName(driver);
	out.print("드라이버 로드 성공");

	//Dog 객체 생성후 사용
	Dog d = new Dog();
	String msg = d.bark();
	out.print("우리집 강아지는 "+msg);

	//접속
	con=DriverManager.getConnection(url,user,password);
	
	if(con!=null){
		out.print("접속 성공");

		String sql="select * from test";
		pstmt=con.prepareStatement(sql);
		rs = pstmt.executeQuery();
	
		while(rs.next()){
			out.println(rs.getString("name")+"의 나이는 "+rs.getInt("age"));
		}
	}else{
		out.print("접속 실패");
	}
%>
<%
	//접속 끊기!
	if(rs!=null){
		rs.close();
	}
	if(pstmt!=null){
		pstmt.close();
	}
	if(con!=null){
		con.close();
	}

%>