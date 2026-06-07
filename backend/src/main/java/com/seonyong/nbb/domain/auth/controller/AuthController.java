package com.seonyong.nbb.domain.auth.controller;

import com.seonyong.nbb.domain.auth.dto.request.LoginRequest;
import com.seonyong.nbb.domain.auth.dto.response.LoginResponse;
import com.seonyong.nbb.domain.auth.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    
    private final AuthService authService;

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest loginDto) {
        LoginResponse user = authService.login(loginDto);

        LoginResponse response = new LoginResponse(user.getNickname());

        return response;
    }
}
