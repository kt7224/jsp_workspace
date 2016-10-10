package com.sds.zipocde.dao;

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
	
	//레코드 밀어 넣기
	public int insert(Zipcode dto){
		int result=0;
		Connection con=null;
		PreparedStatement pstmt=null;
		
		con=pool.getConnection();

		String sql="insert into zip(zipcode,sido,gugun,dong,bunji,zip_id) values(?,?,?,?,?,?)";
		try {
			pstmt=con.prepareStatement(sql);
			pstmt.setString(1, dto.getZipcode());
			pstmt.setString(2, dto.getSido());
			pstmt.setString(3, dto.getGugun());
			pstmt.setString(4, dto.getDong());
			pstmt.setString(5, dto.getBunji());
			pstmt.setInt(6, dto.getSeq());
			
			result=pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			pool.freeConnection(con, pstmt);
		}
		
		return result;
	}
	
	//레코드 전부 
	public List selectAll(String dong){
		ArrayList<Zipcode> list = new ArrayList<Zipcode>();
		Connection con=null;
		PreparedStatement pstmt = null;
		ResultSet rs=null;
		
		con=pool.getConnection();
		String sql="select * from zip where dong like '%||?||%'";
		try {
			pstmt=con.prepareStatement(sql);
			pstmt.setString(1, dong);
			rs=pstmt.executeQuery();
			
			while(rs.next()){
				Zipcode dto= new Zipcode();
				
				dto.setZipcode(rs.getString("zipcode"));
				dto.setSido(rs.getString("sido"));
				dto.setGugun(rs.getString("gugun"));
				dto.setDong(rs.getString("dong"));
				dto.setBunji(rs.getString("bunji"));
				dto.setSeq(rs.getInt("zip_id"));
				
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
