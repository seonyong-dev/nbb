package com.seonyong.nbb.domain.settlement.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.seonyong.nbb.global.entity.Settlement;


public interface SettlementRepository extends JpaRepository<Settlement, Long> {

    @Query("SELECT s FROM Settlement s " +
           "JOIN s.senderMemberId m " +
           "JOIN s.expenseId e " +
           "JOIN FETCH m.groupId g " +
           "WHERE e.mgrMemberId = :mgrMemberId " +
           "AND m.groupId = :groupId ")
    List<Settlement> findByGroupId(
        @Param("groupId")UUID groupId,
        @Param("mgrMemberId")Long mgrMemberId
    );
}
