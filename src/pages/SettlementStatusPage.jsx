import React from 'react';
import Template from '../components/StatusTemplate.jsx';
import { useNavigate } from 'react-router-dom';

const SettlementStatusPage = () => {
  const navigate = useNavigate();

  const handleGroupMove = (id) => {
    navigate('/group-inside');
  };
  return (
    <Template
      title="<송금현황>"
      sectionOne="미완료 송금"
      oneData={{
        date: '5/24',
        groupName: 'A그룹',
        amount: '10,000원',
        commonBtn: '그룹이동',
      }}
      sectionTwo="완료된 송금"
      twoData={{
        date: '5/25',
        groupName: 'B그룹',
        amount: '20,000원',
        statusText: '총무닉네임',
      }}
      onBtnClick={handleGroupMove}
    />
  );
};

export default SettlementStatusPage;
