package com.seonyong.nbb.domain.group.repository;

import com.seonyong.nbb.domain.group.entity.GroupExpense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface GroupExpenseRepository extends JpaRepository<GroupExpense, Long> {
    
    Optional<GroupExpense> findByMgrMemberId(Long mgrMemberId);
}
