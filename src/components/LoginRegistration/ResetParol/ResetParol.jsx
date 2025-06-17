import "./ResetParol.scss";
import { useState, useContext } from "react";
import { LanguageContext } from "../../../context/LanguageContext";
import logo from "../../../assets/img/Logo.svg";

function ResetParol() {
  const { t } = useContext(LanguageContext);
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
          <h2>{t("auth.password_recovery.title")}</h2>

          {!isSent ? (
            <div className="ResetParol-inputs">
              <input
                placeholder={t("auth.password_recovery.email_or_phone")}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={loading}
              />
              <button
                className="ResetParol-btn"
                onClick={handleReset}
                disabled={loading}
              >
                {loading
                  ? t("auth.password_recovery.sending")
                  : t("auth.password_recovery.recover")}
              </button>
            </div>
          ) : (
            <div className="ResetParol-Ok">
              <p>{t("auth.password_recovery.sent1")}</p>
              <p>{t("auth.password_recovery.sent2")}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResetParol;
