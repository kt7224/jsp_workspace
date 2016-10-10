/*
이 클래스는, 웹이건 응용이건 상관없이 데이터베이스와의 연동작업에 공통으로 사용될 비즈니스 로직용클래스이다.
어플리케이션 설계분야에서는 이러한 목적의 객체를 가리켜 DAO(=Data Access Object)라 한다.
주의 자바분야의 용어가 아니기 때문에, ms 진영의 닷넷개발 진영에서도 DAO라는 용어를 사용한다.

DAO의 주 업무는 CRUD(Create=insert,Read=select,Update,Delete)이다
*/
package com.sds.model.board;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.sds.pool.PoolManager;
import com.sun.corba.se.impl.orb.PrefixParserAction;

public class BoardDAO {
	PoolManager pool = PoolManager.getInstance();

	// 게시물 1건 넣기
	public int insert(String writer, String title, String content) {
		int result = 0;
		Connection con = null;
		PreparedStatement pstmt = null;
		try {
			con = pool.getConnection();

			String sql = "insert into board(board_id,writer,title,content) values(seq_board.nextval,?,?,?)";
			pstmt = con.prepareStatement(sql);

			pstmt.setString(1, writer);
			pstmt.setString(2, title);
			pstmt.setString(3, content);

			result = pstmt.executeUpdate();

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			pool.freeConnection(con, pstmt);
		}
		return result;
	}

	// 게시물 모두 가져오기
	public List selectAll() {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ArrayList<BoardDTO> list = new ArrayList<BoardDTO>();

		try {
			con = pool.getConnection();

			String sql = "select*from board order by board_id desc";
			pstmt = con.prepareStatement(sql);
			rs = pstmt.executeQuery();
			// rs가 곧 반납됨으로, rs를 대용할만한 대체물을 이용해보자~
			while (rs.next()) {
				BoardDTO boardDTO = new BoardDTO();// 텅빈 DTO 생성

				boardDTO.setBoard_id(rs.getInt("board_id"));
				boardDTO.setTitle(rs.getString("title"));
				boardDTO.setWriter(rs.getString("writer"));
				boardDTO.setRegdate(rs.getString("regdate"));
				boardDTO.setContent(rs.getString("content"));
				boardDTO.setHit(rs.getInt("hit"));

				list.add(boardDTO);// 컬렉션에 게시물 1건 추가
			}

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			pool.freeConnection(con, pstmt, rs);
		}
		return list;
	}

	// 게시물 1건 가져오기
	public BoardDTO select(int board_id) {

		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		BoardDTO dto = null;

		try {
			con = pool.getConnection();
			String sql = "Select*from board where board_id=?";
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, board_id);
			rs = pstmt.executeQuery();

			// 레코드가 있다면..
			if (rs.next()) {
				dto = new BoardDTO();
				//dto에 레코드의 컬럼값들을 주입시키다(injection)
				dto.setBoard_id(rs.getInt("board_id"));
				dto.setContent(rs.getString("content"));
				dto.setTitle(rs.getString("title"));
				dto.setWriter(rs.getString("writer"));
				dto.setRegdate(rs.getString("regdate"));
				dto.setHit(rs.getInt("hit"));
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			pool.freeConnection(con, pstmt, rs);
		}
		return dto;
	}

	// update하기
	public int update(String writer, String title, String content, int board_id) {
		int result = 0;
		Connection con = null;
		PreparedStatement pstmt = null;

		try {
			con = pool.getConnection();
			String sql = "update board set writer=?,title=?,content=? where board_id=?";
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, writer);
			pstmt.setString(2, title);
			pstmt.setString(3, content);
			pstmt.setInt(4, board_id);

			result = pstmt.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			pool.freeConnection(con, pstmt);
		}
		return result;
	}

	// 메게변수를 dto로 받기
	public int update(BoardDTO dto) {
		int result = 0;
		Connection con = null;
		PreparedStatement pstmt = null;

		try {
			con = pool.getConnection();
			String sql = "update board set writer=?,title=?,content=? where board_id=?";
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, dto.getWriter());
			pstmt.setString(2, dto.getTitle());
			pstmt.setString(3, dto.getContent());
			pstmt.setInt(4, dto.getBoard_id());

			result = pstmt.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			pool.freeConnection(con, pstmt);
		}
		return result;
	}

	// delete하기
	public int remove(int board_id) {
		int result = 0;
		Connection con = null;
		PreparedStatement pstmt = null;
		try {
			con = pool.getConnection();

			String sql = "delete from board where board_id=?";
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, board_id);
			result = pstmt.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			pool.freeConnection(con, pstmt);
		}
		return result;
	}

	// 메게변수를 dto로 받기
	public int remove(BoardDTO dto) {
		int result = 0;
		Connection con = null;
		PreparedStatement pstmt = null;

		try {
			con = pool.getConnection();

			String sql = "delete from board where board_id=?";
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, dto.getBoard_id());
			result = pstmt.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			pool.freeConnection(con, pstmt);
		}
		return result;
	}
}
