import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function usePaid() {
  const navigate = useNavigate();

  const [noPaid, setNoPaid] = useState([]);
  const [endPaid, setEndPaid] = useState([]);

  const titles = {
    title: '<송금 현황>',
    topTitle: '미완료 송금',
    bottomTitle: '완료된 송금',
  };

  const noMockData = [
    {
      id: 1,
      date: '5/24',
      groupName: 'A그룹',
      amount: '10,000원',
      commonBtn: '그룹 이동',
    },
  ];
  const endMockData = [
    {
      id: 2,
      date: '5/25',
      groupName: 'B그룹',
      amount: '20,000원',
      statusText: '총무닉네임',
    },
  ];

  useEffect(() => {
    setNoPaid(noMockData);
    setEndPaid(endMockData);
  }, []);

  const handleGroupMove = () => {
    navigate('/group-inside');
  };
  return { titles, noPaid, endPaid, handleGroupMove };
}
