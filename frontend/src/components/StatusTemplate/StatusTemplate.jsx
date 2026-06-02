import React from 'react';
import styles from './StatusTemplate.module.css';

const Template = ({ titles, incomplete, completed, onBtnClick }) => (
  <div className={`col-md-9 ${styles.mainContent}`}>
    <h3 className="mb-5">{titles.title}</h3>
    <div className="mb-5">
      <div className={styles.sectionTitle}>{titles.topTitle}</div>
      <div className={styles.remittanceItem}>
        {incomplete &&
          incomplete.map((item) => (
            <React.Fragment key={item.id}>
              <div className={styles.settlementDate}>{item.date}</div>
              <div className={styles.groupName}>{item.groupName}</div>
              <div className={styles.amount}>{item.amount}</div>
              {item.commonBtn && (
                <button className={styles.commonBtn} onClick={() => onBtnClick()}>
                  {item.commonBtn}
                </button>
              )}
            </React.Fragment>
          ))}
      </div>
    </div>
    <div className="mb-5">
      <div className={styles.sectionTitle}>{titles.bottomTitle}</div>
      <div className={styles.remittanceItem}>
        {completed &&
          completed.map((item) => (
            <React.Fragment key={item.id}>
              <div className={styles.settlementDate}>{item.date}</div>
              <div className={styles.groupName}>{item.groupName}</div>
              <div className={styles.amount}>{item.amount}</div>
              {item.statusText && (
                <div className={styles.statusText}>{item.statusText}</div>
              )}
              {item.commonBtn && (
                <button className={styles.commonBtn} onClick={() => onBtnClick(item.id)}>
                  {item.commonBtn}
                </button>
              )}
            </React.Fragment>
          ))}
      </div>
    </div>
  </div>
);

export default Template;
