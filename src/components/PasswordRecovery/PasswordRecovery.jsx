import logo from "../../assets/img/Logo.svg";
import { useState } from "react";
import "./PasswordRecovery.scss";

function PasswordRecovery() {
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");

  const handleReset = () => {
    if (!password.trim() || !contact.trim()) return;

    setLoading(true);
    setTimeout(() => {
      setIsSent(true);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="PasswordRecovery-wrapper">
      <div className="PasswordRecovery-Container">
        <div className="PasswordRecovery-Logo">
          <img src={logo} alt="Golden Trail" />
        </div>

        <div className="PasswordRecovery-Block">
          <h2>Восстановление пароля</h2>

          {!isSent ? (
            <div className="PasswordRecovery-inputs">
              <input
                placeholder="Новый пароль"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
              <input
                placeholder="E-mail или телефон"
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                disabled={loading}
              />
              <button
                className="PasswordRecovery-btn"
                onClick={handleReset}
                disabled={loading}
              >
                {loading ? "Отправка..." : "Восстановить"}
              </button>
            </div>
          ) : (
            <div className="PasswordRecovery-Ok">
              <p>Мы отправили вам письмо-инструкцию на ваш email</p>
              <p>Следуйте им, чтобы восстановить пароль</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PasswordRecovery;
