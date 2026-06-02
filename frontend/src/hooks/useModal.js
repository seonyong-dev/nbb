import { useState } from 'react';

export function useModal() {
  // 모달 열렸는지 저장하는 상태
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 현재 모달에 띄울 데이터를 저장하는 상태
  const [modalData, setModalData] = useState(null);

  const loadModalData = () => ({
    date: '5/29',
    groupName: 'temp',
    amount: '20,000원',
    statusText: '정산완료',
  });

  const showModal = () => {
    setModalData(loadModalData);
    setIsModalOpen(true);
  };

  function modalClose() {
    setIsModalOpen(false);
  }

  return { isModalOpen, modalClose, modalData, showModal };
}
