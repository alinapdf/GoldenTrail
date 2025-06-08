import cart from "../../assets/img/cart.svg";
import heart from "../../assets/img/heart.svg";
import cartb from "../../assets/img/cartb.svg";
import SoManyLike from "../../assets/img/SoManyLike.png";
import SoManyLike2 from "../../assets/img/SoManyLike2.png";
import SoManyLike3 from "../../assets/img/SoManyLike3.png";

import "./SoMayLike.scss";
function SoMayLike() {
  const products = [
    {
      id: 1,
      name: "Антисептик для рук 1 л",
      img: SoManyLike,
      images: [cart, heart, cartb],
      sizes: [],
      colors: [],
      mainPrice: "290 ₽",
      oldPrice: "",
      is_new: "New",
      desc: "Антисептик для рук 1 л",
    },
    {
      id: 2,
      name: "Салфетки спиртовые (100 шт)",
      img: SoManyLike2,
      images: [cart, heart, cartb],
      sizes: [],
      colors: [],
      mainPrice: "180 ₽",
      oldPrice: "",
      is_new: "popular",
      desc: "Салфетки спиртовые (100 шт)",
    },
    {
      id: 3,
      name: "Средство для дезинфекции поверхностей 5 л",
      img: SoManyLike3,
      images: [cart, heart, cartb],
      sizes: [],
      colors: [],
      mainPrice: "600 ₽",
      oldPrice: "",
      is_new: "sale",
      desc: "Средство для дезинфекции поверхностей 5 л",
    },
  ];

  return (
    <div className="container-SoMayLike">
      <h2>Новинки</h2>
      <div className="SoMayLike-objs">
        {products.map((product) => (
          <div className="SoMayLike" key={product.id}>
            <div className="SoMayLike_top">
              <div className="SoMayLike_main-info">
                <div className="SoMayLike_img">
                  <img src={product.img} alt={product.name} />
                </div>
                <div className="SoMayLike_status">{product.is_new}</div>
                <div className="SoMayLike_btns">
                  <button className="SoMayLike_btn baasket"></button>
                  <button className="SoMayLike_btn fav"></button>
                </div>
              </div>
              <h3>{product.name}</h3>
              <ul className="SoMayLike_sizes">
                {product.sizes.map((size, index) => (
                  <li className="SoMayLike_size-item" key={index}>
                    {size}
                  </li>
                ))}
              </ul>
            </div>
            <div className="SoMayLike_bottom">
              <div className="SoMayLike_bottom-info">
                <div className="SoMayLike_price">
                  <div className="SoMayLike_price_main-price">
                    {product.mainPrice}
                  </div>
                  {product.oldPrice && (
                    <div className="SoMayLike_price_old-price">
                      {product.oldPrice}
                    </div>
                  )}
                </div>
                <ul className="SoMayLike_colors">
                  {product.colors.map((color, index) => (
                    <li className="SoMayLike_color-item" key={index}>
                      <span style={{ background: color }}></span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="SoMayLike_action">
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

export default SoMayLike;
