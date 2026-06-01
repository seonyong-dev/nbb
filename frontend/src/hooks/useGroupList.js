import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function useGroupList() {
  const navigate = useNavigate();

  const [list, setList] = useState([]);

  return { navigate, list };
}
