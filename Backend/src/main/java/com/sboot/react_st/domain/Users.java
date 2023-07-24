package com.sboot.react_st.domain;


import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Users {

	
	 	@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id; // 회원번호
	 
	 	@Column(unique = true)
	 	private String username; // 아이디
	 	
	 	private String password; //패스워드
	 	
	 	@Column(unique = true)
	 	private String email; // 이메일
	 	
	 	private LocalDateTime create_userTime = LocalDateTime.now(); // 계정생성일
}
