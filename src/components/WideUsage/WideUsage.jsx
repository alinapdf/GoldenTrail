import "./WideUsage.scss";

import Aptek from "../../assets/img/aptecka.svg";
import wideusage2 from "../../assets/img/wideusage2.svg";
import wideusage3 from "../../assets/img/wideusage3.svg";

function WideUsage() {
  const products = [
    {
      id: 1,
      img: Aptek,
      name: "Медицинская сфера:",
      menu: [
        "Медицинские учреждения (государственные и частные клиники)",
        "Радиологические отделения",
        "Стоматологии",
        "Центры лучевой терапии",
        "Ветеринарные клиники",
      ],
    },
    {
      id: 2,
      img: wideusage2,
      name: "Косметология и бьюти-индустрия:",
      menu: [
        "Косметологические клиники",
        "Эстетические центры",
        "SPA-салоны",
        "Тату-салоны",
        "Салоны лазерной эпиляции",
      ],
    },
    {
      id: 3,
      img: wideusage3,
      name: "Службы безопасности и промышленность:",
      menu: [
        "Службы радиационного контроля",
        "Таможенные и логистические службы с оборудованием, излучающим радиацию",
      ],
    },
  ];

  return (
    <div className="container-WideUsage">
      <h2>Широкая сфера применения</h2>
      <div className="WideUsage">
        {products.map((product) => (
          <div className="WideUsage-obj" key={product.id}>
            <div className="WideUsage-img">
              <img src={product.img} alt={product.name} />
            </div>
            <div className="WideUsage-block">
              <div className="WideUsage-Name">{product.name}</div>
              <ul className="WideUsage-menu">
                {product.menu.map((item, index) => (
                  <li className="WideUsage-menu-items" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WideUsage;
