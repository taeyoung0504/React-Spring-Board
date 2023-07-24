package com.sboot.react_st.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.sboot.react_st.DataNotFoundException;
import com.sboot.react_st.domain.Board;
import com.sboot.react_st.repository.BoardRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class BoardService {
    @Autowired
    private final BoardRepository boardRepository;

    /* 글 등록 서비스 */
    public Board createBoard(String title, String content,String writer) {
    	Board board = new Board();
    	board.setTitle(title);  
    	board.setContent(content); 
    	board.setWriter(writer);
        return   this.boardRepository.save(board); 
    }
    
    /* 특정 게시물 찾기 서비스 */
    public Board getBoard(Long id) {
    	Optional<Board> boarddetail = this.boardRepository.findById(id);
    	if(boarddetail.isPresent()) {
    		Board board =  boarddetail.get();
    		board.incrementViewCnt(); //조회수 1씩 증가
    		boardRepository.save(board);
    		return board;
    	}else {
            throw new DataNotFoundException("해당 게시물이 없습니다.");
        }
    }
    
    /* 전체 게시물 보기 서비스 */
    public List<Board> getBoardList() {
    	return this.boardRepository.findAll();
    	
    }
    
    /* 특정 게시물 삭제 서비스 */
    public Optional<Board> delBoard(Long id) {
    	Optional<Board> boarddetail = this.boardRepository.findById(id);
    	if(boarddetail.isPresent()) {
    		Board board = boarddetail.get();
    		boardRepository.deleteById(id);
    		return  Optional.of(board);
    	} else {
    		return Optional.empty(); 
    	}
    }
    
    
}