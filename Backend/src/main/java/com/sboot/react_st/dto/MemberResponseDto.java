package com.sboot.react_st.dto;


import com.sboot.react_st.entity.Users;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MemberResponseDto {
    private String email;
    private String nickname;

    public static MemberResponseDto of(Users users) {
        return MemberResponseDto.builder()
                .email(users.getEmail())
                .nickname(users.getNickname())
                .build();
    }
}