package com.seonyong.nbb.domain.auth.dto.response;

import lombok.Getter;

import java.util.UUID;

import lombok.AllArgsConstructor;

@Getter
@AllArgsConstructor
public class LoginResponse {

    private UUID   id;
    private String nickname;
}
