package com.seonyong.nbb.domain.group.dto.response;

import lombok.Getter;
import lombok.AllArgsConstructor;

import java.util.List;

public class GroupResponseDto {
    
    @Getter
    @AllArgsConstructor
    public static class Response {
        private String groupName;
    }

    @Getter
    @AllArgsConstructor
    public static class GroupList {
        private List<Response> groups;
    }
}
