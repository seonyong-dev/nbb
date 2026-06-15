package com.seonyong.nbb.domain.settlement.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.seonyong.nbb.domain.group.entity.GroupMember;
import com.seonyong.nbb.domain.group.repository.GroupMemberRepository;
import com.seonyong.nbb.domain.settlement.dto.response.ListResponse;
import com.seonyong.nbb.domain.settlement.dto.response.MemberResponse;
import com.seonyong.nbb.domain.settlement.repository.SettlementRepository;
import com.seonyong.nbb.global.entity.Settlement;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class SettlementService {
    
    private final SettlementRepository settlementRepository;
    private final GroupMemberRepository groupMemberRepository;

    public ListResponse groupList(UUID id) {
        // 로그인 정보 가공
        GroupMember member = groupMemberRepository.findByMemberUserId_id(id)
            .orElseThrow(() -> new IllegalArgumentException("가입된 그룹 멤버 정보가 없습니다."));

        Long memberId = member.getId();
        
        // 전체 리스트 불러오기
        List<Settlement> allList = Objects.requireNonNull(
            settlementRepository.findBySettlement(memberId),
            "정산그룹을 불러올 수 없습니다."
        );

        // Groups id로 그룹화
        Map<UUID, List<Settlement>> groupedByGroup = allList.stream()
            .collect(Collectors.groupingBy(s -> s.getSenderMemberId().getGroupId().getId()));

        // 정산완료, 정산미완료 그룹 생성
        List<ListResponse.ListInfo> completeGroups = new ArrayList<>();
        List<ListResponse.ListInfo> incompleteGroups = new ArrayList<>();

        // 그룹 내 정산현황 확인
        for (Map.Entry<UUID, List<Settlement>> entry : groupedByGroup.entrySet()) {
            List<Settlement> info = entry.getValue();

            // 그룹 내의 모든 정산이 완료되었는지 확인
            boolean isAllPaid = info.stream().allMatch(i -> i.getIsPaid());

            // 해당 그룹의 대표 데이터 하나 추출
            Settlement group = info.get(0); 
            ListResponse.ListInfo groupInfo = new ListResponse.ListInfo(
                group.getExpenseId().getTxAt(),
                group.getSenderMemberId().getGroupId().getGroupName(),
                group.getExpenseId().getTotalAmount()
            );

            // 분류 후 저장
            if (isAllPaid) {
                completeGroups.add(groupInfo); // 정산 다 한 그룹
            } else {
                incompleteGroups.add(groupInfo); // 한 명 이상 정산 안 한 그룹
            }
        }

        return new ListResponse(completeGroups, incompleteGroups);
    }

    public MemberResponse memberList(Long expenseId) {
        // 정산에 참가한 멤버 불러오기
        List<Settlement> expenses = Objects.requireNonNull(
            settlementRepository.findByExpenseId(expenseId),
            "정산멤버를 불러올 수 없습니다.");

        List<MemberResponse.MemberInfo> members = expenses.stream()
                .map(m -> new MemberResponse.MemberInfo(
                    m.getPaidAt(),
                    m.getSenderMemberId().getMemberUserId().getNickname(),
                    m.getAmount(),
                    m.getIsPaid()
                ))
                .toList();

        return new MemberResponse(members);
    }
}