import React, { useState } from "react";
import logo from "../../assets/img/Logo.svg";
import "./LoginRegistration.scss";
import { login, register } from "../../api/auth";

function LoginRegistration() {
  const [isLoginActive, setIsLoginActive] = useState(true); // Track active tab (Login or Registration)
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [regName, setRegName] = useState("");
  const [regPhone, setRegPhone] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regRepeat, setRegRepeat] = useState("");

  const handleTabSwitch = (tab) => {
    setIsLoginActive(tab === "login");
  };

  const handleLogin = async () => {
    try {
      await login({ email: loginEmail, password: loginPassword });
    } catch (err) {
      console.error(err);
    }
  };

  const handleRegister = async () => {
    if (regPassword !== regRepeat) return;
    try {
      await register({
        name: regName,
        phone: regPhone,
        password: regPassword,
      });
      setIsLoginActive(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="LoginRegistration-wrapper">
      <div className="LoginRegistration-Container">
        <div className="LoginRegistration-Logo">
          <img src={logo} alt="Golden Trail" />
        </div>

        <div className="LoginRegistration-Block">
          <div className="LoginRegistration-Buttons">
            <button
              className={`LoginRegistration-BtnL ${
                isLoginActive ? "active" : ""
              }`}
              onClick={() => handleTabSwitch("login")}
            >
              Вход
            </button>
            <button
              className={`LoginRegistration-BtnR ${
                !isLoginActive ? "active" : ""
              }`}
              onClick={() => handleTabSwitch("register")}
            >
              Регистрация
            </button>
          </div>

          {/* Login Form */}
          {isLoginActive && (
            <div className="LoginRegistration-Login">
              <input
                placeholder="E-mail или телефон"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
              <input
                placeholder="Пароль"
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              <button className="LoginRegistration-btn" onClick={handleLogin}>
                Войти
              </button>
              <button className="LoginRegistration-btn2">Забыли пароль?</button>
            </div>
          )}

          {/* Registration Form */}
          {!isLoginActive && (
            <div className="LoginRegistration-Registration">
              <input
                placeholder="Имя*"
                value={regName}
                onChange={(e) => setRegName(e.target.value)}
              />
              <input
                placeholder="+994-__-___-__-__"
                value={regPhone}
                onChange={(e) => setRegPhone(e.target.value)}
              />
              <input
                placeholder="Введите пароль"
                type="password"
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)}
              />
              <input
                placeholder="Повторите пароль"
                type="password"
                value={regRepeat}
                onChange={(e) => setRegRepeat(e.target.value)}
              />
              <button className="LoginRegistration-btn" onClick={handleRegister}>
                Зарегистрироваться
              </button>
              <button className="LoginRegistration-btn2" onClick={() => handleTabSwitch('login')}>
                Уже есть аккаунт? Войти
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginRegistration;
