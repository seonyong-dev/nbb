import React from 'react';
import styles from './GroupInside.module.css';

const GroupInside = () => {
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
              5/26 번개모임
            </div>
            <div className="mb-1">정산할 총 금액</div>
            <div className="mb-3" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
              100,000원
            </div>
            <div className="mb-1">참가멤버</div>
            <div className="mb-3" style={{ fontSize: '1.3rem' }}>
              5명
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
              20,000원
            </div>
            <br />
            <button className={styles.kakaoPayBtn}>카카오페이</button>
          </div>

          {/* 정산 카드 2 */}
          <div className={`${styles.settlementCard} mb-4`}>
            <div className="mb-3" style={{ fontSize: '1.4rem' }}>
              5/26 번개모임
            </div>
            <div className="mb-1">정산할 총 금액</div>
            <div className="mb-3" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
              100,000원
            </div>
            <div className="mb-1">참가멤버</div>
            <div className="mb-3" style={{ fontSize: '1.3rem' }}>
              5명
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
              20,000원
            </div>
            <br />
            <button className={styles.kakaoPayBtn}>카카오페이</button>
          </div>
        </div>
        {/* // 스크롤 영역 끝 */}

        {/* 정산등록 버튼 (모달 연결) */}
        <button
          className={styles.btnRegFloat}
          data-bs-toggle="modal"
          data-bs-target="#regSettlementModal"
        >
          정산등록
        </button>
      </div>

      {/* 오른쪽 멤버 현황 */}
      <div className={`col-md-3 ${styles.memberSidebar} ms-auto`}>
        <div className={styles.memberTitle}>멤버현황</div>
        <ul className={styles.memberList}>
          <li className={styles.memberItem}>OOO 〈방장〉</li>
          <li className={styles.memberItem}>△△△</li>
          <li className={styles.memberItem}>ㅁㅁㅁ</li>
        </ul>
        <div style={{ marginTop: '100px' }}>
          <button className={styles.btnSide}>멤버초대</button>
          <button className={styles.btnSide}>그룹나가기</button>
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
              <h5 className="modal-title w-100 text-center">〈정산등록〉</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
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
                    <select
                      className={`form-select form-select-sm ${styles.modalSelect}`}
                    >
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
    </div>
  );
};

export default GroupInside;
