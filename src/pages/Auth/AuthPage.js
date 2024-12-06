import React, { useState, useEffect } from "react";

import LoginForm from "../../components/Login/LoginForm";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import styles from "./AuthPage.module.css";

export const AuthPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLoginSubmit = (data) => {
    console.log("Login Data:", data);
  };

  const handleRegisterSubmit = (data) => {
    console.log("Register Data:", data);
  };

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  useEffect(() => {
    document.body.style.backgroundImage = "none";
    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  return (
    <div className={styles.formContainer}>
      {isRegistering ? (
        <RegisterForm onSubmit={handleRegisterSubmit} toggleForm={toggleForm} />
      ) : (
        <LoginForm onSubmit={handleLoginSubmit} toggleForm={toggleForm} />
      )}
    </div>
  );
};

