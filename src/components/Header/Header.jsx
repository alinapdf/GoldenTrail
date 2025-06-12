import { Link } from "react-router-dom";
import logo from "../../assets/img/Logo.svg";

import cart from "../../assets/img/cart.svg";

function Header() {
  return (
    <header>
      <div className="headerWrapper">
        <div className="headerMain">
          <div className="container">
            <div className="headerMain_wrapper">
              <Link to={"/"}>
                <img src={logo} alt="Golden Trail" />
              </Link>
              <nav className="headerMan_nav">
                <button
                  className="headerMan_nav-item"
                  id="headerMainProduction"
                >
                  <a href="#">Продукция</a>
                </button>
                <Link to={"/about"}>О нас</Link>

                <a href="#" className="headerMan_nav-item">
                  Контакты
                </a>
              </nav>
              <div className="headerMan_btns">
                <button
                  className="headerMan_btns-btn search"
                  id="headerMain-search"
                ></button>
                <a href="#" className="headerMan_btns-btn fav"></a>
                <Link to={"/busket"}>
                  <img src={cart} />
                </Link>
                <Link to={"/LR"}>x</Link>
              </div>
              <div className="headerMan_right">
                <div className="headerMan_language">
                  <button className="headerMan_language-item" id="AZ-lang">
                    AZ
                  </button>
                  <button className="headerMan_language-item" id="EM-lang">
                    EN
                  </button>
                  <button
                    className="headerMan_language-item active"
                    id="RU-lang"
                  >
                    RU
                  </button>
                </div>
                <button className="headerMan_burger">
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
