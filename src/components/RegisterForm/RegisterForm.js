import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./RegisterForm.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { register } from "../../features/auth/authslice";

export const RegisterForm = ({toggleForm}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { status, user, error} = useSelector((state) => state.auth);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name: firstName, surname: lastName, email, password }));
    
  };

  useEffect(() => {
    document.body.style.backgroundImage = "none";

    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  useEffect(()=> {
    if(status === 'succeeded') {
      navigate('/profile');
    }
  }, [status])

  return (
    <div className={styles.register}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Регистрация</h2>

        <div className={styles.inputGroupContainer}>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Имя"
            required
            className={styles.input}
          />
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Фамилия"
            required
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroupContainer}>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroupContainer}>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль"
            required
            className={styles.input}
          />
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Повторите пароль"
            required
            className={styles.input}
          />
        </div>


        {status === "failed" && error && (
        <p className={styles.errorMessage}>{error}</p>
      )}


        <button type="submit" className={styles.button}>
          Зарегистрироваться
        </button>

      <div className={styles.inputGroup}>
        <p onClick={toggleForm} className={styles.toggleLink}>
          Уже есть аккаунт? Войти
        </p>
      </div>
      
        <div className={styles.socialLogin}>
          <button type="button" className={styles.socialButton}>
            Google
          </button>
          <button type="button" className={styles.socialButton}>
            Facebook
          </button>
        </div>
      </form>
    </div>
  );
};
