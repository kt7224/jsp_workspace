/*
 Client가 전송한 폼양식의 파라미터들을 넘겨받아서 오라클에 넣자~
 
 */


package com.sds.emp;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sds.pool.PoolManager;

public class EmpRegist extends HttpServlet{
	PoolManager pool = PoolManager.getInstance();
	//DML중 insert문을 수행하기 위한 jdbc 객체들~
	Connection con;
	PreparedStatement pstmt;
	
	//client의 request방식이 POST일 경우 아래의 메서드가 Service메서드에 의해 호출된다.
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		//클라이언트의 브라우져에 출력할 문자열의 인코딩처리
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
		//클라이언트가 넘긴 데이터의 인코딩처리
		req.setCharacterEncoding("utf-8");
		
		PrintWriter out=res.getWriter();
		
		out.print("이 서블릿에서 오라클에 insert시킬꺼야!");
		//접속 객체 내여
		try {
			con = pool.getConnection();
			
			String sql="insert into emp(empno,ename,job,mgr,hiredate,sal,comm,deptno) values(?,?,?,?,?,?,?,?)";
			pstmt = con.prepareStatement(sql);
			//client가 전송한 요청 파라미터 값들을 끄집어 내자!!
			String empno=req.getParameter("empno");
			String ename=req.getParameter("ename");
			String job=req.getParameter("job");
			String mgr=req.getParameter("mgr");
			String hiredate=req.getParameter("hiredate");
			String sal=req.getParameter("sal");
			String comm=req.getParameter("comm");
			String deptno=req.getParameter("deptno");
			
			
			//out.print(ename);
			//총 8개의 바인드 변수 선언
			pstmt.setInt(1, Integer.parseInt(empno));
			pstmt.setString(2, ename);
			pstmt.setString(3, job);
			pstmt.setInt(4, Integer.parseInt( mgr));
			pstmt.setString(5, hiredate);
			pstmt.setInt(6, Integer.parseInt(sal));
			pstmt.setInt(7, Integer.parseInt(comm));
			pstmt.setInt(8, Integer.parseInt(deptno));
			
			int result = pstmt.executeUpdate();
			if(result!=0){
				out.print("<script>");
				out.print("alert('오라클에 정상 등록함~');");
				out.print("location.href='/list';");
				out.print("</script>");
			}else{
				out.print("<script>");
				out.print("alert('오라클에 등록 실패!!!!');");
				out.print("history.back();");
				out.print("</script>");
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally{
			//connect 반환하기!
			pool.freeConnection(con, pstmt);
		}
		
	}
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
		
		PrintWriter out=res.getWriter();
		out.print("GET방식을 스다니 ");
	}
}
