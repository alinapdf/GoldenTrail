import React, { useState, useEffect } from "react";
import logo from "../../assets/img/Logo.svg";
import "./LoginRegistration.scss";
import { login, register, me } from "../../api/auth";
import { useNavigate } from "react-router-dom";

function LoginRegistration() {
  const [isLoginActive, setIsLoginActive] = useState(true); // Track active tab (Login or Registration)
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [regUsername, setRegUsername] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regRepeat, setRegRepeat] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const user = await me();
      if (user) navigate("/Busket");
    };
    checkAuth();
  }, [navigate]);

  const handleTabSwitch = (tab) => {
    setIsLoginActive(tab === "login");
  };

  const handleLogin = async () => {
    try {
      await login({ email: loginEmail, password: loginPassword });
      navigate('/Busket');
    } catch (err) {
      console.error(err);
    }
  };

  const handleRegister = async () => {
    if (regPassword !== regRepeat) return;
    try {
      await register({
        username: regUsername,
        email: regEmail,
        password: regPassword,
      });
      setIsLoginActive(true);
      navigate('/Busket');
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
                placeholder="E-mail"
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
                placeholder="Имя пользователя"
                value={regUsername}
                onChange={(e) => setRegUsername(e.target.value)}
              />
              <input
                placeholder="E-mail"
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
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
