package com.seonyong.nbb.domain.group.dto.response;

import lombok.Getter;
import lombok.AllArgsConstructor;

import java.util.List;

@Getter
@AllArgsConstructor
public class GroupListResponse {
    
    private List<GroupInfo> groups;

    
    @Getter
    @AllArgsConstructor
    public static class GroupInfo {
        private String groupName;
    }
}
