/*
개발자의 의도와는 상관없이, 클라이언트가 브라우저로 접근할때 서버에서 실행되는 클래스가 되려면
반드시 서블릿이라는 javaEE의 api에서 지원하는 클래스를 상속받아야 한다.!!!
즉, 서블릿이란? 서버에서 실행되는 자바의 클래스이다.
*/

package com.site0920.test;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletException;
import java.io.IOException;
import java.io.PrintWriter;

//개발자가 현재 클래스를 서블릿으로 정의할 경우, 이시점부터 이클래스는
//서버측에서 실행될수있는 클래스가 된다~
//따라서 브라우저로 클라이언트가 접근할때, 실행된다.
public class MyServlet extends HttpServlet{

	//클라이언트가 브라우저로 접근 시도시 get방식으로 접근할경우 아래의 메서드가 실행
	public void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException{
		//브라우저에 무언가 문자열을 출력해보자!!!
		PrintWriter out=response.getWriter();
		out.print("<table border=\"1px\">");
		for(int i=10; i>0;i--){
			out.print("<tr>");
			for(int j=0;j<2;j++){
				out.print("<td>"+i+j+"</td>");
			}
			out.print("</tr>");
		}
		out.print("</table>");
	}
}
