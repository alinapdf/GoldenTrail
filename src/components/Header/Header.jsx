import { Link } from "react-router-dom";
import logo from "../../assets/img/Logo.svg";
import cart from "../../assets/img/cart.svg";
import './style.css';

function Header() {
  return (
      <header>
        <div className="headerWrapper">
          <div className="headerMain">
            <div className="container">
              <div className="headerMain_wrapper">
                <Link to={"/"}>
                  <img src={logo} alt="Golden Trail" className="logo" />
                </Link>
                <nav className="headerMain_nav">
                  <button className="headerMain_nav-item" id="headerMainProduction">
                    <a href="#">Продукция</a>
                  </button>
                  <Link to={"/about"} className="headerMain_nav-item">О нас</Link>
                  <a href="#" className="headerMain_nav-item">Контакты</a>
                </nav>
                <div className="headerMain_btns">
                  <button className="headerMain_btns-btn search" id="headerMain-search"></button>
                  <a href="#" className="headerMain_btns-btn fav"></a>
                  <Link to={"/busket"} className="headerMain_btns-btn cart">
                    <img src={cart} alt="Cart" />
                  </Link>
                  <a href="#" className="headerMain_btns-btn user"></a>
                </div>
                <div className="headerMain_right">
                  <div className="headerMain_language">
                    <button className="headerMain_language-item" id="AZ-lang">AZ</button>
                    <button className="headerMain_language-item" id="EN-lang">EN</button>
                    <button className="headerMain_language-item active" id="RU-lang">RU</button>
                  </div>
                  <button className="headerMain_burger">
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="headerProduction"></div>
          <div className="headerSearch"></div>
          <div className="headerMobile"></div>
          <div className="headerBottomLinks"></div>
        </div>
      </header>
  );
}

export default Header;
