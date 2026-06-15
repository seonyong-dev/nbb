package com.seonyong.nbb.domain.group.service;

import java.util.List;
import java.util.Objects;
import java.util.UUID;

import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.seonyong.nbb.domain.auth.entity.User;
import com.seonyong.nbb.domain.auth.repository.UserRepository;
import com.seonyong.nbb.domain.group.dto.request.ExpenseCreateRequest;
import com.seonyong.nbb.domain.group.dto.request.GroupCreateRequest;
import com.seonyong.nbb.domain.group.dto.response.ExpenseListResponse;
import com.seonyong.nbb.domain.group.dto.response.GroupListResponse;
import com.seonyong.nbb.domain.group.dto.response.MemberListResponse;
import com.seonyong.nbb.domain.group.entity.Group;
import com.seonyong.nbb.domain.group.entity.GroupExpense;
import com.seonyong.nbb.domain.group.entity.GroupMember;
import com.seonyong.nbb.domain.group.repository.GroupExpenseRepository;
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
    private final GroupExpenseRepository groupExpenseRepository;

    // GroupList의 리스트 불러오기
    public GroupListResponse groupList(UUID id) {
        // 로그인 유저의 그룹리스트 전체조회
        List<GroupMember> allGroups = Objects.requireNonNull(
            groupMemberRepository.findByGroupList(id), 
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
                    "초대 멤버 객체 생성에 실패했씁니다."
                ));
            }
        }
    }

    // GroupInside 정산 등록
    @Transactional
    public void createExpense(ExpenseCreateRequest request, UUID id, UUID groupId) {
        
        // 그룹 멤버인지 확인
        GroupMember groupMember = groupMemberRepository.findByMemberUserIdANDGroupId(id, groupId)
                .orElseThrow(() -> new IllegalArgumentException("해당 그룹의 멤버가 아닙니다."));

        
        // 총무인지 확인
        if (groupMember.getRole() != "02") { 
            throw new IllegalStateException("총무만 정산을 등록할 수 있습니다.");
        }

        // 정산 등록
        groupExpenseRepository.save(Objects.requireNonNull(
            GroupExpense.builder()
                .title(request.getTitle())
                .totalAmount(request.getTotalAmount())
                .mgrMemberId(groupMember)
                .build(),
                "정산 등록에 실패했습니다."
            ));
    }

    // GroupInside의 정산리스트 불러오기
    public ExpenseListResponse expenseList(UUID groupId) {
        // 선택한 그룹의 정산리스트 조회
        List<GroupExpense> allList = Objects.requireNonNull(
            groupExpenseRepository.findByGroupId(groupId),
            "리스트를 불러올 수 없습니다."
        );

        List<ExpenseListResponse.ExpenseInfo> expenseDto = allList.stream()
                .map(expense -> new ExpenseListResponse.ExpenseInfo(
                    expense.getTitle(),
                    expense.getTotalAmount()
                ))
                .toList();

        return new ExpenseListResponse(expenseDto);
    }

    // GroupInside의 멤버리스트 불러오기
    public MemberListResponse memberList(UUID groupId) {
        // 선택한 그룹의 멤버 조회
        List<GroupMember> members = Objects.requireNonNull(
            groupMemberRepository.findByGroupId(groupId),
            "멤버를 불러올 수 없습니다."
        );

        List<MemberListResponse.MemberInfo> memberDto = members.stream()
                .map(member -> new MemberListResponse.MemberInfo(
                    member.getMemberUserId().getNickname(),
                    member.getRole()
                ))
                .toList();
        
        return new MemberListResponse(memberDto);
    }
}