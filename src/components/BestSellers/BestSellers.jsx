import "./BestSellers.scss";

import useProducts from "../../hooks/useProducts";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

import { useDispatch } from "react-redux";
import { addItem } from "../../redux/CardSlice";
import { addFav } from "../../redux/AddFav";

import { Link } from "react-router-dom";
import { setCurrentProduct } from "../../redux/CurrentProductSlice";

function BestSellers() {
  const { t } = useContext(LanguageContext);
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(addItem(product));
  };
  const handleAddFav = (product) => {
    dispatch(addFav(product));
  };
  const products = useProducts().filter((p) => p.is_on_sale);
  return (
    <div className="container-BestSellers">
      <h2>{t("products_block.best")}</h2>
      <div className="BestSellers-objs">
        {products.map((product) => (
          <div className="BestSellers" key={product.id}>
            <div className="BestSellers_top">
              <div className="BestSellers_main-info">
                <div className="BestSellers_img">
                  <img src={product.img} alt={product.name} />
                </div>
                <div className="BestSellers_status">{product.status}</div>
                <div className="BestSellers_btns">
                  <button
                    className="BestSellers_btn baasket "
                    onClick={() => handleAdd(product)}
                  ></button>
                  <button
                    className="BestSellers_btn fav"
                    onClick={() => handleAddFav(product)}
                  ></button>
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
                <button className="btn-main" onClick={() => handleAdd(product)}>
                  {t("products_block.buy")}
                </button>
                <Link
                  to={`/desc/${product.id}`}
                  className="link-main"
                  onClick={() => dispatch(setCurrentProduct(product))}
                >
                  {t("products_block.more")}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSellers;
