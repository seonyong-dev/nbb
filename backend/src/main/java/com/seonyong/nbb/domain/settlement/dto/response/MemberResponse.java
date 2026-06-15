package com.seonyong.nbb.domain.settlement.dto.response;

import java.math.BigDecimal;
import java.time.OffsetDateTime;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class MemberResponse {
    
    private List<SettlementInfo> completes;   // 정산 완료
    private List<SettlementInfo> incompletes; // 정산 미완료

    
    @Getter
    @AllArgsConstructor
    public static class SettlementInfo {
        private OffsetDateTime paidAt;         // 송금날짜
        private String         senderMemberId; // 참가멤버
        private BigDecimal     amount;         // 송금금액
        private Boolean        isPaid;         // 송금여부
    }
}
