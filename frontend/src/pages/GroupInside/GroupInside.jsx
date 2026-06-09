import React from 'react';
import { useGroupInside } from '@/hooks/useGroupInside.js';
import { useModal } from '@/hooks/useModal.js';
import GroupInsideModal from './Modal/GroupInsideModal.jsx';
import styles from './GroupInside.module.css';

const GroupInside = () => {
  const { receiptList, memberList } = useGroupInside();
  const { isModalOpen, modalClose, showModal } = useModal();
  return (
    <div className="row">
      {/* 중앙 메인 콘텐츠 */}
      <div className="col-md-6 py-5" style={{ width: '70%' }}>
        <h3 className="text-center">그룹명 들어갈 자리</h3>

        {/* 스크롤이 적용될 영역 시작 */}
        <div className={styles.scrollArea}>
          {/* 정산 카드 1 */}
          <div className={`${styles.settlementCard} mb-4`}>
            <div className="mb-3" style={{ fontSize: '1.4rem' }}>
              {receiptList.title}
            </div>
            <div className="mb-1">정산할 총 금액</div>
            <div className="mb-3" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
              {receiptList.expense}
            </div>
            <div className="mb-1">참가멤버</div>
            <div className="mb-3" style={{ fontSize: '1.3rem' }}>
              {receiptList.member}
            </div>
            <div className="mb-1">송금해야 할 금액</div>
            <div
              className="mb-2"
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                borderBottom: '1px solid #ffffff',
                display: 'inline-block',
              }}
            >
              {receiptList.amount}
            </div>
            <br />
            <button className={styles.kakaoPayBtn}>카카오페이</button>
          </div>
        </div>
        {/* // 스크롤 영역 끝 */}

        {/* 정산등록 버튼 (모달 연결) */}
        <button className={styles.btnRegFloat} onClick={showModal}>
          정산등록
        </button>
      </div>

      {isModalOpen && <GroupInsideModal onClose={modalClose} />}

      {/* 오른쪽 멤버 현황 */}
      <div className={`col-md-3 ${styles.memberSidebar} ms-auto`}>
        <div className={styles.memberTitle}>멤버현황</div>
        <ul className={styles.memberList}>
          <li className={styles.memberItem}>{memberList.name} 〈총무〉</li>
          <li className={styles.memberItem}>△△△</li>
          <li className={styles.memberItem}>ㅁㅁㅁ</li>
        </ul>
        <div style={{ marginTop: '100px' }}>
          <button className={styles.btnSide}>멤버초대</button>
          <button className={styles.btnSide}>그룹나가기</button>
        </div>
      </div>
    </div>
  );
};

export default GroupInside;
