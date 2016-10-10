package com.fashion.mybatis.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.fashion.mybatis.SessionManager;

public class SubCategoryDAO {
	SessionManager manager=SessionManager.getInstance();
	
	public List selectAll(int top_id){
		SqlSession session = manager.getSession();
		List list=session.selectList("Subcategory.selectAll", top_id);
		session.close();
		return list;
	}
}
