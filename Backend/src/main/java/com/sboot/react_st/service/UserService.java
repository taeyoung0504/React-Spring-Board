package com.sboot.react_st.service;

import static org.hamcrest.CoreMatchers.allOf;

import java.util.List;
import java.util.Optional;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.sboot.react_st.DataNotFoundException;
import com.sboot.react_st.domain.Users;
import com.sboot.react_st.repository.BoardRepository;
import com.sboot.react_st.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserService {

	@Autowired
	private final UserRepository userRepository;
	
	/* 회원가입 서비스 */
	public Users signUp(String username,  String password,String email) {
		Users users = new Users();
		users.setUsername(username);
		users.setPassword(password);
		users.setEmail(email);
		return this.userRepository.save(users);
	}
	
	/* 회원 전체 목록 조회 서비스 */
	public List<Users> getUserList(){
		return this.userRepository.findAll();
	}
	
	/* 특정 회원 조회 서비스 */
	public Optional<Users> getUsers(Long id) {
		Optional<Users> userdetail = this.userRepository.findById(id);
		 return userdetail;
		}	
	
	/* 회원 탈퇴 서비스 */
	public Optional<Users> delusers(Long id) {
	    Optional<Users> userdetail = this.userRepository.findById(id);

	    if (userdetail.isPresent()) {
	        Users deletedUser = userdetail.get();
	        userRepository.deleteById(id);
	        return Optional.of(deletedUser);
	    } else {
	        return Optional.empty(); // Return an empty Optional if the user with the given ID doesn't exist
	    }
	}
	
	/* 로그인 기능 */
	public Optional<Users> login(String username, String password){
		Optional<Users> findUser = this.userRepository.findByusernameAndPassword(username, password);
		if(findUser.isPresent()) {
			Users loginUser = findUser.get();
			userRepository.findByusernameAndPassword(username, password);
			return Optional.of(loginUser);
		} else {
			return Optional.empty();
		}
	}
	
}
