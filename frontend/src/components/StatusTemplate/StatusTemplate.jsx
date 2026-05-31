import React from 'react';
import styles from './StatusTemplate.module.css';

const Template = ({ title, sectionOne, oneData, sectionTwo, twoData, onBtnClick }) => (
  <div className={`col-md-9 ${styles.mainContent}`}>
    <h3 className="mb-5">{title}</h3>
    <div className="mb-5">
      <div className={styles.sectionTitle}>{sectionOne}</div>
      <div className={styles.remittanceItem}>
        <div className={styles.settlementDate}>{oneData.date}</div>
        <div className={styles.groupName}>{oneData.groupName}</div>
        <div className={styles.amount}>{oneData.amount}</div>
        {oneData.commonBtn && (
          <button className={styles.commonBtn} onClick={() => onBtnClick(oneData.id)}>
            {oneData.commonBtn}
          </button>
        )}
      </div>
    </div>
    <div className="mb-5">
      <div className={styles.sectionTitle}>{sectionTwo}</div>
      <div className={styles.remittanceItem}>
        <div className={styles.settlementDate}>{twoData.date}</div>
        <div className={styles.groupName}>{twoData.groupName}</div>
        <div className={styles.amount}>{twoData.amount}</div>
        {twoData.statusText && (
          <div className={styles.statusText}>{twoData.statusText}</div>
        )}
        {twoData.commonBtn && (
          <button
            className={styles.commonBtn}
            onClick={() => onBtnClick && onBtnClick(twoData.id)}
          >
            {twoData.commonBtn}
          </button>
        )}
      </div>
    </div>
  </div>
);

export default Template;
