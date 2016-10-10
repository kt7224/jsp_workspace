package com.sds.zipcode.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.sds.pool.PoolManager;
import com.sds.zipcode.domain.Zipcode;

public class ZipcodeDAO {
	PoolManager pool = PoolManager.getInstance();
	
	//모두 출력
	public List selectAll(){
		ArrayList<Zipcode> list = new ArrayList<Zipcode>();
		Connection con = null;
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		
		con=pool.getConnection();
		String sql="select * from Post order by zipcode asc";
		try {
			pstmt=con.prepareStatement(sql);
			rs=pstmt.executeQuery();
			
			while(rs.next()){
				Zipcode dto= new Zipcode();
				
				dto.setZipcode(rs.getString("zipcode"));
				dto.setSi(rs.getString("sido"));
				dto.setGugun(rs.getString("gugun"));
				dto.setDong(rs.getString("dong"));
				dto.setBungi(rs.getString("bunji"));
				
				list.add(dto);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			pool.freeConnection(con, pstmt,rs);
		}
		
		return list;
	}
	
	
	//검색어로
	public List gu_search(String column,String text){
		ArrayList<Zipcode> list = new ArrayList<Zipcode>();
		Connection con = null;
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		
		con=pool.getConnection();
		String sql="select * from Post where "+column+" like ? order by zipcode asc";
		try {
			pstmt=con.prepareStatement(sql);
			pstmt.setString(1, "%"+text+"%");
			rs=pstmt.executeQuery();
			
			while(rs.next()){
				Zipcode dto= new Zipcode();
				
				dto.setZipcode(rs.getString("zipcode"));
				dto.setSi(rs.getString("sido"));
				dto.setGugun(rs.getString("gugun"));
				dto.setDong(rs.getString("dong"));
				dto.setBungi(rs.getString("bunji"));
				
				list.add(dto);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			pool.freeConnection(con, pstmt,rs);
		}	
		return list;
	}
		
		
	
}
