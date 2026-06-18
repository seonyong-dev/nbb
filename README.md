<div align="center">
  <h3>NBB(N빵): 모임 정산 및 가상 계좌 시스템</h3>
</div>

## 기간

- **2026.05.25 ~ 2026.06.18(3주)**

<a name="tableContents"></a>

<br/>

## 목차

1. <a href="#subject">주제</a>
2. <a href="#skills">기술 스택</a>
3. <a href="#performance">주요 기술적 성과 및 개발 인사이트</a>
4. <a href="#contents">화면 소개</a>

<br/>

<!------- 주제 시작 -------->

## 1. 주제

<a name="subject"></a>

데이터 무결성과 보안을 최우선으로 설계한 사용자 맞춤형 그룹 정산 및 가상 뱅킹 서비스

<br />

**주요 기능**

- 그룹 정산(Dutch Pay): 모임별 지출 내역 입력 및 참여 인원 간 1/N 정산 자동화 로직 구현.
- 실시간 정산 현황: '총무'와 '멤버'의 역할을 분리하여 채무/채권 관계 가시화.
- 데이터 접근 제어: Supabase RLS(Row Level Security)를 활용한 사용자별 데이터 격리.
- 가상 계좌 관리: 사용자별 고유 계좌 생성 및 실시간 잔액 조회.(향후 구현 예정)
  
<div align="right"><a href="#tableContents">목차로 이동</a></div>

<br/>

<!------- 기술 스택 시작 -------->

## 2. 기술 스택

<a name="skills"></a>

### FrontEnd

- React 19
- Vite
- React Router v7
- JavaScript(ES6+)
- CSS3
---

### BackEnd

- Java 17
- Spring Boot 3.x
- Spring Data JPA
- Hibernate
---

### Database

- Supabase (PostgreSQL)
---

### Dev Environment

- VS Code (i3 Gram 사양 최적화 환경 구축)
---

### Authentication

- Session-based Auth
---

### Architecture

- Domain-Driven Design (도메인 주도 설계 적용)
---

### Tools & Collaboration

- Git / GitHub
---

<div align="right"><a href="#tableContents">목차로 이동</a></div>

<br/>

<!------- 주요 기술적 성과 및 개발 인사이트 시작 -------->

## 3. 주요 기술적 성과 및 개발 인사이트
<a name="performance"></a>
#### 방어적 프로그래밍을 통한 데이터 신뢰성 확보
핀테크 서비스 특성상 데이터 결손이 치명적임을 인지하고, 모든 비즈니스 로직에 Objects.requireNonNull 및 Optional을 적용하여 Null Safety를 확보함. 이를 통해 런타임 에러 발생 가능성을 데이터베이스 계층부터 원천 차단함.<br>
#### 도메인 주도 설계(DDD) 기반의 아키텍처 채택
기존의 복잡한 계층형 구조에서 벗어나 기능 단위로 도메인(Auth, Group, Settlement, paid)을 분리하여 폴더 구조를 설계함. 코드 간 응집도를 높이고 도메인 간 결합도를 낮추어 프로젝트의 확장성과 유지보수 효율성을 극대화함.<br>
#### 보안 메커니즘을 고려한 Session-based Auth 구현
Fetch API의 credentials: 'include' 옵션을 활용하여 안정적으로 보안 세션이 유지되는 인증 로직을 구축함. 상수를 활용한 세션 키 관리로 오타에 의한 런타임 오류를 방지하고 데이터 접근 보안을 강화함.<br>
#### 트랜잭션 관리 및 데이터 무결성 유지
그룹 생성 및 다수 멤버 등록과 같은 복합적인 데이터 삽입 과정에서 @Transactional을 적용하여 원자성(Atomicity)을 보장함. 예외 발생 시 전 과정 롤백을 통해 데이터 불일치 위험을 제거하고 서비스의 안정성을 확보함.<br>
#### 저사양 하드웨어를 고려한 개발 프로세스 최적화
i3 Gram 노트북의 자원 한계를 극복하기 위해 무거운 로컬 서버 대신 Vite와 BaaS(Supabase)를 도입함. 로컬 리소스 부하를 최소화하면서도 빠른 빌드 속도와 효율적인 개발 환경을 직접 구축하여 생산성을 유지함.<br>
#### 비즈니스 로직을 반영한 RDB 설계 및 데이터 무결성 유지
정산 시스템의 핵심인 '채권·채무 관계'를 명확히 관리하기 위해 테이블 간 연관관계(One-to-Many)를 정밀하게 설계함. 외래키(FK) 제약조건과 JPA의 연관관계 매핑을 활용하여, 복잡한 정산 프로세스 중에도 데이터의 일관성이 깨지지 않도록 데이터베이스 무결성을 확보함.<br>
#### 일관된 협업 컨벤션 수립 및 소스코드 관리
feature/ 기반의 브랜치 전략과 feat:, fix: 등의 Commit Convention을 정의하고 준수함. 개인 프로젝트임에도 실무 규격을 적용하여 소스코드의 가독성을 높이고 향후 협업을 위한 기초 역량을 확보함.<br>

