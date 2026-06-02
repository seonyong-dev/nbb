import React from 'react';
import Template from '@/components/StatusTemplate/StatusTemplate.jsx';
import { usePaid } from '@/hooks/usePaid.js';

const PaidStatusPage = () => {
  const { titles, noPaid, endPaid, handleGroupMove } = usePaid();

  return (
    <Template
      titles={titles}
      incomplete={noPaid}
      completed={endPaid}
      onBtnClick={handleGroupMove}
    />
  );
};
export default PaidStatusPage;
