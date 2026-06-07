package com.seonyong.nbb.domain.group.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.util.List;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;


@Getter
@NoArgsConstructor
@AllArgsConstructor
public class GroupCreateRequest {

    @NotBlank(message = "그룹명을 입력해주세요.")
    private String title;

    @NotEmpty(message = "멤버를 추가해주세요.")
    private List<MemberInfo> members;

    
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class MemberInfo {
        private String loginId;
    }

}
