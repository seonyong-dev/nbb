import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

    // 공통 스타일 정의 (인라인 스타일의 경우 camelCase 필수)
    const sidebarStyle = {
        borderRight: '2px solid #ffffff',
        height: '100vh',
        padding: '30px',
        position: 'sticky',
        top: 0
    };

    const listItemStyle = {
        fontSize: '1.3rem',
        marginBottom: '20px',
        cursor: 'pointer',
        listStyle: 'none'
    };

    return (
        <div className="col-md-3 col-lg-2 sidebar" style={sidebarStyle}>
            <div 
                className="logo" 
                style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px', cursor: 'pointer' }} 
                onClick={() => navigate('/')}
            >
                NBB
            </div>
            <div className="user-info" style={{ fontSize: '1.1rem', marginBottom: '40px' }}>
                OO님 <span className="logout-link" style={{ fontSize: '0.9rem', marginLeft: '10px', cursor: 'pointer' }}>로그아웃</span>
            </div>
            
            <ul className="menu-list" style={{ padding: 0 }}>
                <li style={listItemStyle} onClick={() => navigate('/')}>그룹목록</li>
                <li style={listItemStyle} onClick={() => navigate('/settlement')}>정산현황</li>
                <li style={listItemStyle}>계좌관리</li>
                <li style={listItemStyle}>계좌거래내역</li>
            </ul>
        </div>
    );
};

export default Sidebar;