import React, { useState } from "react";
import logo from "../../assets/img/Logo.svg";
import "./LoginRegistration.scss";

function LoginRegistration() {
  const [isLoginActive, setIsLoginActive] = useState(true); // Track active tab (Login or Registration)

  const handleTabSwitch = (tab) => {
    setIsLoginActive(tab === "login");
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
              <input placeholder="E-mail или телефон" />
              <input placeholder="Пароль" />
              <button className="LoginRegistration-btn">Войти</button>
              <button className="LoginRegistration-btn2">Забыли пароль?</button>
            </div>
          )}

          {/* Registration Form */}
          {!isLoginActive && (
            <div className="LoginRegistration-Registration">
              <input placeholder="E-mail*" type="email" />
              <input placeholder="+994-__-___-__-__" />
              <input placeholder="Введите пароль" />
              <input placeholder="Повторите пароль" />
              <button className="LoginRegistration-btn">
                Зарегистрироваться
              </button>
              <button className="LoginRegistration-btn2">
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
