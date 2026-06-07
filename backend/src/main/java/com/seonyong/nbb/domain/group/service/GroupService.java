package com.seonyong.nbb.domain.group.service;

import com.seonyong.nbb.domain.group.entity.Group;
import com.seonyong.nbb.domain.group.dto.request.GroupCreateRequest;
import com.seonyong.nbb.domain.group.dto.response.GroupListResponse;
import com.seonyong.nbb.domain.group.repository.GroupRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class GroupService {
    
    private GroupRepository groupRepository;

    public GroupListResponse groupList() {
        return null;
    }
}
