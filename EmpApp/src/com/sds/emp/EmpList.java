package com.sds.emp;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sds.pool.PoolManager;


public class EmpList extends HttpServlet{
	PoolManager pool= PoolManager.getInstance();
	
	Connection con;
	PreparedStatement pstmt;
	ResultSet rs;
	
	//client가 Get방식으로 request할 경우 아래의 메서드가 호출된다. service메서드에 의해서~~~
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		//servlet의 지시 영역에서 하던 문서타입과 인코딩타입 을 선언해줄수있다!! 
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
		
		ArrayList<String[]> empArr=new ArrayList<String[]>();
		//DB(Oracle)연동하여 record가져오기
		try {
			//커넥션 풀로 부터 커넥션 대여~~
			con = pool.getConnection();
			
			String sql="select * from emp";
			
			pstmt=con.prepareStatement(sql);
			rs=pstmt.executeQuery();
	
			
			while(rs.next()){
				String[] emp = new String[8];
				
				emp[0]=Integer.toString(rs.getInt("empno"));
				emp[1]=rs.getString("ename");
				emp[2]=rs.getString("job");
				emp[3]=Integer.toString(rs.getInt("mgr"));
				emp[4]=rs.getString("hiredate");
				emp[5]=Integer.toString(rs.getInt("sal"));
				emp[6]=Integer.toString(rs.getInt("comm"));
				emp[7]=Integer.toString(rs.getInt("deptno"));
				
				empArr.add(emp);
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			//다시 커넥션풀로 돌려보냄~
			pool.freeConnection(con, pstmt, rs);
		}
		
		
		//응답 객체로 부터 스트림을 얻은후, 그 스트림을 통해 응답 컨텐츠를 구성하여 보내주자~
		PrintWriter out=res.getWriter();
		out.print("<script>");
		out.print("function regist(){");
		out.print("location.href=\"/emp/registForm.jsp\";");
		out.print("}");
		out.print("</script>");
		
		out.print("<table align=\"center\" width=\"800px\" border=\"1px\">");
		out.print("<tr align=\"center\">");
		out.print("<td>EMP</td>");
		out.print("<td>ENAME</td>");
		out.print("<td>JOB</td>");
		out.print("<td>MGR</td>");
		out.print("<td>HIREDATE</td>");
		out.print("<td>SAL</td>");
		out.print("<td>COMM</td>");
		out.print("<td>DEPINO</td>");
		out.print("</tr>");
		
		
		for(int i=0; i < empArr.size();i++){
			out.print("<tr align=\"center\" onMouseOver=\"this.style.background='yellow'\" onMouseOut=\"this.style.background=''\">");
			for(int j=0; j < empArr.get(i).length ; j++){
				if(j!=1){
				out.print("<td>"+empArr.get(i)[j]+"</td>");
				}else{
					out.print("<td><a href=\"/emp/Detail.jsp?empno="+empArr.get(i)[0]+"\">"+empArr.get(i)[j]+"</a></td>");
				}
			}
			out.print("</tr>");
		}
		out.print("<tr>");
		out.print("<td colspan=\"8\" align=\"right\"><input type=\"button\" value=\"등록\" onClick=\"regist()\"></td>");
		out.print("</tr>");
		out.print("</table>");
		
	}
	
}
