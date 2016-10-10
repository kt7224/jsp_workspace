package com.sds.gallery.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.sds.gallery.domain.Gallery;
import com.sds.pool.PoolManager;

public class GalleryDAO {
	PoolManager pool= PoolManager.getInstance(); 
	
	public int insert(Gallery dto){
		int result=0;
		Connection con=null;
		PreparedStatement pstmt=null;
		
		con=pool.getConnection();
		String sql="insert into gallery(gallery_id,writer,title,content,img) values(seq_gallery.nextval,?,?,?,?)";
		try {
			pstmt=con.prepareStatement(sql);
			pstmt.setString(1, dto.getWriter());
			pstmt.setString(2, dto.getTitle());
			pstmt.setString(3, dto.getContent());
			pstmt.setString(4, dto.getImg());
			result=pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return result;
	}
	
	//게시물 모두 가져오기
	public List selectAll(){
		ArrayList<Gallery> list = new ArrayList<Gallery>();
		Connection con=null;
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		
		con=pool.getConnection();
		String sql="select *from gallery order by gallery_id desc";
		try {
			pstmt=con.prepareStatement(sql);
			rs=pstmt.executeQuery();
			
			while(rs.next()){
				Gallery dto= new Gallery();
				dto.setContent(rs.getString("content"));
				dto.setGallery_id(rs.getInt("gallery_id"));
				dto.setHit(rs.getInt("hit"));
				dto.setImg(rs.getString("img"));
				dto.setRegdate(rs.getString("regdate"));
				dto.setTitle(rs.getString("title"));
				dto.setWriter(rs.getString("writer"));
				
				list.add(dto);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			pool.freeConnection(con, pstmt, rs);
		}
		return list;
	}
	//게시물 1건 가져오기
	public Gallery select(int gallery_id){
		Gallery dto = new Gallery();
		Connection con=null;
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		
		con=pool.getConnection();
		String sql="select *from gallery where gallery_id=?";
		try {
			pstmt=con.prepareStatement(sql);
			pstmt.setInt(1, gallery_id);
			rs=pstmt.executeQuery();
			
			rs.next();
			
			dto.setContent(rs.getString("content"));
			dto.setGallery_id(rs.getInt("gallery_id"));
			dto.setHit(rs.getInt("hit"));
			dto.setImg(rs.getString("img"));
			dto.setRegdate(rs.getString("regdate"));
			dto.setTitle(rs.getString("title"));
			dto.setWriter(rs.getString("writer"));
			
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			pool.freeConnection(con, pstmt, rs);
		}
		return dto;
	}
	
	//게시물 삭제하기
	public int delete(int gallery_id){
		int result=0;
		Connection con=null;
		PreparedStatement pstmt=null;
		
		con=pool.getConnection();
		String sql="delete from gallery where gallery_id=?";
		try {
			pstmt=con.prepareStatement(sql);
			pstmt.setInt(1, gallery_id);
			result=pstmt.executeUpdate();
			
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			pool.freeConnection(con, pstmt);
		}
		return result;
	}
	
	
}
