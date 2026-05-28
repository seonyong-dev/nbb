import React from 'react';
import styles from '../components/StatusTemplate.module.css';

const Settlement = () => {
  return (
    <div className={`col-md-9 ${styles.mainContent}`} style={{ width: '100%' }}>
      <h3 className="mb-5">〈송금현황〉</h3>
      <div className="mb-5">
        <div className={styles.sectionTitle}>미완료 송금</div>
        <div className={styles.remittanceItem}>
          <div className={styles.settlementDate}>5/25</div>
          <div className={styles.groupName}>OO의 그룹</div>
          <div className={styles.amount}>20,000원</div>
          <button className={styles.btnMove}>그룹이동</button>
        </div>
        <div className={styles.remittanceItem}>
          <div className={styles.settlementDate}>5/25</div>
          <div className={styles.groupName}>△△의 그룹</div>
          <div className={styles.amount}>10,000원</div>
          <button className={styles.btnMove}>그룹이동</button>
        </div>
      </div>
      <div className="mb-5">
        <div className={styles.sectionTitle}>완료된 송금</div>
        <div className={styles.remittanceItem}>
          <div className={styles.settlementDate}>5/25</div>
          <div className={styles.groupName}>OO의 그룹</div>
          <div className={styles.amount}>20,000원</div>
          <div className={styles.statusText}>총무닉네임</div>
        </div>
        <div className={styles.remittanceItem}>
          <div className={styles.settlementDate}>5/25</div>
          <div className={styles.groupName}>△△의 그룹</div>
          <div className={styles.amount}>10,000원</div>
          <div className={styles.statusText}>총무닉네임</div>
        </div>
      </div>
    </div>
  );
};
export default Settlement;
