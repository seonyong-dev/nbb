package com.seonyong.nbb.domain.group.repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.seonyong.nbb.domain.group.entity.GroupMember;

public interface GroupMemberRepository extends JpaRepository<GroupMember, Long> {

    // 로그인 유저 ID로 해당 유저의 그룹 멤버 정보 찾기
    Optional<GroupMember> findByMemberUserId_Id(UUID id);

    // 로그인 한 유저와 관련된 그룹리스트
    @Query("SELECT m FROM GroupMember m " +
           "JOIN FETCH m.groupId g " +
           "WHERE m.memberUserId.id = :id ")
    List<GroupMember> findByGroupList(@Param("id")UUID id);

    // 같은 그룹 멤버리스트
    @Query("SELECT m FROM GroupMember m " +
           "JOIN FETCH m.memberUserId " +
           "WHERE m.groupId.id = :groupId")
    List<GroupMember> findByGroupId(@Param("groupId")UUID groupId);

    // 그룹멤버인지 확인
    Optional<GroupMember> findByMemberUserId_IdAndGroupId_Id(UUID id, UUID groupId);
}
