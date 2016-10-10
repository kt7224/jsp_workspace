package com.sds.emp;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sds.pool.PoolManager;

public class EmpRemove extends HttpServlet{
	PoolManager pool = PoolManager.getInstance();
	Connection con;
	PreparedStatement pstmt;
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
	
		PrintWriter out=res.getWriter();
		try {
			con = pool.getConnection();
			if(con!=null){
				String sql="delete from emp where empno=?";
				
				pstmt = con.prepareStatement(sql);
				pstmt.setInt(1, Integer.parseInt(req.getParameter("empno")));
				
				int result = pstmt.executeUpdate();
				if(result!=0){
					out.print("<script>");
					out.print("alert('Delete성공');");
					out.print("location.href='/list'");
					out.print("</script>");
				}else{
					out.print("<script>");
					out.print("alert('Delete실패');");
					out.print("</script>");	
				}
				
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			pool.freeConnection(con, pstmt);
		}
		
		
	}
	
	
}
