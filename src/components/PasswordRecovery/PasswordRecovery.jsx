import logo from "../../assets/img/Logo.svg";
import { useState, useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import "./PasswordRecovery.scss";

function PasswordRecovery() {
  const { t } = useContext(LanguageContext);
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
          <h2>{t("auth.password_recovery.title")}</h2>

          {!isSent ? (
            <div className="PasswordRecovery-inputs">
              <input
                placeholder={t("auth.password_recovery.new_password")}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
              <input
                placeholder={t("auth.password_recovery.email_or_phone")}
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
                {loading
                  ? t("auth.password_recovery.sending")
                  : t("auth.password_recovery.recover")}
              </button>
            </div>
          ) : (
            <div className="PasswordRecovery-Ok">
              <p>{t("auth.password_recovery.sent1")}</p>
              <p>{t("auth.password_recovery.sent2")}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PasswordRecovery;
