package com.seonyong.nbb.domain.group.dto.response;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class GroupListResponse {
    
    private List<GroupInfo> mgrGroups; // 총무인 그룹리스트
    private List<GroupInfo> memberGroups; // 참가 중인 그룹리스트

    
    @Getter
    @AllArgsConstructor
    public static class GroupInfo {
        private String groupName;
    }
}
