package com.seonyong.nbb.domain.auth.controller;

import com.seonyong.nbb.domain.auth.dto.request.LoginRequestDto;
import com.seonyong.nbb.domain.auth.dto.response.LoginResponseDto;
import com.seonyong.nbb.domain.auth.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    
    private final AuthService authService;

    @PostMapping("/login")
    public LoginResponseDto login(@RequestBody LoginRequestDto loginDto) {
        LoginResponseDto user = authService.login(loginDto);

        LoginResponseDto response = new LoginResponseDto(user.getNickname());

        return response;
    }
}
