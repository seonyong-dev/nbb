package com.seonyong.nbb.domain.auth.controller;

import com.seonyong.nbb.domain.auth.dto.request.LoginRequest;
import com.seonyong.nbb.domain.auth.dto.response.LoginResponse;
import com.seonyong.nbb.domain.auth.service.AuthService;
import com.seonyong.nbb.global.common.SessionConst;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    
    private final AuthService authService;

    // 로그인
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest, HttpServletRequest request) {
        // 회원 확인
        LoginResponse user = authService.login(loginRequest);

        // 로그인 실패 시
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("아이디 또는 비밀번호가 틀렸습니다.");
        }

        // 로그인 기록 세션 저장
        HttpSession session = request.getSession();
        session.setAttribute(SessionConst.LOGIN_USER, user.getId());

        // 화면에 전송 할 데이터
        LoginResponse response = new LoginResponse(user.getId(), user.getNickname());

        return ResponseEntity.ok(response);
    }

    // 로그아웃
    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session != null) session.invalidate();

        return ResponseEntity.ok("로그아웃 되었습니다.");
    }
}
