package com.fashion.product.mybatis.dao;

import org.apache.ibatis.session.SqlSession;

import com.fashion.admin.domain.Comments;
import com.fashion.mybatis.SessionManager;

public class CommentsDAO {
	SessionManager manager=SessionManager.getInstance();
	
	public int insert(Comments dto){
		SqlSession session = manager.getSession();
		int result=0;
		result=session.insert("Comments.insert", dto);
		session.close();
		return result;
	}
}
