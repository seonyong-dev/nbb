package com.seonyong.nbb.domain.auth.repository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.seonyong.nbb.domain.auth.entity.User;

public interface UserRepository extends JpaRepository<User, UUID>{

    Optional<User> findByLoginId(String loginid);
}