import "./BestSellers.scss";

import useProducts from "../../hooks/useProducts";
import { useContext, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";

import { useDispatch } from "react-redux";
import { addItem } from "../../redux/CardSlice";
import { addCartItem, productToCartItem } from "../../api/cart";
import { addFav } from "../../redux/AddFav";

import { Link } from "react-router-dom";
import { setCurrentProduct } from "../../redux/CurrentProductSlice";

function BestSellers() {
  const { t } = useContext(LanguageContext);
  const dispatch = useDispatch();

  const handleAddFav = (product) => {
    dispatch(addFav(product));
  };
  const products = useProducts().filter((p) => p.is_on_sale);

  const Item = ({ product }) => {
    const [size, setSize] = useState(product.sizes?.[0] || "");
    const [color, setColor] = useState(product.colors?.[0] || "");

    const handleAdd = async () => {
      const selected = { ...product, selectedSize: size, selectedColor: color };
      dispatch(addItem(selected));
      try {
        const item = productToCartItem(selected, { size, color });
        await addCartItem(item);
      } catch (err) {
        console.error(err);
      }
    };

    return (
      <div className="BestSellers" key={product.id}>
        <div className="BestSellers_top">
          <div className="BestSellers_main-info">
            <div className="BestSellers_img">
              <img src={product.img} alt={product.name} />
            </div>
            <div className="BestSellers_status">{product.status}</div>
            <div className="BestSellers_btns">
              <button className="BestSellers_btn baasket " onClick={handleAdd}></button>
              <button className="BestSellers_btn fav" onClick={() => handleAddFav(product)}></button>
            </div>
          </div>
          <h3>{product.name}</h3>
          <ul className="BestSellers_sizes">
            {product.sizes.map((s, index) => (
              <li
                className={`BestSellers_size-item${s === size ? " active" : ""}`}
                style={s === size ? { border: "1px solid #000" } : {}}
                onClick={() => setSize(s)}
                key={index}
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="BestSellers_bottom">
          <div className="BestSellers_bottom-info">
            <div className="BestSellers_price">
              <div className="BestSellers_price_main-price">{product.mainPrice}</div>
              {product.oldPrice && <div className="BestSellers_price_old-price">{product.oldPrice}</div>}
            </div>
            <ul className="BestSellers_colors">
              {product.colors.map((c, index) => (
                <li
                  className={`BestSellers_color-item${c === color ? " active" : ""}`}
                  onClick={() => setColor(c)}
                  key={index}
                >
                  <span
                    style={{
                      background: c,
                      border: c === color ? "1px solid #000" : "none",
                    }}
                  ></span>
                </li>
              ))}
            </ul>
          </div>
          <div className="BestSellers_action">
            <button className="btn-main" onClick={handleAdd}>
              {t("products_block.buy")}
            </button>
            <Link to={`/desc/${product.id}`} className="link-main" onClick={() => dispatch(setCurrentProduct(product))}>
              {t("products_block.more")}
            </Link>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="container-BestSellers">
      <h2>{t("products_block.best")}</h2>
      <div className="BestSellers-objs">
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default BestSellers;
