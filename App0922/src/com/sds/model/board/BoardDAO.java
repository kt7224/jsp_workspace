/*
�� Ŭ������, ���̰� �����̰� ������� �����ͺ��̽����� �����۾��� �������� ���� ����Ͻ� ������Ŭ�����̴�.
���ø����̼� ����о߿����� �̷��� ������ ��ü�� ������ DAO(=Data Access Object)�� �Ѵ�.
���� �ڹٺо��� �� �ƴϱ� ������, ms ������ ��ݰ��� ���������� DAO��� �� ����Ѵ�.

DAO�� �� ������ CRUD(Create=insert,Read=select,Update,Delete)�̴�
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

	// �Խù� 1�� �ֱ�
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

	// �Խù� ��� ��������
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
			// rs�� �� �ݳ�������, rs�� ����Ҹ��� ��ü���� �̿��غ���~
			while (rs.next()) {
				BoardDTO boardDTO = new BoardDTO();// �ֺ� DTO ����

				boardDTO.setBoard_id(rs.getInt("board_id"));
				boardDTO.setTitle(rs.getString("title"));
				boardDTO.setWriter(rs.getString("writer"));
				boardDTO.setRegdate(rs.getString("regdate"));
				boardDTO.setContent(rs.getString("content"));
				boardDTO.setHit(rs.getInt("hit"));

				list.add(boardDTO);// �÷��ǿ� �Խù� 1�� �߰�
			}

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			pool.freeConnection(con, pstmt, rs);
		}
		return list;
	}

	// �Խù� 1�� ��������
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

			// ���ڵ尡 �ִٸ�..
			if (rs.next()) {
				dto = new BoardDTO();
				//dto�� ���ڵ��� �÷������� ���Խ�Ű��(injection)
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

	// update�ϱ�
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

	// �ްԺ����� dto�� �ޱ�
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

	// delete�ϱ�
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

	// �ްԺ����� dto�� �ޱ�
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
