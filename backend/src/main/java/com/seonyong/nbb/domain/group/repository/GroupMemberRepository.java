package com.seonyong.nbb.domain.group.repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.seonyong.nbb.domain.group.entity.GroupMember;

@Repository
public interface GroupMemberRepository extends JpaRepository<GroupMember, Long> {

    // 로그인 한 유저와 관련된 그룹리스트
    List<GroupMember> findByMemberUserId(UUID id);

    // 같은 그룹 멤버리스트
    @Query("SELECT m FROM GroupMember m " +
           "JOIN FETCH m.memberUserId " +
           "WHERE m.groupId = :groupId")
    List<GroupMember> findByGroupId(@Param("groupId")UUID groupId);

    Optional<GroupMember> findByMemberUserIdANDGroupId(UUID iD, UUID groupId);
}
