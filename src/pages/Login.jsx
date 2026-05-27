import React, { useRef, useState, useEffect } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const idFocusRef = useRef(null);
  const passwordFocusRef = useRef(null);

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const [idError, setIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // 아이디, 비밀번호 비어있는지 확인
  const checkLogin = (e) => {
    e.preventDefault();

    setIdError("");
    setPasswordError("");

    if (id.trim() === "") {
      setIdError("아이디를 입력해주세요.");
      idFocusRef.current.focus();
      return;
    }

    if (password.trim() === "") {
      setPasswordError("비밀번호를 입력해주세요.");
      passwordFocusRef.current.focus();
      return;
    }
  };

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
              onChange={(e) => {
                setId(e.target.value);
                if (e.target.value.trim() !== "") setIdError("");
              }}
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
              onChange={(e) => {
                setPassword(e.target.value);
                if (e.target.value.trim() !== "") setPasswordError("");
              }}
              value={password}
            />
            {passwordError && <div className="text-danger small mt-1">{passwordError}</div>}
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
