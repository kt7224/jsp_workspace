<%@ page contentType="text/html;charset=utf-8"%> 
<%!
	//이 영역에 선언된 변수와 메서드는 멤버로 취급...
	int price=300;
	
	public String getMsg(){
		return "apple";
	}
%>

<%
	/*
	jsp는 java의 문법을 그대로 사용할수있으며, 크게 3가지 영역으로 구분된다.
	(즉, jsp코드를 기재할수있는 영역은 총 3가지이다.)

	1. 지시 영역 %@ %
		: 현재 jsp에 대한 설정 정보를 기재하는 영역

	2. 선언부 %! %
		:멤버 변수와 멤버 메서드를 기재할 수 있는 영역

	3. 스크립틀릿 영역 % %
		:로직을 작성하는 영역
	*/

	String msg=getMsg();
	out.print(msg+"의 가격은 "+price);
%>