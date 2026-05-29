import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import GroupList from './pages/GroupList';
import Paid from './pages/PaidStatusPage';
import Settlement from './pages/SettlementStatusPage';
import GroupInside from './pages/GroupInside';

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
          <Route path="/Paid" element={<Paid />} />
          <Route path="/Settlement" element={<Settlement />} />
          <Route path="/group-inside" element={<GroupInside />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
