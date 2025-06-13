import "./FilteredProducts.scss";

import up from "../../assets/img/up.svg";
import vector from "../../assets/img/Vector.svg";

import bahil from "../../assets/img/bahil.png";
import Raspirator from "../../assets/img/Raspirator.png";
import Truba from "../../assets/img/truba.png";
import MMask from "../../assets/img/MMask.png";
import Plenka from "../../assets/img/Plenka.png";
import BlueRulon from "../../assets/img/BlueRulon.png";
import cart from "../../assets/img/cart.svg";
import heart from "../../assets/img/heart.svg";
import cartb from "../../assets/img/cartb.svg";
import Heartb from "../../assets/img/Heartb.svg";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/CardSlice";
import { addFav } from "../../redux/AddFav";

import { Link } from "react-router-dom";
import { setCurrentProduct } from "../../redux/CurrentProductSlice";

function FilteredProducts() {
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
      name: "Бахилы плотные (100 пар)",
      img: bahil,
      images: [cart, heart, cartb, Heartb],
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
      images: [cart, heart, cartb, Heartb],
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
      images: [cart, heart, cartb, Heartb],
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
      images: [cart, heart, cartb, Heartb],
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
      images: [cart, heart, cartb, Heartb],
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
      images: [cart, heart, cartb, Heartb],
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
    <div className="FilteredProducts-container">
      <h2>Рентгенозащитная продукция</h2>
      <div className="FilteredProducts-Buttons">
        <div className="FilteredProducts-filter">
          <div className="FilteredProducts-name">По умолчанию</div>
          <div className="FilteredProducts-img">
            <img src={up} />
          </div>
        </div>
        <div className="FilteredProducts-All">
          <div className="FilteredProducts-All-name">Все фильтры</div>
          <div>
            <img src={vector} />
          </div>
        </div>
        <button className="FilteredProducts-delete">Очистить фильтры</button>
      </div>
      <div className="FilteredProducts-All-buttns">
        <button className="FilteredProducts-All-btn">Фартуки</button>
        <button className="FilteredProducts-All-btn">Юбки и жителы</button>
        <button className="FilteredProducts-All-btn">Защитные халаты</button>
        <button className="FilteredProducts-All-btn">
          Комбинированные костюмы
        </button>
        <button className="FilteredProducts-All-btn">
          Брюшные и тазовые экраны
        </button>
        <button className="FilteredProducts-All-btn">Одеяла с защитой</button>
      </div>
      <div className="FilteredProducts-objs">
        {products.map((product) => (
          <div className="FilteredProducts" key={product.id}>
            <div className="FilteredProducts_top">
              <div className="FilteredProducts_main-info">
                <div className="FilteredProducts_img">
                  <img src={product.img} alt={product.name} />
                </div>
                <div className="FilteredProducts_status">{product.is_new}</div>
                <div className="FilteredProducts_btns">
                  <button
                    className="FilteredProducts_btn baasket "
                    onClick={() => handleAdd(product)}
                  ></button>
                  <button
                    className="FilteredProducts_btn fav"
                    onClick={() => handleAddFav(product)}
                  ></button>
                </div>
              </div>
              <h3>{product.name}</h3>
              <ul className="FilteredProducts_sizes">
                {product.sizes.map((size, index) => (
                  <li className="FilteredProducts_size-item" key={index}>
                    {size}
                  </li>
                ))}
              </ul>
            </div>
            <div className="FilteredProducts_bottom">
              <div className="FilteredProducts_bottom-info">
                <div className="FilteredProducts_price">
                  <div className="FilteredProducts_price_main-price">
                    {product.mainPrice}
                  </div>
                  {product.oldPrice && (
                    <div className="FilteredProducts_price_old-price">
                      {product.oldPrice}
                    </div>
                  )}
                </div>
                <ul className="FilteredProducts_colors">
                  {product.colors.map((color, index) => (
                    <li className="FilteredProducts_color-item" key={index}>
                      <span style={{ background: color }}></span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="FilteredProducts_action">
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

export default FilteredProducts;
