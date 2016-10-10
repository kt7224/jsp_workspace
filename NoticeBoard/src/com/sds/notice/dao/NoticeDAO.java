/*
 * web, ���� �о߿� ������� ���� Table�� ���� CRUD���� �����ϱ� ���� �����ϴ� ��ü=DAO
 * */

package com.sds.notice.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.sds.notice.domain.Notice;
import com.sds.pool.PoolManager;

public class NoticeDAO {
	PoolManager pool=PoolManager.getInstance();
	//�Խù� 1�� �Է�
	public int insert(Notice dto){
		Connection con=null;
		PreparedStatement pstmt=null;
		int result=0;
		try {
			con = pool.getConnection();
			String sql="insert into notice(notice_id,writer,title,content) values(seq_notice.nextval,?,?,?)";
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, dto.getWriter());
			pstmt.setString(2, dto.getTitle());
			pstmt.setString(3, dto.getContent());
			
			result = pstmt.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			pool.freeConnection(con, pstmt);
		}
		return result;
	}
	//��� �Խù� ��������
	public List selectAll(){
		Connection con = null;
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		ArrayList<Notice> dtoArr = new ArrayList<Notice>();
		
		try {
			con=pool.getConnection();
			String sql="select *from notice order by notice_id desc";
			pstmt=con.prepareStatement(sql);
			rs=pstmt.executeQuery();
			
			while(rs.next()){
				Notice dto= new Notice();
				dto.setNotice_id(rs.getInt("notice_id"));
				dto.setWriter(rs.getString("writer"));
				dto.setTitle(rs.getString("title"));
				dto.setRegdate(rs.getString("regdate"));
				dto.setHit(rs.getInt("hit"));
				dto.setContent(rs.getString("content"));
				
				dtoArr.add(dto);
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally{
			pool.freeConnection(con, pstmt, rs);
		}
		return dtoArr;
	}
	
	//�Խù� 1�� ��������
	public Notice selectOne(int notice_id){
		Connection con=null;
		PreparedStatement pstmt=null;
		ResultSet rs =null;
		Notice dto = new Notice();
		
		try {
			con=pool.getConnection();
			String sql="select*from notice where notice_id=?";
			pstmt=con.prepareStatement(sql);
			pstmt.setInt(1, notice_id);
			rs=pstmt.executeQuery();
			
			rs.next();
			dto.setNotice_id(rs.getInt("notice_id"));
			dto.setWriter(rs.getString("writer"));
			dto.setTitle(rs.getString("title"));
			dto.setRegdate(rs.getString("regdate"));
			dto.setContent(rs.getString("content"));
			dto.setHit(rs.getInt("hit"));
						
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			pool.freeConnection(con, pstmt, rs);
		}
		
		return dto;
	}
	//�Խù� 1�� �����ϱ�
	public int delete(int notice_id){
		int result=0;
		Connection con=null;
		PreparedStatement pstmt=null;
		
		try {
			con=pool.getConnection();
			String sql="delete from notice where notice_id=?";
			pstmt=con.prepareStatement(sql);
			pstmt.setInt(1, notice_id);
			result=pstmt.executeUpdate();
			
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			pool.freeConnection(con, pstmt);
		}
		return result;
	}
	//�Խù� 1�� update�ϱ�
	public int update(Notice dto){
		int result=0;
		Connection con=null;
		PreparedStatement pstmt= null;
		
		try {
			con=pool.getConnection();
			String sql="update notice set writer=?,title=?,content=? where notice_id=?";
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, dto.getWriter());
			pstmt.setString(2, dto.getTitle());
			pstmt.setString(3, dto.getContent());
			pstmt.setInt(4, dto.getNotice_id());
			result=pstmt.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}
	
	//�Խù� �˻�
	public List search(String record,String data){
		ArrayList<Notice> list = new ArrayList<Notice>();
		Connection con=null;
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		
		try {
			con=pool.getConnection();
			String sql="select*from notice where "+record+" Like ? order by notice_id desc";
			pstmt= con.prepareStatement(sql);
			pstmt.setString(1, "%"+data+"%");
			rs=pstmt.executeQuery();
			
			while(rs.next()){
				Notice dto = new Notice();
				dto.setNotice_id(rs.getInt("notice_id"));
				dto.setWriter(rs.getString("writer"));
				dto.setTitle(rs.getString("title"));
				dto.setRegdate(rs.getString("regdate"));
				dto.setHit(rs.getInt("hit"));
				dto.setContent(rs.getString("content"));
				list.add(dto);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			pool.freeConnection(con, pstmt, rs);
		}
		return list;
	}
}
