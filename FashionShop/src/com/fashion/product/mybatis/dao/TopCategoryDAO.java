package com.fashion.product.mybatis.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.fashion.mybatis.SessionManager;

public class TopCategoryDAO {
	SessionManager manager=SessionManager.getInstance();
	
	//��� ���ڵ� ��������!
	public List selectAll(){
		SqlSession session=manager.getSession();
		List list=session.selectList("TopCategory.selectAll");
		session.close();
		return list;
	}
}






