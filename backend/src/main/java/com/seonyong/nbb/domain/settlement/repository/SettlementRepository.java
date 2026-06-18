package com.seonyong.nbb.domain.settlement.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.seonyong.nbb.global.entity.Settlement;


public interface SettlementRepository extends JpaRepository<Settlement, Long> {

    // 정산현황 리스트 불러오기
    @Query("SELECT DISTINCT s FROM Settlement s " +
           "JOIN FETCH s.senderMemberId m " +
           "JOIN FETCH s.expenseId e " +
           "JOIN FETCH m.groupId " +
           "WHERE e.mgrMemberId.id = :memberId ")
    List<Settlement> findBySettlement(@Param("memberId")Long memberId);

    // 정산현황 멤버리스트 불러오기
    List<Settlement> findByExpenseId_Id(Long expenseId);
}
