import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function useAuth() {
  const idFocusRef = useRef(null);
  const passwordFocusRef = useRef(null);

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const [idError, setIdError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  // 아이디, 비밀번호 비어있는지 확인
  const checkLogin = () => {
    setIdError('');
    setPasswordError('');

    if (id.trim() === '') {
      setIdError('아이디를 입력해주세요.');
      idFocusRef.current.focus();
      return;
    }

    if (password.trim() === '') {
      setPasswordError('비밀번호를 입력해주세요.');
      passwordFocusRef.current.focus();
      return;
    }

    return true;
  };

  // 로그인 백엔드 통신
  const login = async () => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          loginId: id,
          password: password,
        }),
        // 브라우저가 쿠키(세션ID)를 서버에 보내고 저장
        credentials: 'include',
      });

      if (response.ok) {
        navigate('/group-list');
      } else {
        idFocusRef.current.focus();
        alert('아이디 및 비밀번호를 확인해주세요.');
        return;
      }
    } catch (error) {
      console.error('네트워크 에러:', error);
      setIdError('서버와 연결할 수 없습니다.');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const isValid = checkLogin();
    if (isValid) await login();
  };

  const idErrorHidden = (e) => {
    setId(e.target.value);
    if (e.target.value.trim() !== '') setIdError('');
  };

  const passwordErrorHidden = (e) => {
    setPassword(e.target.value);
    if (e.target.value.trim() !== '') setPasswordError('');
  };

  return {
    id,
    password,
    idFocusRef,
    passwordFocusRef,
    idError,
    passwordError,
    idErrorHidden,
    passwordErrorHidden,
    handleLogin,
  };
}
