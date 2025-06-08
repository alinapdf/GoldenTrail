import "./CardItem.scss";
import expr from "../CardItem/expr.png";
import cart from "../../assets/img/cart.svg";
import heart from "../../assets/img/heart.svg";
import cartb from "../../assets/img/cartb.svg";
import percatki from "../CardItem/percatki.png";

function CardItem() {
  const products = [
    {
      id: 1,
      name: "Рентгенозащитный воротник щитовидной железы",
      img: expr,
      images: [cart, heart, cartb],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: [
        "rgba(29, 227, 137, 1)",
        "rgba(105, 147, 254, 1)",
        "rgba(191, 87, 120, 1)",
      ],

      mainPrice: "9 300 ₽",
      oldPrice: "12 400 ₽",
      is_new: "New",
      desc: "Рентгенозащитный воротник щитовидной железы",
    },
    {
      id: 2,
      name: "Перчатки нитриловые нестерильные (100 шт.)",
      img: percatki,
      images: [cart, heart, cartb],
      sizes: ["S", "M", "L"],
      colors: [
        "rgba(242, 219, 71, 1)",
        "rgba(255, 151, 229, 1)",
        "rgba(105, 147, 254, 1)",
        "rgba(255, 255, 255, 1)",
      ],
      mainPrice: "9 300 ₽",
      oldPrice: "12 400 ₽",
      is_new: "popular",
      desc: "Перчатки нитриловые нестерильные (100 шт.)",
    },
    {
      id: 3,
      name: "Перчатки нитриловые нестерильные (100 шт.)",
      img: expr,
      images: [cart, heart, cartb],
      sizes: [],
      colors: ["#ffffff"],
      mainPrice: "600 ₽",
      oldPrice: "",
      is_new: "sale",
      desc: "Перчатки нитриловые нестерильные (100 шт.)",
    },
  ];

  return (
    <div className="container-productCard">
      <h2>Популярные товары</h2>
      <div className="productCard-objs">
        {products.map((product) => (
          <div className="productCard" key={product.id}>
            <a href="#" className="link-for-mobile"></a>
            <div className="productCard_top">
              <div className="productCard_main-info">
                <div className="productCard_img">
                  <img src={product.img} alt={product.name} />
                </div>
                <div className="productCard_status">{product.is_new}</div>
                <div className="productCard_btns">
                  <button className="productCard_btn baasket"></button>
                  <button className="productCard_btn fav"></button>
                </div>
              </div>
              <h3>{product.name}</h3>
              <ul className="productCard_sizes">
                {product.sizes.map((size, index) => (
                  <li className="productCard_size-item" key={index}>
                    {size}
                  </li>
                ))}
              </ul>
            </div>
            <div className="productCard_bottom">
              <div className="productCard_bottom-info">
                <div className="productCard_price">
                  <div className="productCard_price_main-price">
                    {product.mainPrice}
                  </div>
                  {product.oldPrice && (
                    <div className="productCard_price_old-price">
                      {product.oldPrice}
                    </div>
                  )}
                </div>
                <ul className="productCard_colors">
                  {product.colors.map((color, index) => (
                    <li className="productCard_color-item" key={index}>
                      <span style={{ background: color }}></span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="productCard_action">
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

export default CardItem;
