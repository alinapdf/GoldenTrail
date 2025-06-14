import "./NewProducts.scss";
import useProducts from "../../hooks/useProducts";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

import { useDispatch } from "react-redux";
import { addItem } from "../../redux/CardSlice";
import { addCartItem } from "../../api/cart";
import { addFav } from "../../redux/AddFav";
import { Link } from "react-router-dom";
import { setCurrentProduct } from "../../redux/CurrentProductSlice";

function NewProducts() {
  const { t } = useContext(LanguageContext);
  const dispatch = useDispatch();

  const handleAdd = async (product) => {
    dispatch(addItem(product));
    try {
      await addCartItem(product);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddFav = (product) => {
    dispatch(addFav(product));
  };
  const products = useProducts().filter((p) => p.is_new);

  return (
    <div className="container-newproducts">
      <h2>{t("products_block.new")}</h2>
      <div className="newProducts-objs">
        {products.map((product) => (
          <div className="newProducts" key={product.id}>
            <div className="newProducts_top">
              <div className="newProducts_main-info">
                <div className="newProducts_img">
                  <img src={product.img} alt={product.name} />
                </div>
                <div className="newProducts_status">{product.status}</div>
                <div className="newProducts_btns">
                  <button
                    className="newProducts_btn baasket"
                    onClick={() => handleAdd(product)}
                  ></button>
                  <button
                    className="newProducts_btn fav"
                    onClick={() => handleAddFav(product)}
                  ></button>
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

export default NewProducts;