<div align="right"><a href="#tableContents">목차로 이동</a></div>

<br/>

<!------- 화면 소개 시작 -------->

<a name="contents"></a>

<br/>

## 4. 화면 소개

### 1. 로그인 페이지

<table>
  <tr>
    <td align="center" width="70%">
      <h5>로그인 페이지</h5>
      <img width="1887" height="897" alt="로그인 페이지" src="https://github.com/user-attachments/assets/42d30ce1-ca8a-4f83-9f29-916891efc7e9" />
    </td>
  </tr>
  <tr>
    <td align="center">
      <div>✔ 아이디와 비밀번호 입력 후 로그인</div>
      <div>✔ 프론트엔드, 백엔드 유효성 검사</div>
    </td>
  </tr>
</table>

### 2. 그룹목록 페이지

<table>
    <tr>
      <td align="center" width="45%">
        <h5>그룹 목록</h5>
        <img width="1887" height="897" alt="그룹 목록 페이지" src="https://github.com/user-attachments/assets/37104883-6dc5-42eb-a272-73814a10961b" />
      </td> 
      <td align="center" width="25%">
        <h5>그룹 생성 모달</h5>
        <img width="620" height="536" alt="그룹 생성 모달" src="https://github.com/user-attachments/assets/5cf36f67-87dd-45f3-9c79-3468dbb52987" />
      </td>
    </tr>
    <tr>
      <td align="center">
        <div>✔ 참가 중인 그룹 리스트 확인(방장, 일반 구분)</div>
        <div>✔ 오른쪽 상단 모달 버튼으로 그룹 생성</div>
      </td>
      <td align="center">
        <div>✔ 그룹 생성 모달창</div>
      </td>
    </tr>
</table>

### 3. 그룹내부 페이지

<table>
    <tr>
      <td align="center" width="45%">
        <h5>그룹 내부</h5>
        <img width="1882" height="876" alt="그룹 내부 페이지" src="https://github.com/user-attachments/assets/d0773e6b-0cfc-4e70-9e38-50b5faa04bbe" />
      </td>
      <td align="center" width="25%">
        <h5>정산 등록 모달</h5>
        <img width="601" height="582" alt="정산 등록 모달" src="https://github.com/user-attachments/assets/d6c0462a-91f1-486b-96f3-2158946f4d7b" />
      </td>
    </tr>
    <tr>
      <td align="center">
        <div>✔ 선택한 그룹 내 정산리스트 확인</div>
        <div>✔ 하단의 정산 등록 모달 버튼을 통해 정산 등록</div>
      </td>
      <td align="center">
        <div>✔ 정산 등록 모달창</div>
      </td>
    </tr>
</table>

### 4. 송금현황 페이지

<table>
    <tr>
      <td align="center" width="70%">
        <h5>송금 현황 페이지</h5>
        <img width="1891" height="907" alt="송금 현황 페이지" src="https://github.com/user-attachments/assets/9405f741-5c99-46fa-b3d9-2062d8322ec3" />
      </td>
    </tr>
    <tr>
      <td align="center">
        <div>✔ 참가 중인 모든 그룹의 송금 현황 확인(송금/미 송금 구분)</div>
        <div>✔ 송금 완료 시 송금한 총무 닉네임 표시</div>
        <div>✔ 송금 미완료 시 송금해야하는 그룹으로 이동</div>
      </td>
    </tr>
</table>

### 5. 정산현황 페이지

<table>
    <tr>
      <td align="center" width="70%">
        <h5>정산 현황 페이지</h5>
        <img width="1877" height="897" alt="정산 현황 페이지" src="https://github.com/user-attachments/assets/30c37920-f581-4583-971e-fa6bac4063b2" />
      </td>
    </tr>
    <tr>
      <td align="center">
        <div>✔ 총무인 모든 그룹의 정산 현황 확인(정산/미 정산 구분)</div>
        <div>✔ 오른쪽 모달 버튼을 통해 멤버들의 정산 현황 리스트 확인</div>
      </td>
    </tr>
</table>

<div align="right"><a href="#tableContents">목차로 이동</a></div>

<br/>
