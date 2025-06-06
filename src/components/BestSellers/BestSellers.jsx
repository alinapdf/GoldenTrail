import "./BestSellers.scss";

import bahil from "../../assets/img/bahil.png";
import Raspirator from "../../assets/img/Raspirator.png";
import Truba from "../../assets/img/truba.png";
import MMask from "../../assets/img/MMask.png";
import Plenka from "../../assets/img/Plenka.png";
import BlueRulon from "../../assets/img/BlueRulon.png";
import cart from "../../assets/img/cart.svg";
import heart from "../../assets/img/heart.svg";
import cartb from "../../assets/img/cartb.svg";

function BestSellers() {
  const products = [
    {
      id: 1,
      name: "Бахилы плотные (100 пар)",
      img: bahil,
      images: [cart, heart, cartb],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: [
        "rgba(29, 227, 137, 1)",
        "rgba(105, 147, 254, 1)",
        "rgba(191, 87, 120, 1)",
      ],

      mainPrice: "350 ₽",
      oldPrice: "640 ₽",
      is_new: "New",
      desc: "Бахилы плотные (100 пар)",
    },
    {
      id: 2,
      name: "Респиратор FFP2/FFP3",
      img: Raspirator,
      images: [cart, heart, cartb],
      sizes: ["S", "M", "Xl"],
      colors: [
        "rgba(242, 219, 71, 1)",
        "rgba(255, 151, 229, 1)",
        "rgba(105, 147, 254, 1)",
        "rgba(255, 255, 255, 1)",
      ],
      mainPrice: "9 300 ₽",
      oldPrice: "",
      is_new: "popular",
      desc: "Респиратор FFP2/FFP3",
    },
    {
      id: 3,
      name: "Экран лицевой защитный",
      img: MMask,
      images: [cart, heart, cartb],
      sizes: ["S", "M", "Xl"],
      colors: [
        "rgba(242, 219, 71, 1)",
        "rgba(255, 151, 229, 1)",
        "rgba(105, 147, 254, 1)",
        "rgba(255, 255, 255, 1)",
      ],
      mainPrice: "210 ₽",
      oldPrice: "",
      is_new: "sale",
      desc: "Экран лицевой защитный",
    },
    {
      id: 4,
      name: "УФ-лампа бактерицидная",
      img: Truba,
      images: [cart, heart, cartb],
      sizes: [],
      colors: ["#ffffff"],
      mainPrice: "2 200 ₽",
      oldPrice: "",
      is_new: "New",
      desc: "УФ-лампа бактерицидная",
    },
    {
      id: 5,
      name: "Пленка пищевая для обертываний",
      img: Plenka,
      images: [cart, heart, cartb],
      sizes: [],
      colors: ["#ffffff"],
      mainPrice: "150 ₽",
      oldPrice: "",
      is_new: "popular",
      desc: "Пленка пищевая для обертываний",
    },
    {
      id: 6,
      name: "Простыни одноразовые в рулоне",
      img: BlueRulon,
      images: [cart, heart, cartb],
      sizes: [],
      colors: [
        "rgba(242, 219, 71, 1)",
        "rgba(255, 151, 229, 1)",
        "rgba(105, 147, 254, 1)",
        "rgba(255, 255, 255, 1)",
      ],
      mainPrice: "300 ₽",
      oldPrice: "",
      is_new: "sale",
      desc: "Простыни одноразовые в рулоне",
    },
  ];
  return (
    <div className="container-BestSellers">
      <h2>Хиты продаж</h2>
      <div className="BestSellers-objs">
        {products.map((product) => (
          <div className="BestSellers" key={product.id}>
            <div className="BestSellers_top">
              <div className="BestSellers_main-info">
                <div className="BestSellers_img">
                  <img src={product.img} alt={product.name} />
                </div>
                <div className="BestSellers_status">{product.is_new}</div>
                <div className="BestSellers_btns">
                  <button className="BestSellers_btn baasket"></button>
                  <button className="BestSellers_btn fav"></button>
                </div>
              </div>
              <h3>{product.name}</h3>
              <ul className="BestSellers_sizes">
                {product.sizes.map((size, index) => (
                  <li className="BestSellers_size-item" key={index}>
                    {size}
                  </li>
                ))}
              </ul>
            </div>
            <div className="BestSellers_bottom">
              <div className="BestSellers_bottom-info">
                <div className="BestSellers_price">
                  <div className="BestSellers_price_main-price">
                    {product.mainPrice}
                  </div>
                  {product.oldPrice && (
                    <div className="BestSellers_price_old-price">
                      {product.oldPrice}
                    </div>
                  )}
                </div>
                <ul className="BestSellers_colors">
                  {product.colors.map((color, index) => (
                    <li className="BestSellers_color-item" key={index}>
                      <span style={{ background: color }}></span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="BestSellers_action">
                <button className="btn-main">Купить в 1 клик</button>
                <a href="#" className="link-main">
                  Подробнее
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSellers;
