package com.fashion.common.file;

public class FileManager {
	//Ȯ���� �����ϱ�!!
	//�Ű������� ���ϰ�θ� �ѱ��, Ȯ���ڸ� ��ȯ���ִ� �޼���!
	//c:/test/aa.acc..a.jpg
	public static String getExt(String path){
		return path.substring(path.lastIndexOf(".")+1 , path.length());
	}
}
