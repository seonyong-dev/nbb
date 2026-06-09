package com.seonyong.nbb.domain.group.dto.response;

import lombok.Getter;
import lombok.AllArgsConstructor;

import java.util.List;

@Getter
@AllArgsConstructor
public class MemberListResponse {
        
    // 멤버리스트
    private List<MemberInfo> members;
    
    @Getter
    @AllArgsConstructor
    public static class MemberInfo {
        private String nickname;
        private String role;
    }
}
