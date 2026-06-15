package com.seonyong.nbb.domain.settlement.controller;

import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.seonyong.nbb.domain.settlement.dto.response.ListResponse;
import com.seonyong.nbb.domain.settlement.dto.response.MemberResponse;
import com.seonyong.nbb.domain.settlement.service.SettlementService;
import com.seonyong.nbb.global.common.SessionConst;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/api/settlement")
@RequiredArgsConstructor
public class SettlementController {
    
    private final SettlementService settlementService;

    // 정산현황 그룹리스트 불러오기
    @GetMapping("/list")
    public ResponseEntity<?> groupList(HttpServletRequest request) {
        // 로그인 기록 확인
        HttpSession session = request.getSession(false);

        // 로그인 기록 없을 시
        if (session == null || session.getAttribute(SessionConst.LOGIN_USER) == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인이 필요합니다.");
        }

        // 로그인 기록 저장
        UUID id = (UUID) session.getAttribute(SessionConst.LOGIN_USER);

        // 그룹리스트 불러오기
        ListResponse response = settlementService.groupList(id);
        if(response == null) return ResponseEntity.ok("그룹정보가 없습니다.");

        return ResponseEntity.ok(response);
    }

    // 정산현황 멤버리스트 불러오기
    @GetMapping("/{expenseId}/members")
    public ResponseEntity<?> memberList(@PathVariable Long expenseId) {
        
        // 멤버리스트 불러오기
        MemberResponse response = settlementService.memberList(expenseId);
        if(response == null) return ResponseEntity.ok("멤버정보가 없습니다.");

        return ResponseEntity.ok(response);
        
    }
}

