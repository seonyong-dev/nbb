package com.seonyong.nbb.domain.group.dto.response;

import lombok.Getter;
import lombok.AllArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Getter
@AllArgsConstructor
public class ExpenseListResponse {
        
    // 정산등록 리스트
    private List<ExpenseInfo> expenses;
    
    @Getter
    @AllArgsConstructor
    public static class ExpenseInfo {
        private String title;
        private BigDecimal totalAmount;
    }
}
