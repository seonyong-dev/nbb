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
  const checkLogin = (e) => {
    e.preventDefault();

    setIdError('');
    setPasswordError('');

    /* 최종 때 살릴 것
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
    */

    // 백엔드 로그인 구현

    navigate('/group-list');
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
    checkLogin,
    idErrorHidden,
    passwordErrorHidden,
  };
}
