import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from '@/components/Sidebar/Sidebar.jsx';
import Login from '@/pages/Login/Login.jsx';
import GroupList from '@/pages/GroupList/GroupList.jsx';
import Paid from '@/pages/StatusPage/Paid/PaidStatusPage.jsx';
import Settlement from '@/pages/StatusPage/SettlementStatusPage.jsx';
import GroupInside from '@/pages/GroupInside/GroupInside.jsx';
import './App.css';

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
        {/* 사이드바가 없는 독립적인 페이지*/}
        <Route path="/" element={<Login />} />

        {/* 사이드바를 공유하는 페이지 */}
        <Route element={<SidebarLayout />}>
          <Route path="/group-list" element={<GroupList />} />
          <Route path="/paid" element={<Paid />} />
          <Route path="/settlement" element={<Settlement />} />
          <Route path="/group-inside" element={<GroupInside />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
