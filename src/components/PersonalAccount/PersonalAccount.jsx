import "./PersonalAccount.scss";

function PersonalAccount({ setActiveSection, activeSection }) {
  return (
    <div className="Busket-container-wrapper">
      <div className="Busket-container-inner">
        <div className="Busket-container">
          <div className="Busket-container-Name">Личный кабинет</div>
          <button className="Busket-container-out">Выйти</button>
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
          <button className="Busket-container-button">Мои заказы</button>
          <button className="Busket-container-button">
            Персональные данные
          </button>
        </div>
      </div>
    </div>
  );
}

export default PersonalAccount;
