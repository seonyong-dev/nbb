package com.seonyong.nbb.domain.group.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.seonyong.nbb.domain.group.entity.GroupExpense;

@Repository
public interface GroupExpenseRepository extends JpaRepository<GroupExpense, Long> {
    
    // 그룹 내 정산내역들
    @Query("SELECT e FROM GroupExpense e " +
           "JOIN e.mgrMemberId m " +
           "WHERE m.groupId.id = :groupId ")
    List<GroupExpense> findByGroupId(@Param("groupId")UUID groupId);
}
