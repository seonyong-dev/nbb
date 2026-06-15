package com.seonyong.nbb.domain.paid.dto.response;

import java.math.BigDecimal;
import java.time.OffsetDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class PaidResponse {

    private List<PaidInfo> paidGroups;   // 송금한 그룹
    private List<PaidInfo> noPaidGroups; // 송금 안한 그룹

    
    @Getter
    @AllArgsConstructor
    @JsonInclude(JsonInclude.Include.NON_NULL)
    public static class PaidInfo {
        private OffsetDateTime PaidAt;    // 송금 날짜
        private String         groupName; // 그룹명
        private BigDecimal     amount;    // 송금 금액
        private String         nickname;  // 송금 받은 총무닉네임
    }
}
