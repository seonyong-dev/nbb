package com.seonyong.nbb.domain.auth.service;

import com.seonyong.nbb.domain.auth.entity.User;
import com.seonyong.nbb.domain.auth.dto.request.LoginRequestDto;
import com.seonyong.nbb.domain.auth.dto.response.LoginResponseDto;
import com.seonyong.nbb.domain.auth.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AuthService {
    
    private final UserRepository userRepository;

    // 로그인 기능
    public LoginResponseDto login(LoginRequestDto loginDto) {
        User user = userRepository.findByLoginId(loginDto.getLoginId())
                .filter(u -> u.getPassword().equals(loginDto.getPassword()))
                .orElseThrow(() -> new IllegalArgumentException("아이디 또는 비밀번호가 틀립니다."));
        
        return new LoginResponseDto(user.getNickname());
    }
}
