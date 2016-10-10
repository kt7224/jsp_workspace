<%@page import="com.sds.zipocde.dao.ZipcodeDAO"%>
<%@page import="com.sds.zipcode.domain.Zipcode"%>
<%@page import="org.apache.poi.xssf.usermodel.XSSFCell"%>
<%@page import="org.apache.poi.xssf.usermodel.XSSFRow"%>
<%@page import="org.apache.poi.xssf.usermodel.XSSFSheet"%>
<%@page import="org.apache.poi.xssf.usermodel.XSSFWorkbook"%>
<%@page import="org.apache.commons.fileupload.FileItem"%>
<%@page import="java.util.List"%>
<%@page import="java.io.File"%>
<%@page import="org.apache.commons.fileupload.servlet.ServletFileUpload"%>
<%@page import="org.apache.commons.fileupload.disk.DiskFileItemFactory"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%!ZipcodeDAO dao = new ZipcodeDAO();%>
<%
	//request,response,out
	//application(웹어플리케이션의 전역적 정보)
	//웹사이트의 경로를 스스로 추출!!!
	String temp = application.getRealPath("/temp");
	String data = application.getRealPath("/data");
	File destFile = null;
	//out.print(temp);

	//넘겨받은 엑셀 파일을 해석 한후, DB에 Insert시키자
	//업로드전에 설정과 관련된 객체
	DiskFileItemFactory factory = new DiskFileItemFactory();
	factory.setSizeThreshold(1 * 1024 * 1024);
	factory.setRepository(new File(temp));

	//업로드를 담당하는 객체
	ServletFileUpload upload = new ServletFileUpload(factory);
	//클라이언트가 multipart/form-data로 전송한 경우에만 업로드 수행
	if (upload.isMultipartContent(request)) {
		List<FileItem> list = upload.parseRequest(request);//업로드 수행

		for (int i = 0; i < list.size(); i++) {
			FileItem item = list.get(i);

			if (item.isFormField()) {//text 파라미터라면..

			} else {//파일 파라미터라면
				item.write(destFile = new File(data + "/" + item.getName()));
				item.delete();

				//업로드된 엑셀을 해석한후 DB에 넣자!!
				XSSFWorkbook book = new XSSFWorkbook(destFile);
				XSSFSheet sheet = book.getSheetAt(0);

				//각 row를 접근해보자
				int rows = sheet.getPhysicalNumberOfRows();
				out.print("현재 row의 수는 " + rows + "<br>");

				//	out.print("<table width=\"100%\" border=\"1px\">");
				for (int j = 1; j < rows; j++) {
					XSSFRow row = sheet.getRow(j);
					//	out.print("<tr>");
					int cols = row.getPhysicalNumberOfCells();

					Zipcode zip = new Zipcode();
					
					
					
					int result = dao.insert(zip);
					if (result != 0) {
						out.print("마이그래이션 성공<br>");
					} else {
						out.print("마이그래이션 실패<br>");
					}
				}
				//out.print("</table>");
			}

		}

	} else {
		out.print("html 코드도 모르냐!!!");
	}
%>