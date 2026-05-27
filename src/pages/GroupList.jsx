import React from 'react';
import styles from './GroupList.module.css';
import { useNavigate } from 'react-router-dom';

const GroupList = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className={`col-md-9 ${styles.mainContent}`}>
                <button className={styles.btnGroupCreate} data-bs-toggle="modal" data-bs-target="#createGroupModal">그룹생성</button>
                <div className="mt-5">
                    <div className={styles.sectionTitle}>내가 방장인 그룹</div>
                    <ul className="list-unstyled">
                        <li className={styles.groupItem} onClick={() => navigate('/group')}>OO의 그룹</li>
                        <li className={styles.groupItem}>OO의 그룹(1)</li>
                    </ul>
                    <div className={styles.paginationCustom}>
                        <span>◁</span><span>1</span><span>2</span><span>3</span><span>▷</span>
                    </div>

                    <div className={styles.sectionTitle}>참가중인 그룹</div>
                    <ul className="list-unstyled">
                        <li className={styles.groupItem}>ㅁㅁ의 그룹</li>
                    </ul>
                </div>
            </div>

            {/* 그룹생성 모달 */}
            <div className="modal fade" id="createGroupModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-3 modal-content-custom">
                        <div className="modal-header border-0">
                            <h5 className="modal-title">〈그룹생성〉</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-4">
                                    <label className="form-label">그룹명</label>
                                    <input type="text" className="form-control bg-transparent text-white border-white" />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">초대할 멤버</label>
                                    <div className={styles.searchContainer}>
                                        <input type="text" className="form-control bg-transparent text-white border-white" placeholder="아이디를 입력하세요" />
                                        <span className={styles.searchIcon}>🔍</span>
                                    </div>
                                </div>
                                <ul className="list-unstyled py-2">
                                    <li>Id 1</li><li>Id 2</li>
                                </ul>
                                <button type="submit" className={styles.btnCreateSubmit}>생성하기</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default GroupList;