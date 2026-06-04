package com.seonyong.nbb.domain.auth.dto.response;

import lombok.Getter;
import lombok.AllArgsConstructor;

import java.util.UUID;

@Getter
@AllArgsConstructor
public class LoginResponseDto {

    private UUID id;
    private String nickname;
}
