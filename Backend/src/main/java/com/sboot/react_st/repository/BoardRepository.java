package com.sboot.react_st.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sboot.react_st.domain.Board;
import com.sboot.react_st.domain.Users;

@Repository 
public interface BoardRepository extends JpaRepository<Board, Long> {


	
}