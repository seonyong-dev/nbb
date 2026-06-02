import { useEffect, useState } from 'react';

export function useGroupInside() {
  // 정산 내역 상태 저장
  const [receiptList, setReceiptList] = useState([]);
  // 멤버 현황 상태 저장
  const [memberList, setMemberList] = useState([]);

  const receiptMockData = {
    title: '6/1 번개모임',
    expense: '100,000원',
    join: '5명',
    amount: '20,000원',
  };

  const memberMockData = {
    name: 'ㅇㅇㅇ',
  };

  useEffect(() => {
    (setReceiptList(receiptMockData), []);
    (setMemberList(memberMockData), []);
  });

  return { receiptList, memberList };
}
