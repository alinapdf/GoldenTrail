import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import logo from "../../assets/img/Logo.svg";
import { LanguageContext } from "../../context/LanguageContext";
import "./Header.scss";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, t } = useContext(LanguageContext);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSearchOpenProducts, setIsSearchOpenProducts] = useState(false);

  return (
    <header className="header">
      <div className="header-main">
        <div className="container header-main__wrapper">
          <Link className="header-main__logo" to="/">
            <img src={logo} alt="Golden Trail" />
          </Link>
          <nav className={`header-main__nav ${menuOpen ? "open" : ""}`}>
            <button
              className="header-main__link"
              onClick={() => setIsSearchOpenProducts(!isSearchOpenProducts)}
            >
              {t("header.products")}
            </button>

            <Link to="/about" className="header-main__link">
              {t("header.about")}
            </Link>
            <a href="#" className="header-main__link">
              {t("header.contacts")}
            </a>
          </nav>
          <div className="header-main__actions">
            <button
              className="icon-btn"
              aria-label={t("header.search")}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <FiSearch />
            </button>

            <Link
              to="/favorites"
              className="icon-btn"
              aria-label={t("header.favorites")}
            >
              <FiHeart />
            </Link>
            <Link
              to="/busket"
              className="icon-btn"
              aria-label={t("header.cart")}
            >
              <FiShoppingCart />
            </Link>
            <Link
              to="/LR"
              className="icon-btn"
              aria-label={t("header.account")}
            >
              <FiUser />
            </Link>
          </div>
          <div className="header-main__right">
            <div className="header-main__language">
              <button
                onClick={() => setLanguage("az")}
                className={language === "az" ? "active" : ""}
              >
                AZ
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={language === "en" ? "active" : ""}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("ru")}
                className={language === "ru" ? "active" : ""}
              >
                RU
              </button>
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

      {isSearchOpen && (
        <div className="search">
          <div className="searchContainer container">
            <div className="searchBox">
              <input type="text" placeholder="Поиск" className="searchInput" />
              <button
                className="searchClose"
                onClick={() => setIsSearchOpen(false)}
                aria-label="Закрыть"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}

      {isSearchOpenProducts && (
        <div className="productsDropdown-wrapper">
          <div className="productsDropdown ">
            <div className="productsDropdown-block">
              <div className="productsDropdownInner ">
                <div className="h2-title">
                  <div className="title">Рентгенозащитная продукция</div>
                  <div className="title">Одноразовая продукция</div>
                </div>
                <ul className="productsDropdownInner-menu">
                  <li className="productsDropdownInner-menu-item">Фартуки</li>
                  <li className="productsDropdownInner-menu-item">
                    Юбки и жилеты
                  </li>
                  <li className="productsDropdownInner-menu-item">
                    Защитные халаты
                  </li>
                  <li className="productsDropdownInner-menu-item">
                    Комбинированные костюмы
                  </li>
                  <li className="productsDropdownInner-menu-item">
                    Брюшные и тазовые экраны
                  </li>
                </ul>
                <ul className="productsDropdownInner-menu">
                  <li className="productsDropdownInner-menu-item">
                    Одеяла с защитой
                  </li>
                  <li className="productsDropdownInner-menu-item">
                    Колпаки и шапки
                  </li>
                  <li className="productsDropdownInner-menu-item">
                    Рентгенозащитные перчатки
                  </li>
                  <li className="productsDropdownInner-menu-item">
                    Защитные очки
                  </li>
                </ul>
                <button
                  className="searchClose"
                  onClick={() => setIsSearchOpenProducts(false)}
                  aria-label="Закрыть"
                >
                  ×
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
