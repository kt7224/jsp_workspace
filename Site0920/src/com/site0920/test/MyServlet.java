/*
�������� �ǵ��ʹ� �������, Ŭ���̾�Ʈ�� �������� �����Ҷ� �������� ����Ǵ� Ŭ������ �Ƿ���
�ݵ�� �����̶�� javaEE�� api���� �����ϴ� Ŭ������ ��ӹ޾ƾ� �Ѵ�.!!!
��, �����̶�? �������� ����Ǵ� �ڹ��� Ŭ�����̴�.
*/

package com.site0920.test;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletException;
import java.io.IOException;
import java.io.PrintWriter;

//�����ڰ� ���� Ŭ������ �������� ������ ���, �̽������� ��Ŭ������
//���������� ����ɼ��ִ� Ŭ������ �ȴ�~
//���� �������� Ŭ���̾�Ʈ�� �����Ҷ�, ����ȴ�.
public class MyServlet extends HttpServlet{

	//Ŭ���̾�Ʈ�� �������� ���� �õ��� get������� �����Ұ�� �Ʒ��� �޼��尡 ����
	public void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException{
		//�������� ���� ���ڿ��� ����غ���!!!
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
