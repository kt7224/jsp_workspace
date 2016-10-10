package com.sds.view.board;

import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JOptionPane;
import javax.swing.JTextArea;
import javax.swing.JTextField;

import com.sds.model.board.BoardDAO;

public class WriteForm extends JFrame{
	JTextField t_writer;
	JTextField t_title;
	JTextArea area;
	JButton bt;
	BoardDAO boardDao;
	
	public WriteForm() {
		setLayout(new FlowLayout());
		t_writer = new JTextField(20);
		t_title = new JTextField(20);
		area = new JTextArea(10,20);
		bt = new JButton("���");
		boardDao=new BoardDAO();
		
		add(t_writer);
		add(t_title);
		add(area);
		add(bt);
		
		bt.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				int result=boardDao.insert(t_writer.getText(), t_title.getText(), area.getText());
				if(result!=0){
					JOptionPane.showMessageDialog(getParent(), "����");
				}else{
					JOptionPane.showMessageDialog(getParent(), "����");
				}
			}
		});
		
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setSize(300, 400);
		setVisible(true);
	}
	
	public static void main(String[] args) {
		new WriteForm();
	}

}
