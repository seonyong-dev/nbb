package com.seonyong.nbb.domain.paid.service;

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
import com.seonyong.nbb.domain.paid.dto.response.PaidResponse;
import com.seonyong.nbb.domain.paid.repository.PaidRepository;
import com.seonyong.nbb.global.entity.Settlement;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class PaidService {

    private final PaidRepository paidRepository;
    private final GroupMemberRepository groupMemberRepository;

    public PaidResponse paidList(UUID id) {
        // 로그인 정보 가공
        GroupMember member = groupMemberRepository.findByMemberUserId_Id(id)
            .orElseThrow(() -> new IllegalArgumentException("가입된 그룹 멤버 정보가 없습니다."));

        Long memberId = member.getId();
        
        // 전체 리스트 불러오기
        List<Settlement> allGroups = Objects.requireNonNull(
            paidRepository.findByPaid(memberId),
            "송금현황을 불러올 수 없습니다."
        );

        // Groups id로 그룹화
        Map<UUID, List<Settlement>> groupedByGroup = allGroups.stream()
            .collect(Collectors.groupingBy(g -> g.getSenderMemberId().getGroupId().getId()));

        // 송금완료, 송금미완료 그룹 분리
        List<PaidResponse.PaidInfo> paidGroups = new ArrayList<>();
        List<PaidResponse.PaidInfo> noPaidGroups = new ArrayList<>();

        // 그룹 내 정산현황 확인
        for (Map.Entry<UUID, List<Settlement>> entry : groupedByGroup.entrySet()) {
            List<Settlement> info = entry.getValue();

            // 그룹 내의 모든 정산이 완료되었는지 확인
            boolean isAllPaid = info.stream().allMatch(i -> i.getIsPaid());

            // 해당 그룹의 대표 데이터 하나 추출
            Settlement group = info.get(0); 

            // 송금한 그룹은 총무닉네임 전송
            String nickname = null;
            if (isAllPaid) {
                nickname = group.getExpenseId().getMgrMemberId().getMemberUserId().getNickname();
            }

            PaidResponse.PaidInfo groupInfo = new PaidResponse.PaidInfo(
                group.getPaidAt(),
                group.getSenderMemberId().getGroupId().getGroupName(),
                group.getAmount(),
                nickname
            );

            // 분류 후 저장
            if (isAllPaid) {
                paidGroups.add(groupInfo); // 송금 한 그룹
            } else {
                noPaidGroups.add(groupInfo); // 송금 안 한 그룹
            }
        }

        return new PaidResponse(paidGroups, noPaidGroups);
    }
}
