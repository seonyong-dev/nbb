import { useEffect, useState } from 'react';

export function useSettlement() {
  const [noSettlement, setNoSettlement] = useState([]);
  const [endSettlement, setEndSettlement] = useState([]);

  const titles = {
    title: '<정산 현황>',
    topTitle: '미완료 정산',
    bottomTitle: '완료된 정산',
  };

  const noMockData = [
    {
      id: 1,
      date: '5/24',
      groupName: 'A그룹',
      amount: '10,000원',
      commonBtn: '정산 현황',
    },
  ];
  const endMockData = [
    {
      id: 2,
      date: '5/25',
      groupName: 'B그룹',
      amount: '20,000원',
      commonBtn: '정산 완료',
    },
  ];

  useEffect(() => {
    setNoSettlement(noMockData);
    setEndSettlement(endMockData);
  }, []);

  return { titles, noSettlement, endSettlement };
}
