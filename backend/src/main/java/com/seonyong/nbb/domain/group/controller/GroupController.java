package com.seonyong.nbb.domain.group.controller;

import java.util.UUID;

import org.apache.catalina.connector.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.seonyong.nbb.domain.group.dto.request.ExpenseCreateRequest;
import com.seonyong.nbb.domain.group.dto.request.GroupCreateRequest;
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
        
        // 그룹리스트 불러오기
        GroupListResponse response = groupService.groupList(loginUserId);

        return ResponseEntity.ok(response);
    }

    // 그룹 생성
    @PostMapping("/create-list")
    public ResponseEntity<?> createGroup(@RequestBody GroupCreateRequest createRequest, HttpServletRequest request) {
        // 로그인 기록 확인
        HttpSession session = request.getSession(false);

        // 로그인 기록 저장(Null type safety 방지)
        Object loginUserAttr = session.getAttribute(SessionConst.LOGIN_USER);

        // 로그인 기록 없을 시
        if (loginUserAttr == null || session.getAttribute(SessionConst.LOGIN_USER) == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인이 필요합니다.");
        }

        // 로그인id 저장
        UUID loginUserId = (UUID) loginUserAttr;

        // 그룹 생성
        groupService.createGroup(createRequest, loginUserId);

        return ResponseEntity.ok("그룹이 생성되었습니다.");
    }

    // 정산 등록
    @PostMapping("/{groupId}/create-expense")
    public ResponseEntity<?> createExpense(@PathVariable UUID groupId, @RequestBody ExpenseCreateRequest createRequest, HttpServletRequest request) {
        // 로그인 기록 확인
        HttpSession session = request.getSession(false);

        // 로그인 기록 저장(Null type safety 방지)
        Object loginUserAttr = session.getAttribute(SessionConst.LOGIN_USER);

        // 로그인 기록 없을 시
        if (loginUserAttr == null || session.getAttribute(SessionConst.LOGIN_USER) == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인이 필요합니다.");
        }

        // 로그인id 저장
        UUID loginUserId = (UUID) loginUserAttr;

        // 정산 등록
        groupService.createExpense(createRequest, loginUserId, groupId);

        return ResponseEntity.ok("정산 등록이 완료되었습니다.");
    }
}
