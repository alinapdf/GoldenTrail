import "./Advantages.scss";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import advantagesStars from "../../assets/img/advantagesStars.svg";

function Advantages() {
  const { t } = useContext(LanguageContext);
  const data = t("advantages");
  const products = data.items.map((item, idx) => ({
    id: idx + 1,
    img: advantagesStars,
    ...item,
  }));

  return (
    <div className="Advantages-wrapper">
      <div className="Advantages-inner">
        <h2 className="h2">{data.title}</h2>
        <div className="Advantages-objs">
          {products.map((product) => (
            <div className="Advantages-obj" key={product.id}>
              <div className="Advantages-img">
                <img src={product.img} alt={product.name} />
              </div>
              <div className="Advantages-Name">{product.name}</div>
              <p className="Advantages-Desc">{product.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Advantages;
