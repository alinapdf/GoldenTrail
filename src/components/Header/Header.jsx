import { Link } from "react-router-dom";
import { FiSearch, FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import { useState, useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import logo from "../../assets/img/Logo.svg";
import "./Header.scss";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, t } = useContext(LanguageContext);

  return (
    <header className="header">
      <div className="header-main">
        <div className="container header-main__wrapper">
          <Link className="header-main__logo" to="/">
            <img src={logo} alt="Golden Trail" />
          </Link>
          <nav className={`header-main__nav ${menuOpen ? "open" : ""}`}>
            <a href="#" className="header-main__link">
              {t("header.products")}
            </a>
            <Link to="/about" className="header-main__link">
              {t("header.about")}
            </Link>
            <a href="#" className="header-main__link">
              {t("header.contacts")}
            </a>
          </nav>
          <div className="header-main__actions">
            <button className="icon-btn" aria-label={t("header.search")}>
              <FiSearch />
            </button>
            <Link to="/favorites" className="icon-btn" aria-label={t("header.favorites")}> 
              <FiHeart />
            </Link>
            <Link to="/busket" className="icon-btn" aria-label={t("header.cart")}> 
              <FiShoppingCart />
            </Link>
            <Link to="/LR" className="icon-btn" aria-label={t("header.account")}> 
              <FiUser />
            </Link>
          </div>
          <div className="header-main__right">
            <div className="header-main__language">
              <button onClick={() => setLanguage("az")} className={language === "az" ? "active" : ""}>AZ</button>
              <button onClick={() => setLanguage("en")} className={language === "en" ? "active" : ""}>EN</button>
              <button onClick={() => setLanguage("ru")} className={language === "ru" ? "active" : ""}>RU</button>
            </div>
            <button
              className="header-main__burger"
              aria-label={t("header.menu")}
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
