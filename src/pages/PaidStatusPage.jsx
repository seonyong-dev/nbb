import React from 'react';
import styles from '../components/StatusTemplate.module.css';

const Paid = () => {
    return (
        <div className={`col-md-9 ${styles.mainContent}`}>
            <h3 className="mb-5">〈송금현황〉</h3>
            <div className="mb-5">
                <div className={styles.sectionTitle}>미완료 송금</div>
                <div className={styles.remittanceItem}>
                    <div className={styles.groupName}>OO의 그룹</div>
                    <div className={styles.amount}>20,000</div>
                    <button className={styles.btnSend}>송금하기</button>
                </div>
                <div className={styles.remittanceItem}>
                    <div className={styles.groupName}>△△의 그룹</div>
                    <div className={styles.amount}>10,000</div>
                    <div className={styles.statusText}>송금완료.</div>
                </div>
            </div>
        </div>
    );
};
export default Paid;