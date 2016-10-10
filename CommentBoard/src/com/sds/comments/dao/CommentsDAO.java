package com.sds.comments.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.sds.comments.domain.Comments;
import com.sds.pool.PoolManager;

public class CommentsDAO {
	PoolManager pool=PoolManager.getInstance();
	
	public int insert(Comments dto){
		int result=0;
		Connection con=null;
		PreparedStatement pstmt=null;
		
		con=pool.getConnection();
		String sql="insert into comments(comments_id,board_id,writer,title) values(seq_comments.nextval,?,?,?)";
		try {
			pstmt=con.prepareStatement(sql);
			pstmt.setInt(1, dto.getBoard_id());
			pstmt.setString(2,dto.getWriter());
			pstmt.setString(3, dto.getTitle());
			result=pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			pool.freeConnection(con, pstmt);
		}
		return result;
	}
	
	//해당 게시물의 모든 댓글 가져오기 
	public List selectAll(int board_id){
		ArrayList<Comments> list = new ArrayList<Comments>();
		Connection con=null;
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		
		con=pool.getConnection();
		String sql="Select*from comments where board_id=?";
		try {
			pstmt=con.prepareStatement(sql);
			pstmt.setInt(1, board_id);
			rs=pstmt.executeQuery();
			
			while(rs.next()){
				Comments dto= new Comments();
				
				dto.setComments_id(rs.getInt("comments_id"));
				dto.setBoard_id(rs.getInt("board_id"));
				dto.setWriter(rs.getString("writer"));
				dto.setTitle(rs.getString("title"));
				dto.setRegdate(rs.getString("regdate"));
				
				list.add(dto);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			pool.freeConnection(con,pstmt,rs);
		}
		return list;
	}
}
