<%@page import="com.sds.zipcode.domain.Zipcode"%>
<%@page import="java.util.List"%>
<%@page import="com.sds.zipocde.dao.ZipcodeDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%!ZipcodeDAO dao = new ZipcodeDAO();%>
<%
	request.setCharacterEncoding("utf-8");

	System.out.print(request.getParameter("dong"));
	String dong = request.getParameter("dong");

	List<Zipcode> list = dao.selectAll(dong);

	out.print(list.size());

	StringBuffer sb = new StringBuffer();
	sb.append("{");
	sb.append("\"zipList\" : [");
	for (int i = 0; i < list.size(); i++) {
		Zipcode dto = list.get(i);
		sb.append("{");
		sb.append("\"zipcode\" : \"" + dto.getZipcode() + "\",");
		sb.append("\"sido\" : \"" + dto.getSido() + "23\",");
		sb.append("\"gugun\" : \"" + dto.getGugun() + "\",");
		sb.append("\"dong\" : \"" + dto.getDong() + "\",");
		sb.append("\"bunji\" : \"" + dto.getBunji() + "\"");
		if (i < list.size() - 1) {
			sb.append("},");
		} else {
			sb.append("}");
		}
	}
	sb.append("]");
	sb.append("}");

	out.print(sb.toString());
%>