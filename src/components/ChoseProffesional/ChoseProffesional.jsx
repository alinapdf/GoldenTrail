import "./ChoseProffesional.scss";

import useProducts from "../../hooks/useProducts";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

import { useDispatch } from "react-redux";
import { addItem } from "../../redux/CardSlice";
import { addFav } from "../../redux/AddFav";

import { Link } from "react-router-dom";
import { setCurrentProduct } from "../../redux/CurrentProductSlice";

function ChoseProffesional() {
  const { t } = useContext(LanguageContext);
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(addItem(product));
  };

  const handleAddFav = (product) => {
    dispatch(addFav(product));
  };
  const products = useProducts();
  return (
    <div className="container-ChoseProffesional">
      <h2>{t("products_block.choose")}</h2>
      <div className="ChoseProffesional-objs">
        {products.map((product) => (
          <div className="ChoseProffesional" key={product.id}>
            <div className="ChoseProffesional_top">
              <div className="ChoseProffesional_main-info">
                <div className="ChoseProffesional_img">
                  <img src={product.img} alt={product.name} />
                </div>
                <div className="ChoseProffesional_status">{product.status}</div>
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

export default ChoseProffesional;
