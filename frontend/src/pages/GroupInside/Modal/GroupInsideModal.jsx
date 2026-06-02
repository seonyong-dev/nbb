import React from 'react';
import styles from './GroupInsideModal.module.css';

const GroupInsideModal = (onClose) => {
  return (
    <div className="modal fade" id="regSettlementModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content modal-content-custom">
          <div className="modal-header border-0">
            <h5 className="modal-title w-100 text-center">〈정산등록〉</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body p-4">
            <form>
              <div className="mb-4">
                <label className="form-label">정산주제</label>
                <input type="text" className={`form-control ${styles.modalInput}`} />
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <label className="form-label mb-0">정산할 금액</label>
                  <select className={`form-select form-select-sm ${styles.modalSelect}`}>
                    <option>통화종류</option>
                  </select>
                </div>
                <input type="text" className={`form-control ${styles.modalInput}`} />
              </div>

              <div className="mb-3">
                <label className="form-label">참가멤버</label>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center mb-2">
                    <span className="me-auto" style={{ fontSize: '1.2rem' }}>
                      OOO
                    </span>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-light rounded-circle"
                      style={{
                        width: '25px',
                        height: '25px',
                        padding: '0',
                        lineHeight: '1',
                      }}
                    >
                      ×
                    </button>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <span className="me-auto" style={{ fontSize: '1.2rem' }}>
                      XXX
                    </span>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-light rounded-circle"
                      style={{
                        width: '25px',
                        height: '25px',
                        padding: '0',
                        lineHeight: '1',
                      }}
                    >
                      ×
                    </button>
                  </li>
                </ul>
              </div>

              <button
                type="submit"
                className="btn w-100 mt-3"
                style={{
                  border: '1px solid white',
                  color: 'white',
                  background: 'transparent',
                  padding: '10px',
                  fontSize: '1.2rem',
                }}
              >
                정산등록
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupInsideModal;
