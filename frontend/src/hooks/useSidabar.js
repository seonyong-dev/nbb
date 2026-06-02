import { useNavigate } from 'react-router-dom';

export function useSidebar() {
  const navigate = useNavigate();
  return { navigate };
}
