package com.seonyong.nbb.domain.group.repository;

import com.seonyong.nbb.domain.group.entity.Group;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

import java.util.UUID;

@Repository
public interface GroupRepository extends JpaRepository<Group, UUID> {

    Optional<Group> findByCreatorUserId(UUID CreatorUserId);
}
