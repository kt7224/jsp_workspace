/*
 이객체는 로직을 처리하기위함이 아니라 오직 Data를 담기 위한 용도이다.
 이런 목적의 클래스를 DTO,VO라 한다. 
*/

package com.sds.board.domain;

import java.util.ArrayList;

import com.sds.comments.domain.Comments;

public class Board {
	private int board_id;
	private String writer;
	private String title;
	private String content;
	private int hit;
	private String regdate;
	private ArrayList<Comments> commentList;
	
	

	public ArrayList<Comments> getCommentList() {
		return commentList;
	}
	public void setCommentList(ArrayList<Comments> commentList) {
		this.commentList = commentList;
	}
	
	public int getBoard_id() {
		return board_id;
	}
	public void setBoard_id(int board_id) {
		this.board_id = board_id;
	}
	public String getWriter() {
		return writer;
	}
	public void setWriter(String writer) {
		this.writer = writer;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public int getHit() {
		return hit;
	}
	public void setHit(int hit) {
		this.hit = hit;
	}
	public String getRegdate() {
		return regdate;
	}
	public void setRegdate(String regdate) {
		this.regdate = regdate;
	}
		
}
