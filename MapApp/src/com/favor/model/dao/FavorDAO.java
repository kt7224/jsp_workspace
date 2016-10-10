package com.favor.model.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.favor.domain.Favor;
import com.favor.pool.PoolManager;

public class FavorDAO {
	PoolManager pool = PoolManager.getInstance();
	//
	public int insert(Favor dto){
		int result=0;
		Connection con=null;
		PreparedStatement pstmt=null;
		
		con=pool.getConnection();
		String sql="insert into favor(favor_id,lati,lng,name,content,img,score) values(seq_favor.nextval,?,?,?,?,?,?)";
		try {
			pstmt=con.prepareStatement(sql);
			pstmt.setDouble(1, dto.getLati());
			pstmt.setDouble(2, dto.getLng());
			pstmt.setString(3, dto.getName());
			pstmt.setString(4, dto.getContent());
			pstmt.setString(5, dto.getImg());
			pstmt.setDouble(6, dto.getScore());
			
			result=pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			pool.freeConnection(con, pstmt);
		}
		
		return result;
	}
	
	//레코드 모두 가져오기!
	public List selectAll(){
		List<Favor> list = new ArrayList<Favor>();
		Connection con=null;
		PreparedStatement pstmt=null;
		ResultSet rs = null;
		
		con=pool.getConnection();
		String sql= "select * from favor";
		try {
			pstmt=con.prepareStatement(sql);
			rs=pstmt.executeQuery();
			
			while(rs.next()){
				Favor dto= new Favor();
				dto.setFavor_id(rs.getInt("favor_id"));
				dto.setContent(rs.getString("content"));
				dto.setImg(rs.getString("img"));
				dto.setLati(rs.getDouble("lati"));
				dto.setLng(rs.getDouble("lng"));
				dto.setName(rs.getString("name"));
				dto.setScore(rs.getDouble("score"));
				list.add(dto);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			pool.freeConnection(con, pstmt, rs);
		}
		return list;
	}
	
	
}
