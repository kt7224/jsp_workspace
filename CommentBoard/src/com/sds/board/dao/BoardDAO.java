package com.sds.board.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.sds.board.domain.Board;
import com.sds.comments.domain.Comments;
import com.sds.pool.PoolManager;

public class BoardDAO {
	PoolManager pool = PoolManager.getInstance();

	// 게시물 1건 등록
	public int insert(Board dto) {
		Connection con = null;
		PreparedStatement pstmt = null;
		int result = 0;

		con = pool.getConnection();
		String sql = "insert into board(board_id,writer,title,content) values(seq_board.nextval,?,?,?)";
		try {
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, dto.getWriter());
			pstmt.setString(2, dto.getTitle());
			pstmt.setString(3, dto.getContent());
			result = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			pool.freeConnection(con, pstmt);
		}
		return result;
	}

	// 게시물 모두 가져오기 	//게시물 댓글 수 세기 추가
	public List selectAll() {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ArrayList<Board> list = new ArrayList<Board>();

		con = pool.getConnection();
		StringBuffer sb = new StringBuffer();
		sb.append("select b.TITLE,b.writer,b.board_id,HIT,b.regdate,count(comments_id) as total");
		sb.append(" from BOARD b left outer join comments c");
		sb.append(" on b.board_id=c.board_id");
		sb.append(" group by b.title, b.board_id, b.writer,hit,b.regdate order by b.board_id desc");
		
		String sql= sb.toString();
		try {
			pstmt = con.prepareStatement(sql);
			rs = pstmt.executeQuery();

			while (rs.next()) {
				Board board = new Board();

				board.setBoard_id(rs.getInt("board_id"));
				board.setWriter(rs.getString("writer"));
				board.setTitle(rs.getString("title"));
				board.setRegdate(rs.getString("regdate"));
				board.setHit(rs.getInt("hit"));
				
				//코멘트 게시물의 갯수만큼 Comments생성하여 Board의 commentsList에 탐재하다!!!
				//단 코멘트가 존재할때만
				if(rs.getInt("total")>0){
				//	ArrayList commentsList = board.getCommentList();
					ArrayList<Comments> commentsList = new ArrayList<Comments>();
					
					for(int i=0; i<rs.getInt("total");i++){
						Comments comment = new Comments();
						commentsList.add(comment);
					}
					board.setCommentList(commentsList);
				}
				list.add(board);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			pool.freeConnection(con, pstmt, rs);
		}
		return list;
	}
	//검색
	public List selectAll(String category,String keyword) {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ArrayList<Board> list = new ArrayList<Board>();

		con = pool.getConnection();
		StringBuffer sb = new StringBuffer();
		/*
		sb.append("select b.TITLE,b.writer,b.board_id,HIT,b.regdate,count(comments_id) as total");
		sb.append(" from BOARD b left outer join comments c");
		sb.append(" on b.board_id=c.board_id where b."+category+" like '%'||?||'%'");
		sb.append(" group by b.title, b.board_id, b.writer,hit,b.regdate");
		*/
		sb.append("select b.TITLE,b.writer,b.board_id,HIT,b.regdate,count(comments_id) as total");
		sb.append(" from BOARD b left outer join comments c");
		sb.append(" on b.board_id=c.board_id ");
		sb.append(" group by b.title, b.board_id, b.writer,hit,b.regdate");
		sb.append(" having  b."+category+" like '%'||?||'%' order by b.board_id desc");
		
		String sql= sb.toString();
		try {
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, keyword);
			rs = pstmt.executeQuery();

			while (rs.next()) {
				Board board = new Board();

				board.setBoard_id(rs.getInt("board_id"));
				board.setWriter(rs.getString("writer"));
				board.setTitle(rs.getString("title"));
				board.setRegdate(rs.getString("regdate"));
				board.setHit(rs.getInt("hit"));
				
				//코멘트 게시물의 갯수만큼 Comments생성하여 Board의 commentsList에 탐재하다!!!
				//단 코멘트가 존재할때만
				if(rs.getInt("total")>0){
				//	ArrayList commentsList = board.getCommentList();
					ArrayList<Comments> commentsList = new ArrayList<Comments>();
					
					for(int i=0; i<rs.getInt("total");i++){
						Comments comment = new Comments();
						commentsList.add(comment);
					}
					board.setCommentList(commentsList);
				}
				list.add(board);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			pool.freeConnection(con, pstmt, rs);
		}
		return list;
	}

	// 게시물 1건 가져오기
	public Board select(int board_id) {
		Board board = null;
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;

		con = pool.getConnection();
		String sql = "select * from board where board_id=?";
		try {
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, board_id);
			rs = pstmt.executeQuery();

			if (rs.next()) {
				board= new Board();
				
				board.setBoard_id(rs.getInt("board_id"));
				board.setWriter(rs.getString("writer"));
				board.setTitle(rs.getString("title"));
				board.setContent(rs.getString("content"));
				board.setRegdate(rs.getString("regdate"));
				board.setHit(rs.getInt("hit"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			pool.freeConnection(con, pstmt, rs);
		}
		return board;
	}
	//조회수 증가
	public int hitUp(int board_id){
		Connection con=null;
		PreparedStatement pstmt=null;
		int result=0;
		
		con=pool.getConnection();
		String sql="update board set hit=hit+1 where board_id=?";
		try {
			pstmt=con.prepareStatement(sql);
			pstmt.setInt(1, board_id);
			
			result=pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			pool.freeConnection(con, pstmt);
		}
		return result;
	}

	
}
