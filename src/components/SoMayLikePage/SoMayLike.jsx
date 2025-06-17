import useProducts from "../../hooks/useProducts";

import { useDispatch } from "react-redux";
import { addItem } from "../../redux/CardSlice";
import { addCartItem, productToCartItem } from "../../api/cart";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

import "./SoMayLike.scss";
function SoMayLike() {
  const { t } = useContext(LanguageContext);
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
  const products = useProducts();

  return (
    <div className="container-SoMayLike">
      <h2>{t("products_block.new")}</h2>
      <div className="SoMayLike-objs">
        {products.map((product) => (
          <div className="SoMayLike" key={product.id}>
            <div className="SoMayLike_top">
              <div className="SoMayLike_main-info">
                <div className="SoMayLike_img">
                  <img src={product.img} alt={product.name} />
                </div>
                <div className="SoMayLike_status">{product.status}</div>
                <div className="SoMayLike_btns">
                  <button
                    className="SoMayLike_btn baasket"
                    onClick={() => handleAdd(product)}
                  ></button>
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
                <button className="btn-main" onClick={() => handleAdd(product)}>
                  {t("products_block.buy")}
                </button>
                <a href="#" className="link-main">
                  {t("products_block.more")}
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
