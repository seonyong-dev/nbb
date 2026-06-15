package com.seonyong.nbb.domain.settlement.dto.response;

import java.math.BigDecimal;
import java.time.OffsetDateTime;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ListResponse {
    
    private List<ListInfo> completeGroups;   // 정산 완료
    private List<ListInfo> incompleteGroups; // 정산 미완료

    
    @Getter
    @AllArgsConstructor
    public static class ListInfo {
        private OffsetDateTime txAt;        // 정산 등록 날짜
        private String         groupName;   // 그룹명
        private BigDecimal     totalAmount; // 총 경비
    }
}
