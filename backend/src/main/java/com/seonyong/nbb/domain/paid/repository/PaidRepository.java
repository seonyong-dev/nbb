package com.seonyong.nbb.domain.paid.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.seonyong.nbb.global.entity.Settlement;

public interface PaidRepository extends JpaRepository<Settlement, Long> {
    
    // 송금현황 리스트 불러오기
    @Query("SELECT DISTINCT s FROM Settlement s " +
           "JOIN s.senderMemberId m " +
           "JOIN FETCH s.expenseId e " +
           "JOIN FETCH m.groupId " +
           "WHERE m.id = :memberId ")
    List<Settlement> findByPaid(@Param("memberId")Long memberId);
}
