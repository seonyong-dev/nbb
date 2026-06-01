import React from 'react';
import { useAuth } from '@/hooks/useAuth.js';
import styles from './Login.module.css';

const Login = () => {
  const {
    id,
    password,
    idFocusRef,
    passwordFocusRef,
    idError,
    passwordError,
    checkLogin,
    idErrorHidden,
    passwordErrorHidden,
  } = useAuth();

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className={styles.loginContainer}>
        <div className={styles.logo}>NBB</div>
        <form onSubmit={checkLogin}>
          <div className="mb-3 text-start">
            <label htmlFor="id" className="form-label">
              아이디
            </label>
            <input
              type="text"
              ref={idFocusRef}
              id="id"
              className={`form-control ${styles.formControl}`}
              onChange={idErrorHidden}
              value={id}
              autoFocus
              autoComplete="off"
            />
            {idError && <div className="text-danger small mt-1">{idError}</div>}
          </div>
          <div className="mb-4 text-start">
            <label htmlFor="password" className="form-label">
              비밀번호
            </label>
            <input
              type="password"
              ref={passwordFocusRef}
              id="password"
              className={`form-control ${styles.formControl}`}
              onChange={passwordErrorHidden}
              value={password}
            />
            {passwordError && (
              <div className="text-danger small mt-1">{passwordError}</div>
            )}
          </div>
          <button type="submit" className={styles.btnLogin}>
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
