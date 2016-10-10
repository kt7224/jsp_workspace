/*
 Client�� ������ ������� �Ķ���͵��� �Ѱܹ޾Ƽ� ����Ŭ�� ����~
 
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
	//DML�� insert���� �����ϱ� ���� jdbc ��ü��~
	Connection con;
	PreparedStatement pstmt;
	
	//client�� request����� POST�� ��� �Ʒ��� �޼��尡 Service�޼��忡 ���� ȣ��ȴ�.
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		//Ŭ���̾�Ʈ�� �������� ����� ���ڿ��� ���ڵ�ó��
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
		//Ŭ���̾�Ʈ�� �ѱ� �������� ���ڵ�ó��
		req.setCharacterEncoding("utf-8");
		
		PrintWriter out=res.getWriter();
		
		out.print("�� �������� ����Ŭ�� insert��ų����!");
		//���� ��ü ����
		try {
			con = pool.getConnection();
			
			String sql="insert into emp(empno,ename,job,mgr,hiredate,sal,comm,deptno) values(?,?,?,?,?,?,?,?)";
			pstmt = con.prepareStatement(sql);
			//client�� ������ ��û �Ķ���� ������ ������ ����!!
			String empno=req.getParameter("empno");
			String ename=req.getParameter("ename");
			String job=req.getParameter("job");
			String mgr=req.getParameter("mgr");
			String hiredate=req.getParameter("hiredate");
			String sal=req.getParameter("sal");
			String comm=req.getParameter("comm");
			String deptno=req.getParameter("deptno");
			
			
			//out.print(ename);
			//�� 8���� ���ε� ���� ����
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
				out.print("alert('����Ŭ�� ���� �����~');");
				out.print("location.href='/list';");
				out.print("</script>");
			}else{
				out.print("<script>");
				out.print("alert('����Ŭ�� ��� ����!!!!');");
				out.print("history.back();");
				out.print("</script>");
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally{
			//connect ��ȯ�ϱ�!
			pool.freeConnection(con, pstmt);
		}
		
	}
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
		
		PrintWriter out=res.getWriter();
		out.print("GET����� ���ٴ� ");
	}
}
