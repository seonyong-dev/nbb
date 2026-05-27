import React from 'react';
import styles from './GroupInside.module.css';

const GroupInside = () => {
    return (
        <>
            <div className="col-md-7 py-5">
                <h3 className="text-center">〈그룹 내 화면〉</h3>
                <div className={styles.scrollArea}>
                    <div className={styles.settlementCard}>
                        <div className="mb-3" style={{fontSize: '1.4rem'}}>5/26 번개모임</div>
                        <div className="mb-1">정산할 총 금액</div>
                        <div className="mb-3" style={{fontSize: '1.5rem', fontWeight: 'bold'}}>100,000원</div>
                        <button className={styles.kakaoPayBtn}>카카오페이</button>
                    </div>
                </div>
                <button className={styles.btnRegFloat} data-bs-toggle="modal" data-bs-target="#regSettlementModal">정산등록</button>
            </div>
            <div className={`col-md-3 ${styles.memberSidebar}`}>
                <div className={styles.memberTitle}>멤버현황</div>
                <ul className="list-unstyled">
                    <li>OOO 〈방장〉</li>
                    <li>△△△</li>
                </ul>
            </div>

            {/* 정산등록 모달 */}
            <div className="modal fade" id="regSettlementModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content modal-content-custom p-4">
                        <div className="modal-header border-0">
                            <h5 className="modal-title w-100 text-center">〈정산등록〉</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-4">
                                    <label className="form-label">정산주제</label>
                                    <input type="text" className="form-control bg-transparent text-white border-white rounded-0" />
                                </div>
                                <button type="submit" className="btn btn-outline-light w-100">정산등록</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default GroupInside;