import React from 'react';
import styles from './GroupListModal.module.css';

const GroupListModal = ({ onClose }) => {
  return (
    <div
      className="modal show"
      style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-3 modal-content-custom">
          <div className="modal-header border-0">
            <h5 className="modal-title">〈그룹생성〉</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-4">
                <label className="form-label">그룹명</label>
                <input
                  type="text"
                  className="form-control bg-transparent text-white border-white"
                />
              </div>
              <div className="mb-2">
                <label className="form-label">초대할 멤버</label>
                <div className={styles.searchContainer}>
                  <input
                    type="text"
                    className="form-control bg-transparent text-white border-white"
                    placeholder="아이디를 입력하세요"
                  />
                  <span className={styles.searchIcon}>🔍</span>
                </div>
              </div>
              <ul className="list-unstyled py-2">
                <li>Id 1</li>
                <li>Id 2</li>
              </ul>
              <button type="submit" className={styles.btnCreateSubmit}>
                생성하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupListModal;
