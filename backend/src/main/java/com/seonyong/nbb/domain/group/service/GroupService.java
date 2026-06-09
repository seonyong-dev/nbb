package com.seonyong.nbb.domain.group.service;

import java.util.List;
import java.util.Objects;
import java.util.UUID;

import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.seonyong.nbb.domain.auth.entity.User;
import com.seonyong.nbb.domain.auth.repository.UserRepository;
import com.seonyong.nbb.domain.group.dto.request.GroupCreateRequest;
import com.seonyong.nbb.domain.group.dto.response.GroupListResponse;
import com.seonyong.nbb.domain.group.entity.Group;
import com.seonyong.nbb.domain.group.entity.GroupMember;
import com.seonyong.nbb.domain.group.repository.GroupMemberRepository;
import com.seonyong.nbb.domain.group.repository.GroupRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class GroupService {
    
    private final UserRepository userRepository;
    private final GroupRepository groupRepository;
    private final GroupMemberRepository groupMemberRepository;

    // GroupList의 list 불러오기
    public GroupListResponse groupList(UUID id) {
        // 로그인 유저의 그룹리스트 전체조회
        List<GroupMember> allGroups = Objects.requireNonNull(
            groupMemberRepository.findByMemberUserId(id), 
            "그룹 목록을 불러올 수 없습니다."
        );

        // 총무인 그룹, 일반회원 그룹 분리
        List<GroupListResponse.GroupInfo> mgrGroups = allGroups.stream()
                .filter(r -> r != null && "02".equals(r.getRole()))
                .map(r -> {
                    // 내부 객체들 null 체크 후 생성
                    String groupName = (r.getGroupId() != null) ? r.getGroupId().getGroupName() : "이름 없음";
                    return new GroupListResponse.GroupInfo(groupName);
                })
                .toList();
        
        List<GroupListResponse.GroupInfo> memberGroups = allGroups.stream()
                .filter(r -> r != null && "01".equals(r.getRole()))
                .map(r -> {
                    String groupName = (r.getGroupId() != null) ? r.getGroupId().getGroupName() : "이름 없음";
                    return new GroupListResponse.GroupInfo(groupName);
                })
                .toList();

        return new GroupListResponse(mgrGroups, memberGroups);
    }

    // 그룹 생성 및 멤버 등록
    @Transactional
    public void createGroup(GroupCreateRequest request, @NonNull UUID id) {
        
         User creator = userRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("유저를 찾을 수 없습니다."));
            
        // 그룹 생성
        Group group = Group.builder()
                        .creatorUserId(creator)
                        .groupName(request.getGroupName())
                        .build();
        
        // 그룹 저장(등록)
        Group savedGroup = groupRepository.save(Objects.requireNonNull(group));

        // 생성자 총무로 멤버저장
        groupMemberRepository.save(Objects.requireNonNull(
            GroupMember.builder()
                .groupId(savedGroup)
                .memberUserId(creator)
                .role("02")
                .build(),
            "멤버 객체 생성 실패"
        ));
        
        // 초대받은 멤버 일반회원 저장
        if (request.getMembers() != null) {
            for (GroupCreateRequest.MemberInfo info : request.getMembers()) {
                UUID memberId = info.getId();
                if (memberId == null) continue;

                User member = userRepository.findById(Objects.requireNonNull(memberId))
                .orElseThrow(() -> new IllegalArgumentException("멤버를 찾을 수 없습니다."));

                groupMemberRepository.save(Objects.requireNonNull(
                    GroupMember.builder()
                        .groupId(savedGroup)
                        .memberUserId(member)
                        .role("01")
                        .build(),
                    "초대 멤버 객체 생성 실패"
                ));
            }
        }
    }
}