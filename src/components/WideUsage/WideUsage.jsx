import "./WideUsage.scss";

import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

import Aptek from "../../assets/img/aptecka.svg";
import wideusage2 from "../../assets/img/wideusage2.svg";
import wideusage3 from "../../assets/img/wideusage3.svg";

function WideUsage() {
  const { t } = useContext(LanguageContext);
  const data = t("wide_usage");
  const products = data.list.map((item, idx) => ({
    id: idx + 1,
    img: idx === 0 ? Aptek : idx === 1 ? wideusage2 : wideusage3,
    ...item,
  }));

  return (
    <div className="container-WideUsage">
      <h2>{data.title}</h2>
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
