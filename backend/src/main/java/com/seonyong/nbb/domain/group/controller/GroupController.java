package com.seonyong.nbb.domain.group.controller;

import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.seonyong.nbb.domain.group.dto.response.GroupListResponse;
import com.seonyong.nbb.domain.group.service.GroupService;
import com.seonyong.nbb.global.common.SessionConst;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/api/group")
@RequiredArgsConstructor
public class GroupController {
    
    private final GroupService groupService;

    // 그룹리스트 불러오기
    @GetMapping("/list")
    public ResponseEntity<?> groupList(HttpServletRequest request) {
        // 로그인 기록 확인
        HttpSession session = request.getSession(false);

        // 로그인 기록 없을 시
        if (session == null || session.getAttribute(SessionConst.LOGIN_USER) == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인이 필요합니다.");
        }

        // 로그인 기록 저장
        UUID loginUserId = (UUID) session.getAttribute(SessionConst.LOGIN_USER);
        GroupListResponse response = groupService.groupList(loginUserId);

        return ResponseEntity.ok(response);
    }
}
