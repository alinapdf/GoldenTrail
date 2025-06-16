import { useState } from "react";
import "./FilteredProducts.scss";

import up from "../../assets/img/up.svg";
import vector from "../../assets/img/Vector.svg";

import useProducts from "../../hooks/useProducts";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/CardSlice";
import { addFav } from "../../redux/AddFav";

import { Link } from "react-router-dom";
import { setCurrentProduct } from "../../redux/CurrentProductSlice";

function FilteredProducts() {
  const dispatch = useDispatch();
  const products = useProducts();
  const sizeList = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
  const sectionList = [
    "Фартуки",
    "Юбки и жилеты",
    "Защитные халаты",
    "Комбинированные костюмы",
    "Брюшные и тазовые экраны",
    "Одеяла с защитой",
    "Манжеты и шапки",
    "Рентгенозащитные покрытия",
    "Защитные очки",
  ];

  const colorList = [
    "rgba(242, 219, 71, 1)",
    "rgba(255, 151, 229, 1)",
    "rgba(105, 147, 254, 1)",
    "rgba(255, 255, 255, 1)",
    "rgba(29, 227, 137, 1)",
    "rgba(191, 87, 120, 1)",
  ];
  const [price, setPrice] = useState(0);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleAdd = (product) => dispatch(addItem(product));
  const handleAddFav = (product) => dispatch(addFav(product));

  return (
    <>
      <div className="FilteredProducts-container">
        <h2>Рентгенозащитная продукция</h2>

        <div className="FilteredProducts-Buttons">
          <div className="FilteredProducts-filter">
            <div className="FilteredProducts-name">По умолчанию</div>
            <div className="FilteredProducts-img">
              <img src={up} alt="up" />
            </div>
          </div>

          <button
            className="FilteredProducts-All"
            onClick={() => setIsFilterOpen(true)}
          >
            <span className="FilteredProducts-All-name">Все фильтры</span>
            <div>
              <img src={vector} alt="vector" />
            </div>
          </button>

          <button className="FilteredProducts-delete">Очистить фильтры</button>
        </div>

        <div className="FilteredProducts-All-buttns">
          <button className="FilteredProducts-All-btn">Фартуки</button>
          <button className="FilteredProducts-All-btn">Юбки и жилеты</button>
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
                  <div className="FilteredProducts_status">
                    {product.status}
                  </div>
                  <div className="FilteredProducts_btns">
                    <button
                      className="FilteredProducts_btn baasket"
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
                  <button
                    className="btn-main"
                    onClick={() => handleAdd(product)}
                  >
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

      {isFilterOpen && (
        <div className="FilterSidebar">
          <div className="FilterSidebar-header">
            <h2>Все фильтры</h2>
            <button
              className="close-btn"
              onClick={() => setIsFilterOpen(false)}
            >
              ×
            </button>
          </div>
          <div className="FilterSidebar-section">
            <h3>РАЗДЕЛ</h3>
            <ul className="FilterSidebar-menu">
              {sectionList.map((section, index) => {
                return (
                  <li key={index} className="FilterSidebar-menu-item">
                    <label className="custom-checkbox-square">
                      <input type="checkbox" readOnly />
                      <span></span>{" "}
                    </label>
                    <span className="section-label-text">{section}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="FilterSidebar-section-color">
            <h3>ЦВЕТ</h3>
            <ul className="FilterSidebar-menu">
              {colorList.map((color, index) => (
                <li key={index} className="FilterSidebar-menu-item">
                  <label className="custom-checkbox-static">
                    <input type="checkbox" readOnly />
                    <span className="checkbox-square"></span>
                  </label>
                  <span
                    className="color-dot"
                    style={{ background: color }}
                  ></span>
                </li>
              ))}
            </ul>
          </div>
          <div className="FilterSidebar-section-size">
            <h3>РАЗМЕР</h3>
            <ul className="size-list">
              {sizeList.map((size, index) => (
                <li key={index} className="size-item">
                  <span className="size-square"></span>
                  <span className="size-label">{size}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="FilterSidebar-section-price">
            <h3>ЦЕНА</h3>
            <div className="price-inputs-single">
              <input
                type="text"
                value={`${price.toLocaleString()} ₼`}
                readOnly
              />
            </div>
            <input
              type="range"
              min="0"
              max="30000"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="price-range"
            />
          </div>

          <button className="clear-filters">Очистить фильтры</button>
        </div>
      )}
    </>
  );
}

export default FilteredProducts;
