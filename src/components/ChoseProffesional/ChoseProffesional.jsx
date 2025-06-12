import "./ChoseProffesional.scss";

import cart from "../../assets/img/cart.svg";
import heart from "../../assets/img/heart.svg";
import cartb from "../../assets/img/cartb.svg";
import Heartb from "../../assets/img/Heartb.svg";
import Man from "../../assets/img/Man.png";
import Glasses from "../../assets/img/Glasses.png";
import Door from "../../assets/img/Door.png";

import { useDispatch } from "react-redux";
import { addItem } from "../../redux/CardSlice";
import { addFav } from "../../redux/AddFav";

import { Link } from "react-router-dom";
import { setCurrentProduct } from "../../redux/CurrentProductSlice";

function ChoseProffesional() {
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(addItem(product));
  };

  const handleAddFav = (product) => {
    dispatch(addFav(product));
  };
  const products = [
    {
      id: 1,
      name: "Фартук рентгенозащитный",
      img: Man,
      images: [cart, heart, cartb, Heartb],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: [
        "rgba(29, 227, 137, 1)",
        "rgba(105, 147, 254, 1)",
        "rgba(191, 87, 120, 1)",
      ],

      mainPrice: "7 800 ₽",
      oldPrice: "11 300 ₽",
      is_new: "New",
      desc: "Фартук рентгенозащитный",
    },
    {
      id: 2,
      name: "Очки рентгенозащитные",
      img: Glasses,
      images: [cart, heart, cartb, Heartb],
      sizes: ["S", "M", "Xl"],
      colors: [
        "rgba(242, 219, 71, 1)",
        "rgba(255, 151, 229, 1)",
        "rgba(105, 147, 254, 1)",
        "rgba(255, 255, 255, 1)",
      ],
      mainPrice: "4 200 ₽",
      oldPrice: "6 100 ₽",
      is_new: "popular",
      desc: "Очки рентгенозащитные",
    },
    {
      id: 3,
      name: "Защитные ширмы",
      img: Door,
      images: [cart, heart, cartb, Heartb],
      sizes: [],
      colors: [
        "rgba(242, 219, 71, 1)",
        "rgba(255, 151, 229, 1)",
        "rgba(105, 147, 254, 1)",
        "rgba(255, 255, 255, 1)",
      ],
      mainPrice: "12 000 ₽",
      oldPrice: "",
      is_new: "sale",
      desc: "Защитные ширмы",
    },
  ];
  return (
    <div className="container-ChoseProffesional">
      <h2>Выбор профессионалов</h2>
      <div className="ChoseProffesional-objs">
        {products.map((product) => (
          <div className="ChoseProffesional" key={product.id}>
            <div className="ChoseProffesional_top">
              <div className="ChoseProffesional_main-info">
                <div className="ChoseProffesional_img">
                  <img src={product.img} alt={product.name} />
                </div>
                <div className="ChoseProffesional_status">{product.is_new}</div>
                <div className="ChoseProffesional_btns">
                  <button
                    className="ChoseProffesional_btn baasket"
                    onClick={() => handleAdd(product)}
                  ></button>
                  <button
                    className="ChoseProffesional_btn fav"
                    onClick={() => handleAddFav(product)}
                  ></button>
                </div>
              </div>
              <h3>{product.name}</h3>
              <ul className="ChoseProffesional_sizes">
                {product.sizes.map((size, index) => (
                  <li className="ChoseProffesional_size-item" key={index}>
                    {size}
                  </li>
                ))}
              </ul>
            </div>
            <div className="ChoseProffesional_bottom">
              <div className="ChoseProffesional_bottom-info">
                <div className="ChoseProffesional_price">
                  <div className="ChoseProffesional_price_main-price">
                    {product.mainPrice}
                  </div>
                  {product.oldPrice && (
                    <div className="ChoseProffesional_price_old-price">
                      {product.oldPrice}
                    </div>
                  )}
                </div>
                <ul className="ChoseProffesional_colors">
                  {product.colors.map((color, index) => (
                    <li className="ChoseProffesional_color-item" key={index}>
                      <span style={{ background: color }}></span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ChoseProffesional_action">
                <button className="btn-main" onClick={() => handleAdd(product)}>
                  Купить в 1 клик
                </button>
                <Link
                  to={`/desc/${product.id}`}
                  className="link-main"
                  onClick={() => dispatch(setCurrentProduct(product))}
                >
                  Подробнее
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChoseProffesional;
