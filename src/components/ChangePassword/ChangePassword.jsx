import logo from "../../assets/img/Logo.svg";
import { useState, useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import "./ChangePassword.scss";

function ChangePassword() {
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
    <div className="ChangePassword-wrapper">
      <div className="ChangePassword-Container">
        <div className="ChangePassword-Logo">
          <img src={logo} alt="Golden Trail" />
        </div>

        <div className="ChangePassword-Block">
          <h2>{t("auth.change_password.title")}</h2>

          {!isSent ? (
            <div className="ChangePassword-inputs">
              <input
                placeholder={t("auth.change_password.new_password")}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
              <input
                placeholder={t("auth.change_password.confirm_password")}
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
                {loading
                  ? t("auth.change_password.sending")
                  : t("auth.change_password.change")}
              </button>
            </div>
          ) : (
            <div className="ChangePassword-Ok">
              <p>{t("auth.change_password.success")}</p>
              <button className="ChangePassword-btn">
                {t("auth.change_password.to_home")}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
