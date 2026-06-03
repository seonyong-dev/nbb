package com.seonyong.nbb.domain.auth.entity;

import java.time.OffsetDateTime;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "users")
@Getter // Getter 자동 생성
@NoArgsConstructor(access = AccessLevel.PROTECTED) // JPA 필수 기본 생성자 안전하게 생성
@AllArgsConstructor // 빌더나 편의용 전체 생성자
@Builder // 코드 작성 속도를 획기적으로 올려주는 빌더 패턴
public class User {
    
    @Id
    @GeneratedValue
    @Column(nullable = false)
    private UUID id;

    @Column(name = "login_id", nullable = false, unique = true)
    private String loginId;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String nickname;

    @Column(name = "create_at", nullable = false, updatable = false)
    private OffsetDateTime creatAt;

    @Column(name="is_withdrawn")    
    @Builder.Default
    private Boolean isWithdrawn = false;
    
    @Column(name = "withdrawn_at")
    private OffsetDateTime withdrawnAt;

    
}
