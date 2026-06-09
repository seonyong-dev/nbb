package com.seonyong.nbb.domain.group.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;


@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ExpenseCreateRequest {
    
    @NotBlank(message = "정산주제를 입력해주세요.")
    private String title;

    @NotEmpty(message = "정산할 금액을 입력해주세요.")
    private BigDecimal totalAmount;

    @NotEmpty(message = "멤버를 추가해주세요.")
    private List<MemberInfo> members;
    
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class MemberInfo {
        private String loginId;
    }
}
