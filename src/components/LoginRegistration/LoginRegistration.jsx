import React, { useState, useEffect, useContext } from "react";
import logo from "../../assets/img/Logo.svg";
import "./LoginRegistration.scss";
import { login, register, me } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";

function LoginRegistration() {
  const { t } = useContext(LanguageContext);
  const [isLoginActive, setIsLoginActive] = useState(true);
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
              {t("auth.login_reg.login")}
            </button>
            <button
              className={`LoginRegistration-BtnR ${
                !isLoginActive ? "active" : ""
              }`}
              onClick={() => handleTabSwitch("register")}
            >
              {t("auth.login_reg.registration")}
            </button>
          </div>

          {/* Login Form */}
          {isLoginActive && (
            <div className="LoginRegistration-Login">
              <input
                placeholder={t("auth.login_reg.email")}
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
              <input
                placeholder={t("auth.login_reg.password")}
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              <button className="LoginRegistration-btn" onClick={handleLogin}>
                {t("auth.login_reg.login_button")}
              </button>
              <button className="LoginRegistration-btn2">
                {t("auth.login_reg.forgot_password")}
              </button>
            </div>
          )}

          {/* Registration Form */}
          {!isLoginActive && (
            <div className="LoginRegistration-Registration">
              <input
                placeholder={t("auth.login_reg.username")}
                value={regUsername}
                onChange={(e) => setRegUsername(e.target.value)}
              />
              <input
                placeholder={t("auth.login_reg.email")}
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
              />
              <input
                placeholder={t("auth.login_reg.enter_password")}
                type="password"
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)}
              />
              <input
                placeholder={t("auth.login_reg.repeat_password")}
                type="password"
                value={regRepeat}
                onChange={(e) => setRegRepeat(e.target.value)}
              />
              <button className="LoginRegistration-btn" onClick={handleRegister}>
                {t("auth.login_reg.register_button")}
              </button>
              <button className="LoginRegistration-btn2" onClick={() => handleTabSwitch('login')}>
                {t("auth.login_reg.already_login")}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginRegistration;
