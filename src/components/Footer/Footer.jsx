import "./Footer.scss";

import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/Logo.svg";
import { LanguageContext } from "../../context/LanguageContext";
import { fetchCategories } from "../../api/categories";

function Footer() {
  const { t, language } = useContext(LanguageContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories()
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, [language]);

  return (
    <>
      <div className="Footer-wrapper">
        <div className="Footer-inner">
          <div className="Footer-Menus">
            <ul className="Footer-Menu-Page">
              <li className="Footer-Menu-item-title-Page">{t("footer.menu")}</li>
              <div className="Footer-Menu-Group">
                <li className="Footer-Menu-item">
                  <Link to="/LR">{t("footer.personal")}</Link>
                </li>
                <li className="Footer-Menu-item">
                  <Link to="/LR">{t("footer.login_registration")}</Link>
                </li>
                <li className="Footer-Menu-item">
                  <Link to="/Busket">{t("footer.cart")}</Link>
                </li>
                <li className="Footer-Menu-item">
                  <Link to="/favorites">{t("footer.favorites")}</Link>
                </li>
                <li className="Footer-Menu-item">
                  <Link to="/about">{t("footer.about")}</Link>
                </li>
              </div>
            </ul>
            {categories.map((cat) => (
              <ul key={cat.id} className="Footer-Menu">
                <li className="Footer-Menu-item-title">{cat.name}</li>
                {cat.children?.map((child) => (
                  <li key={child.id} className="Footer-Menu-item">
                    {child.name || child.slug}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className="Footer-wrapper-nav">
        <div className="Footer-inner-nav">
          <div className="Footer-nav">
            <div className="Footer-img">
              <img src={Logo} />
            </div>
            <div className="Footer-nav-data">2025</div>
            <div className="Footer-nav-sayt">
              Разработка сайта <span>idarelab.az</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
