import React from 'react';
import styles from './Sidebar.module.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className={`col-md-3 col-lg-2 sidebar ${styles.sidebarStyle}`}>
      <div
        className="logo"
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '10px',
          cursor: 'pointer',
        }}
        onClick={() => navigate('/group-list')}
      >
        NBB
      </div>
      <div className={`user-info ${styles.userInfo}`}>OO님</div>
      <div className={`logout-link ${styles.logoutLink}`} onClick={() => navigate('/')}>
        로그아웃
      </div>

      <ul className={`menu-list ${styles.menuList}`}>
        <li className={styles.listItemStyle} onClick={() => navigate('/group-list')}>
          그룹목록
        </li>
        <li className={styles.listItemStyle} onClick={() => navigate('/paid')}>
          송금현황
        </li>
        <li className={styles.listItemStyle} onClick={() => navigate('/settlement')}>
          정산현황
        </li>
        <li
          className={styles.listItemStyle}
          onClick={() => {
            alert('서비스 전입니다.');
          }}
        >
          계좌관리
        </li>
        <li
          className={styles.listItemStyle}
          onClick={() => {
            alert('서비스 전입니다.');
          }}
        >
          계좌거래내역
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
