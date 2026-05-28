import React from 'react';
import styles from '../components/StatusTemplate.module.css';

{
  /* 정산현황 버튼 (모달 연결) */
}
const ModalButton = ({ children, targetId = 'regSettlementModal' }) => (
  <button
    className={styles.btnMove}
    data-bs-toggle="modal"
    data-bs-target={`#${targetId}`}
  >
    {children}
  </button>
);

const paid = () => {
  return (
    <div className={`col-md-9 ${styles.mainContent}`} style={{ width: '100%' }}>
      <h3 className="mb-5">〈정산현황〉</h3>
      <div className="mb-5">
        <div className={styles.sectionTitle}>미완료 정산</div>
        <div className={styles.remittanceItem}>
          <div className={styles.settlementDate}>5/25</div>
          <div className={styles.groupName}>OO의 그룹</div>
          <div className={styles.amount}>20,000/100,000원</div>
          <ModalButton>정산현황</ModalButton>
        </div>
        <div className={styles.remittanceItem}>
          <div className={styles.settlementDate}>5/25</div>
          <div className={styles.groupName}>△△의 그룹</div>
          <div className={styles.amount}>10,000/50,000원</div>
          <ModalButton>정산현황</ModalButton>
        </div>
      </div>
      <div className="mb-5">
        <div className={styles.sectionTitle}>완료된 정산</div>
        <div className={styles.remittanceItem}>
          <div className={styles.settlementDate}>5/25</div>
          <div className={styles.groupName}>OO의 그룹</div>
          <div className={styles.amount}>100,000원</div>
          <ModalButton>정산완료</ModalButton>
        </div>
        <div className={styles.remittanceItem}>
          <div className={styles.settlementDate}>5/25</div>
          <div className={styles.groupName}>△△의 그룹</div>
          <div className={styles.amount}>50,000원</div>
          <ModalButton>정산완료</ModalButton>
        </div>
      </div>

      {/* 정산등록 모달 팝업 */}
      <div
        className="modal fade"
        id="regSettlementModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content modal-content-custom">
            <div className="modal-header border-0">
              <h5 className="modal-title w-100 text-center">〈정산현황〉</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className={styles.ModalRemittanceItem}>
              <div className={styles.ModalSettlementDate}>5/25</div>
              <div className={styles.ModalGroupName}>ㅇㅇㅇ</div>
              <div className={styles.ModalAmount} style={{ marginRight: '1.5rem' }}>
                20,000원
              </div>
              <div className={styles.ModalStatusText}>정산완료</div>
            </div>

            <div className={styles.ModalRemittanceItem}>
              <div className={styles.ModalSettlementDate}></div>
              <div className={styles.ModalGroupName}>ㅇㅇㅇ</div>
              <div className={styles.ModalAmount} style={{ marginRight: '1.5rem' }}>
                10,000원
              </div>
              <div className={styles.ModalStatusText}>미송금</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default paid;
