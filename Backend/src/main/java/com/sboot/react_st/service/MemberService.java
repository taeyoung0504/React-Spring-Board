package com.sboot.react_st.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sboot.react_st.config.SecurityUtil;
import com.sboot.react_st.dto.MemberResponseDto;
import com.sboot.react_st.entity.Users;
import com.sboot.react_st.repository.MemberRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MemberService {
	 private final MemberRepository memberRepository;
	    private final PasswordEncoder passwordEncoder;

	    public MemberResponseDto getMyInfoBySecurity() {
	        return memberRepository.findById(SecurityUtil.getCurrentMemberId())
	                .map(MemberResponseDto::of)
	                .orElseThrow(() -> new RuntimeException("로그인 유저 정보가 없습니다"));
	    }

	    @Transactional
	    public MemberResponseDto changeMemberNickname(String email, String nickname) {
	        Users users = memberRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("로그인 유저 정보가 없습니다"));
	        users.setNickname(nickname);
	        return MemberResponseDto.of(memberRepository.save(users));
	    }

	    @Transactional
	    public MemberResponseDto changeMemberPassword(String email, String exPassword, String newPassword) {
	    	 Users users = memberRepository.findById(SecurityUtil.getCurrentMemberId()).orElseThrow(() -> new RuntimeException("로그인 유저 정보가 없습니다"));
	        if (!passwordEncoder.matches(exPassword, users.getPassword())) {
	            throw new RuntimeException("비밀번호가 맞지 않습니다");
	        }
	        users.setPassword(passwordEncoder.encode((newPassword)));
	        return MemberResponseDto.of(memberRepository.save(users));
	}
	    
	    
	  
}