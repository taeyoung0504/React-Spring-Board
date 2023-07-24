package com.sboot.react_st.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sboot.react_st.domain.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, Long>{

	Optional<Users> deleteById(Optional<Users> userdetail);

	Optional<Users> findAllById(Long id);


	Optional<Users> findByusername(String username);

	
	Optional<Users> findBypassword(String password);
	Optional<Users> findByusernameAndPassword(String username,String password);
	
}
