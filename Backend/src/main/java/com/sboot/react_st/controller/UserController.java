package com.sboot.react_st.controller;

import java.util.List;
import java.util.Map;
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

import com.sboot.react_st.domain.Users;
import com.sboot.react_st.service.UserService;

import jakarta.transaction.Transactional;

@RestController
@RequestMapping("/api")
public class UserController {
	
	
	@Autowired
	private UserService userService;
	
	/* 회원가입 */
	@PostMapping("/user/signup")
	public ResponseEntity<Users> signup(@RequestBody Users users){
		userService.signUp(users.getUsername(), users.getPassword(), users.getEmail());
		return new ResponseEntity<>(users,HttpStatus.CREATED);
	}
	
	/* 특정 회원 조회 */
	@GetMapping(value ="/user/detail/{id}")
	public ResponseEntity<Optional<Users>> findUser(@PathVariable long id){
		Optional<Users> users = userService.getUsers(id);
		return new ResponseEntity<>(users,HttpStatus.OK);
	}
		
	/* 전체 유저 조회 */
	@GetMapping("/user/userList")
	public ResponseEntity<List<Users>> userList(){
		List<Users> userList = userService.getUserList();
		return ResponseEntity.ok().body(userList);
	}

	/* 회원 탈퇴 */
	@DeleteMapping(value ="/user/delete/detail/{id}")
	public ResponseEntity<Optional<Users>> delUser(@PathVariable long id){
		Optional<Users> users = userService.delusers(id);
		return new ResponseEntity<>(users, HttpStatus.OK);
	}

	
	/* 로그인 */
	@PostMapping("/login")
	public ResponseEntity<Optional<Users>> login(@RequestBody Users users) {
	    Optional<Users> login = userService.login(users.getUsername(), users.getPassword());
	    return ResponseEntity.ok().body(login);
	}
		
}
