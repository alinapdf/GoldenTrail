import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { logout, me } from "../../api/auth";
import "./PersonalAccount.scss";
import { LanguageContext } from "../../context/LanguageContext";

function PersonalAccount({ setActiveSection, activeSection }) {
  const { t } = useContext(LanguageContext);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const user = await me();
      setAuthenticated(!!user);
    };
    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error(err);
    } finally {
      navigate("/LR");
    }
  };

  return (
    <div className="Busket-container-wrapper">
      <div className="Busket-container-inner">
        <div className="Busket-container">
          <div className="Busket-container-Name">{t("personal.title")}</div>
          {authenticated && (
            <button className="Busket-container-out" onClick={handleLogout}>
              {t("personal.logout")}
            </button>
          )}
        </div>
        <div className="Busket-container-buttons">
          <button
            className={`Busket-container-button ${
              activeSection === "cart" ? "active" : ""
            }`}
            onClick={() => setActiveSection("cart")}
          >
            {t("personal.cart")}
          </button>
          {authenticated && (
            <>
              <button
                className={`Busket-container-button ${
                  activeSection === "favorites" ? "active" : ""
                }`}
                onClick={() => setActiveSection("favorites")}
              >
                {t("personal.favorites")}
              </button>
              <button
                className={`Busket-container-button ${
                  activeSection === "order" ? "active" : ""
                }`}
                onClick={() => setActiveSection("order")}
              >
                {t("personal.orders")}
              </button>
              <button
                className={`Busket-container-button ${
                  activeSection === "personal" ? "active" : ""
                }`}
                onClick={() => setActiveSection("personal")}
              >
                {t("personal.data")}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PersonalAccount;
