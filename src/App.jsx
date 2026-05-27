import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import GroupList from './pages/GroupList';
import SettlementStatusPage from './pages/SettlementStatusPage'; // components폴더에서 template 가져오는걸로 수정해야함!!
import GroupInside from './pages/GroupInside';

// 1. 레이아웃 컴포넌트: 사이드바가 들어갈 틀만 정의합니다. (useLocation 삭제)
const SidebarLayout = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-md-9 col-lg-10">
          {/* 하위 Route들이 보여질 자리를 Outlet으로 지정합니다 */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* 2. 사이드바가 없는 독립적인 페이지 (예: 로그인) */}
        <Route path="/" element={<Login />} />

        {/* 3. 사이드바를 공유하는 페이지들을 그룹으로 묶음 */}
        <Route element={<SidebarLayout />}>
          <Route path="/group-list" element={<GroupList />} />
          <Route path="/SettlementStatusPage" element={<SettlementStatusPage />} /> {/* StatusTemplate 으로 수정해야함 */}
          <Route path="/group-inside" element={<GroupInside />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;