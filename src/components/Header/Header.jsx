import { Link } from "react-router-dom";
import { FiSearch, FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import { useState } from "react";
import logo from "../../assets/img/Logo.svg";
import "./Header.scss";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-main">
        <div className="container header-main__wrapper">
          <Link className="header-main__logo" to="/">
            <img src={logo} alt="Golden Trail" />
          </Link>
          <nav className={`header-main__nav ${menuOpen ? "open" : ""}`}> 
            <a href="#" className="header-main__link">
              Продукция
            </a>
            <Link to="/about" className="header-main__link">
              О нас
            </Link>
            <a href="#" className="header-main__link">
              Контакты
            </a>
          </nav>
          <div className="header-main__actions">
            <button className="icon-btn" aria-label="Поиск">
              <FiSearch />
            </button>
            <Link to="/favorites" className="icon-btn" aria-label="Избранное">
              <FiHeart />
            </Link>
            <Link to="/busket" className="icon-btn" aria-label="Корзина">
              <FiShoppingCart />
            </Link>
            <Link to="/LR" className="icon-btn" aria-label="Аккаунт">
              <FiUser />
            </Link>
          </div>
          <div className="header-main__right">
            <div className="header-main__language">
              <button>AZ</button>
              <button>EN</button>
              <button className="active">RU</button>
            </div>
            <button
              className="header-main__burger"
              aria-label="Меню"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
