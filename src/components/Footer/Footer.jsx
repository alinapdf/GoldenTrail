import "./Footer.scss";

import Logo from "../../assets/img/Logo.svg";

function Footer() {
  return (
    <>
      {" "}
      <div className="Footer-wrapper">
        <div className="Footer-inner">
          <div className="Footer-Menus">
            <ul className="Footer-Menu-Page">
              <li className="Footer-Menu-item-title-Page">Меню</li>
              <div className="Footer-Menu-Group">
                <li className="Footer-Menu-item">Личный кабинет</li>
                <li className="Footer-Menu-item">Вход/Регистрация</li>
                <li className="Footer-Menu-item">Корзина</li>
                <li className="Footer-Menu-item">Избранное</li>
                <li className="Footer-Menu-item">О нас</li>
              </div>
            </ul>
            <ul className="Footer-Menu">
              <li className="Footer-Menu-item-title">
                Рентгенозащитная продукция
              </li>
              <li className="Footer-Menu-item">Фартуки</li>
              <li className="Footer-Menu-item">Юбки и жилеты</li>
              <li className="Footer-Menu-item">Защитные халаты</li>
              <li className="Footer-Menu-item">Комбинированные костюмы</li>
              <li className="Footer-Menu-item">Брюшные и тазовые экраны</li>
              <li className="Footer-Menu-item">Одеяла с защитой</li>
              <li className="Footer-Menu-item">Колпаки и шапки</li>
              <li className="Footer-Menu-item">Рентгенозащитные перчатки</li>
              <li className="Footer-Menu-item">Защитные очки</li>
            </ul>
            <ul className="Footer-Menu">
              <li className="Footer-Menu-item-title">Одноразовая продукция</li>
              <li className="Footer-Menu-item">Защитные очки</li>
              <li className="Footer-Menu-item">Маски</li>
              <li className="Footer-Menu-item">Колпаки и шапочки</li>
              <li className="Footer-Menu-item">Халаты одноразовые</li>
              <li className="Footer-Menu-item">Комбинезоны защитные</li>
              <li className="Footer-Menu-item">Бахилы</li>
            </ul>
            <ul className="Footer-Menu">
              <li className="Footer-Menu-item-title">
                Антисептики и дезинфекция
              </li>
              <li className="Footer-Menu-item">Бахилы</li>
              <li className="Footer-Menu-item">
                Дезинфицирующие средства для поверхностей
              </li>
              <li className="Footer-Menu-item">Средства для инструментов</li>
              <li className="Footer-Menu-item">
                Средства для санитарной обработки помещений
              </li>
              <li className="Footer-Menu-item">Дозаторы и аксессуары</li>
            </ul>
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
