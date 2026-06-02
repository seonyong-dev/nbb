import React from 'react';
import styles from './SettlementStatusModal.module.css';

const SettlementStatusModal = ({ modalData, onClose }) => (
  <div
    className="modal show"
    style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
    tabIndex="-1"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content modal-content-custom">
        <div className="modal-header border-0">
          <h5 className="modal-title w-100 text-center">〈정산현황〉</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            onClick={onClose}
            aria-label="Close"
          ></button>
        </div>

        <div className={styles.ModalRemittanceItem}>
          <div className={styles.ModalSettlementDate}>{modalData.date}</div>
          <div className={styles.ModalGroupName}>{modalData.groupName}</div>

          <div className={styles.ModalAmount} style={{ marginRight: '1.5rem' }}>
            {modalData.amount}
          </div>

          <div className={styles.ModalStatusText}>{modalData.statusText}</div>
        </div>
      </div>
    </div>
  </div>
);

export default SettlementStatusModal;
