import logo from "../../assets/img/Logo.svg";
import { useState } from "react";
import "./ChangePassword.scss";

function ChangePassword() {
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
    <div className="ChangePassword-wrapper">
      <div className="ChangePassword-Container">
        <div className="ChangePassword-Logo">
          <img src={logo} alt="Golden Trail" />
        </div>

        <div className="ChangePassword-Block">
          <h2>Изменение пароля</h2>

          {!isSent ? (
            <div className="ChangePassword-inputs">
              <input
                placeholder="Новый пароль"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
              <input
                placeholder="Подтвердите пароль"
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                disabled={loading}
              />
              <button
                className="ChangePassword-btn"
                onClick={handleReset}
                disabled={loading}
              >
                {loading ? "Отправка..." : "Изменить"}
              </button>
            </div>
          ) : (
            <div className="ChangePassword-Ok">
              <p>Ваш пароль успешно изменен!</p>
              <button className="ChangePassword-btn">На главную</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
