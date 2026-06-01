import React from 'react';
import { useGroupList } from '@/hooks/useGroupList';
import { useModal } from '@/hooks/useModal.js';
import GroupListModal from './Modal/GroupListModal.jsx';
import styles from './GroupList.module.css';

const GroupList = () => {
  const { navigate, list } = useGroupList();

  const { isModalOpen, modalClose, showModal } = useModal();

  return (
    <>
      <div className={`col-md-9 ${styles.mainContent}`} style={{ width: '100%' }}>
        <button className={styles.btnGroupCreate} onClick={() => showModal}>
          그룹생성
        </button>
        <div className="mt-5">
          <div className={styles.sectionTitle}>내가 방장인 그룹</div>
          <ul className="list-unstyled">
            <li className={styles.groupItem} onClick={() => navigate('/group-inside')}>
              {list.name}
            </li>
            <li className={styles.groupItem}>{list.name}</li>
          </ul>
          <div className={styles.paginationCustom}>
            <span>◁</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>▷</span>
          </div>

          <div className={styles.sectionTitle}>참가중인 그룹</div>
          <ul className="list-unstyled">
            <li className={styles.groupItem}>{list.name}</li>
          </ul>
        </div>
      </div>
      {isModalOpen && <GroupListModal modalData={showModal} onClose={() => modalClose} />}
    </>
  );
};
export default GroupList;
