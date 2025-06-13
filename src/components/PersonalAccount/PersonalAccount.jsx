import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout, me } from "../../api/auth";
import "./PersonalAccount.scss";

function PersonalAccount({ setActiveSection, activeSection }) {
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
          <div className="Busket-container-Name">Личный кабинет</div>
          {authenticated && (
            <button className="Busket-container-out" onClick={handleLogout}>
              Выйти
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
            Корзина
          </button>
          <button
            className={`Busket-container-button ${
              activeSection === "favorites" ? "active" : ""
            }`}
            onClick={() => setActiveSection("favorites")}
          >
            Избранное
          </button>
          <button
            className={`Busket-container-button
           ${activeSection === "order" ? "active" : ""}`}
            onClick={() => setActiveSection("order")}
          >
            Мои заказы
          </button>
          <button
            className={`Busket-container-button
           ${activeSection === "personal" ? "active" : ""}`}
            onClick={() => setActiveSection("personal")}
          >
            Персональные данные
          </button>
        </div>
      </div>
    </div>
  );
}

export default PersonalAccount;
