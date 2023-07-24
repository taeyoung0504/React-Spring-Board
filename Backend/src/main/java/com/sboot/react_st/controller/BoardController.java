package com.sboot.react_st.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sboot.react_st.domain.Board;
import com.sboot.react_st.service.BoardService;

@RestController
@RequestMapping("/api")
public class BoardController {

    
    
	@Autowired
    private BoardService boardService;

    /* 글 등록 */
    @PostMapping("/board/create")
    public ResponseEntity<Board> createBoard(@RequestBody Board board) {
        boardService.createBoard(board.getTitle(), board.getContent(),board.getWriter());
        return new ResponseEntity<>(board, HttpStatus.CREATED);
    }
    
    /* 글 전체 목록 */
    @GetMapping("/board/viewlist")
    public ResponseEntity<List<Board>> boardList(){
    	List<Board> boardList = this.boardService.getBoardList();
    	 return ResponseEntity.ok().body(boardList);
    }
    
    
    /* 글 조회 */    
    @GetMapping(value = "/board/detail/{id}")
    public ResponseEntity<Board> findBoard(@PathVariable long id){
    	Board board = boardService.getBoard(id);
    	return new ResponseEntity<>(board,HttpStatus.OK);	
    }
    
    
    /* 게시물 삭제 */
    @DeleteMapping(value = "/board/delete/detail/{id}")
    public ResponseEntity<Optional<Board>> deleteBoard(@PathVariable long id){
    	Optional<Board> board = this.boardService.delBoard(id);
    	return new ResponseEntity<>(board, HttpStatus.OK);
    }
    

}