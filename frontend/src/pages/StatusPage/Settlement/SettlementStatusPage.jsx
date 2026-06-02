import React from 'react';
import Template from '@/components/StatusTemplate/StatusTemplate.jsx';
import { useSettlement } from '@/hooks/useSettlement.js';
import { useModal } from '@/hooks/useModal.js';
import SettlementStatusModal from './Modal/SettlementStatusModal.jsx';

const SettlementStatusPage = () => {
  const { titles, noSettlement, endSettlement } = useSettlement();
  const { isModalOpen, modalClose, modalData, showModal } = useModal();
  return (
    <>
      <Template
        titles={titles}
        incomplete={noSettlement}
        completed={endSettlement}
        onBtnClick={showModal}
      />
      {isModalOpen && (
        <SettlementStatusModal modalData={modalData} onClose={modalClose} />
      )}
    </>
  );
};

export default SettlementStatusPage;
