import "./CardItem.scss";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { setCurrentProduct } from "../../redux/CurrentProductSlice";

import { useDispatch } from "react-redux";
import { addItem } from "../../redux/CardSlice";
import { addCartItem, productToCartItem } from "../../api/cart";
import { addFav } from "../../redux/AddFav";
import useProducts from "../../hooks/useProducts";

function CardItem() {
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

  const handleAddFav = (product) => {
    dispatch(addFav(product));
  };
  const products = useProducts().filter((p) => p.is_popular);

  return (
    <div className="container-productCard">
      <h2>{t("products_block.popular")}</h2>
      <div className="productCard-objs">
        {" "}
        {products.map((product) => (
          <div className="productCard" key={product.id}>
            <div className="productCard_top">
              <div className="productCard_main-info">
                <div className="productCard_img">
                  <img src={product.img} alt={product.name} />
                </div>
                <div className="productCard_status">{product.status}</div>
                <div className="productCard_btns">
                  <button
                    className="productCard_btn baasket"
                    onClick={() => handleAdd(product)}
                  ></button>
                  <button
                    className="productCard_btn fav"
                    onClick={() => handleAddFav(product)}
                  ></button>
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

export default CardItem;
