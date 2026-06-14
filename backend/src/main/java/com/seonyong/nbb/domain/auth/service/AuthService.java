package com.seonyong.nbb.domain.auth.service;

import com.seonyong.nbb.domain.auth.entity.User;
import com.seonyong.nbb.domain.auth.dto.request.LoginRequest;
import com.seonyong.nbb.domain.auth.dto.response.LoginResponse;
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
    public LoginResponse login(LoginRequest loginRequest) {
        User user = userRepository.findByLoginId(loginRequest.getLoginId())
                .filter(u -> u.getPassword().equals(loginRequest.getPassword()))
                .orElseThrow(() -> new IllegalArgumentException("아이디 또는 비밀번호가 틀립니다."));
        
        return new LoginResponse(user.getId(), user.getNickname());
    }
}
