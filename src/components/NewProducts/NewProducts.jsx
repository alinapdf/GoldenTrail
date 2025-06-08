import "./NewProducts.scss";
import cap from "../../assets/img/disposableCap.png";
import xalat from "../../assets/img/xalat.png";
import mask from "../../assets/img/mask.png";
import cart from "../../assets/img/cart.svg";
import heart from "../../assets/img/heart.svg";
import cartb from "../../assets/img/cartb.svg";

function NewProducts() {
  const products = [
    {
      id: 1,
      name: "Халат хирургический одноразовый",
      img: xalat,
      images: [cart, heart, cartb],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: [
        "rgba(29, 227, 137, 1)",
        "rgba(105, 147, 254, 1)",
        "rgba(191, 87, 120, 1)",
      ],

      mainPrice: "320 ₽",
      oldPrice: "540 ₽",
      is_new: true,
      is_bestSellers: false,
      is_poplar: false,
      desc: "Рентгенозащитный воротник щитовидной железы",
    },
    {
      id: 2,
      name: "Маски медицинские 3-х слойные (50 шт)",
      img: mask,
      images: [cart, heart, cartb],
      sizes: ["S", "M", "Xl"],
      colors: [
        "rgba(242, 219, 71, 1)",
        "rgba(255, 151, 229, 1)",
        "rgba(105, 147, 254, 1)",
        "rgba(255, 255, 255, 1)",
      ],
      mainPrice: "250 ₽",
      oldPrice: "380 ₽",
      is_new: "popular",
      desc: "Маски медицинские 3-х слойные (50 шт)",
    },
    {
      id: 3,
      name: "Шапочки одноразовые (100 шт)",
      img: cap,
      images: [cart, heart, cartb],
      sizes: ["S", "M", "Xl"],
      colors: ["#ffffff"],
      mainPrice: "180 ₽",
      oldPrice: "",
      is_new: "sale",
      desc: "Шапочки одноразовые (100 шт)",
    },
  ];

  return (
    <div className="container-newproducts">
      <h2>Новинки</h2>
      <div className="newProducts-objs">
        {products.map((product) => (
          <div className="newProducts" key={product.id}>
            <div className="newProducts_top">
              <div className="newProducts_main-info">
                <div className="newProducts_img">
                  <img src={product.img} alt={product.name} />
                </div>
                <div className="newProducts_status">{product.is_new}</div>
                <div className="newProducts_btns">
                  <button className="newProducts_btn baasket"></button>
                  <button className="newProducts_btn fav"></button>
                </div>
              </div>
              <h3>{product.name}</h3>
              <ul className="newProducts_sizes">
                {product.sizes.map((size, index) => (
                  <li className="newProducts_size-item" key={index}>
                    {size}
                  </li>
                ))}
              </ul>
            </div>
            <div className="newProducts_bottom">
              <div className="newProducts_bottom-info">
                <div className="newProducts_price">
                  <div className="newProducts_price_main-price">
                    {product.mainPrice}
                  </div>
                  {product.oldPrice && (
                    <div className="newProducts_price_old-price">
                      {product.oldPrice}
                    </div>
                  )}
                </div>
                <ul className="newProducts_colors">
                  {product.colors.map((color, index) => (
                    <li className="newProducts_color-item" key={index}>
                      <span style={{ background: color }}></span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="newProducts_action">
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

export default NewProducts;
