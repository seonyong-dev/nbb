import React, { useState } from 'react';
import Template from '../components/StatusTemplate.jsx';
import PaidStatusModal from './PaidStatusModal.jsx';

// <ModalButton>정산현황</ModalButton>
const PaidStatusPage = () => {
  // 현재 모달에 띄울 데이터를 저장하는 상태(State)
  const [showModalData, setShowModalData] = useState(null);

  // 모달이 열려있는지 닫혀있는지 관리하는 상태
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 리스트에서 특정 항목의 [이동] 버튼을 눌렀을 때 실행될 함수
  const handleOpenModal = (id) => {
    const modalData = {
      date: '5/29',
      groupName: 'temp',
      amount: '20,000원',
      statusText: '정산완료',
    };
    setShowModalData(modalData);
    setIsModalOpen(true);
  };

  return (
    <>
      <Template
        title="<정산현황>"
        sectionOne="미완료 정산"
        oneData={{
          date: '5/24',
          groupName: 'A그룹',
          amount: '20,000/100,000원',
          commonBtn: '정산현황',
        }}
        sectionTwo="완료된 정산"
        twoData={{
          date: '5/25',
          groupName: 'B그룹',
          amount: '100,000원',
          commonBtn: '정산완료',
        }}
        onBtnClick={handleOpenModal}
      />
      {isModalOpen && (
        <PaidStatusModal
          modalData={showModalData}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};
export default PaidStatusPage;
