import React, { useState } from 'react';
import Template from '@/components/StatusTemplate/StatusTemplate.jsx';
import PaidStatusModal from './Modal/PaidStatusModal.jsx';
import { useModal } from '@/hooks/useModal.js';

// <ModalButton>정산현황</ModalButton>
const PaidStatusPage = () => {
  const { modalClose } = useModal();

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
        <PaidStatusModal modalData={showModalData} onClose={() => modalClose} />
      )}
    </>
  );
};
export default PaidStatusPage;
