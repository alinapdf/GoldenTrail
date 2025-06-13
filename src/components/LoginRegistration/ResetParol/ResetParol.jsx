import "./ResetParol.scss";
import { useState } from "react";
import logo from "../../../assets/img/Logo.svg";

function ResetParol() {
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false); 
  const [inputValue, setInputValue] = useState(""); 

  const handleReset = () => {
    if (!inputValue.trim()) return; 

    setLoading(true);
    setTimeout(() => {
      setIsSent(true);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="ResetParol-wrapper">
      <div className="ResetParol-Container">
        <div className="ResetParol-Logo">
          <img src={logo} alt="Golden Trail" />
        </div>

        <div className="ResetParol-Block">
          <h2>Восстановление пароля</h2>

          {!isSent ? (
            <div className="ResetParol-inputs">
              <input
                placeholder="E-mail или телефон"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={loading}
              />
              <button
                className="ResetParol-btn"
                onClick={handleReset}
                disabled={loading}
              >
                {loading ? "Отправка..." : "Восстановить"}
              </button>
            </div>
          ) : (
            <div className="ResetParol-Ok">
              <p>Мы отправили вам письмо-инструкцию на ваш email</p>
              <p>Следуйте им, чтобы восстановить пароль</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResetParol;
