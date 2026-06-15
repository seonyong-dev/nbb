package com.seonyong.nbb.domain.group.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.seonyong.nbb.domain.group.entity.Group;

public interface GroupRepository extends JpaRepository<Group, UUID> {

}
