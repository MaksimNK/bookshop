import React, { useState, useEffect } from "react";
import styles from "./LoginForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/auth/authslice";
import { useNavigate } from "react-router-dom";

export const LoginForm = ({ onSubmit, toggleForm }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { status, user } = useSelector((state) => state.auth);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
  useEffect(() => {
    if(status === 'succeeded') {
      navigate('/');
    }
  }, [status, user]);

  return (
    <form onSubmit={handleLoginSubmit} className={styles.login}>
      <h2 className={styles.title}>Вход</h2>

      <div className={styles.inputGroupContainer}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
          required
          className={styles.input}
        />
      </div>

      <div className={styles.inputGroup}>
        <p>Забыли пароль?</p>
      </div>

      <button type="submit" className={styles.button}>
        Войти
      </button>

      <div className={styles.inputGroup}>
        <p onClick={toggleForm} className={styles.toggleLink}>
          Зарегистрироваться
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
