import "./FilteredProducts.scss";
import { useState } from "react";

import up from "../../assets/img/up.svg";
import vector from "../../assets/img/Vector.svg";

import useProducts from "../../hooks/useProducts";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/CardSlice";
import { addCartItem, productToCartItem } from "../../api/cart";
import { addFav } from "../../redux/AddFav";

import { Link } from "react-router-dom";
import { setCurrentProduct } from "../../redux/CurrentProductSlice";

function FilteredProducts() {
  const [showAllFilters, setShowAllFilters] = useState(false);

  const dispatch = useDispatch();

  const handleAdd = async (product) => {
    dispatch(addItem(product));
    try {
      const item = productToCartItem(product);
      await addCartItem(item);
    } catch (err) {
      console.error(err);
    }
  };
  const handleAddFav = (product) => {
    dispatch(addFav(product));
  };
  const products = useProducts();
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
        <button
          className="FilteredProducts-All"
          onClick={() => setShowAllFilters((prev) => !prev)}
        >
          <span className="FilteredProducts-All-name">Все фильтры</span>
          <div>
            <img src={vector} />
          </div>
        </button>
        <button className="FilteredProducts-delete">Очистить фильтры</button>
      </div>
      {showAllFilters && (
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
      )}

      <div className="FilteredProducts-objs">
        {products.map((product) => (
          <div className="FilteredProducts" key={product.id}>
            <div className="FilteredProducts_top">
              <div className="FilteredProducts_main-info">
                <div className="FilteredProducts_img">
                  <img src={product.img} alt={product.name} />
                </div>
                <div className="FilteredProducts_status">{product.status}</div>
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
