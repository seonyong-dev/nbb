import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function useGroupList() {
  const navigate = useNavigate();

  const [groupList, setGroupList] = useState([]);

  const mockData = {
    name: 'nbb의 그룹',
  };

  useEffect(() => {
    setGroupList(mockData);
  }, []);

  const handleGroupList = (newGroup) => {
    setGroupList((prevList) => [...prevList, { name: newGroup }]);
  };

  return { navigate, groupList };
}
