import useProducts from "../../hooks/useProducts";

import { useDispatch } from "react-redux";
import { addItem } from "../../redux/CardSlice";
import { addCartItem, productToCartItem } from "../../api/cart";
import { useContext, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";

import "./SoMayLike.scss";
function SoMayLike() {
  const { t } = useContext(LanguageContext);
  const dispatch = useDispatch();

  const products = useProducts();

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
      <div className="SoMayLike" key={product.id}>
        <div className="SoMayLike_top">
          <div className="SoMayLike_main-info">
            <div className="SoMayLike_img">
              <img src={product.img} alt={product.name} />
            </div>
            <div className="SoMayLike_status">{product.status}</div>
            <div className="SoMayLike_btns">
              <button className="SoMayLike_btn baasket" onClick={handleAdd}></button>
              <button className="SoMayLike_btn fav"></button>
            </div>
          </div>
          <h3>{product.name}</h3>
          <ul className="SoMayLike_sizes">
            {product.sizes.map((s, index) => (
              <li
                className={`SoMayLike_size-item${s === size ? " active" : ""}`}
                style={s === size ? { border: "1px solid #000" } : {}}
                onClick={() => setSize(s)}
                key={index}
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="SoMayLike_bottom">
          <div className="SoMayLike_bottom-info">
            <div className="SoMayLike_price">
              <div className="SoMayLike_price_main-price">{product.mainPrice}</div>
              {product.oldPrice && <div className="SoMayLike_price_old-price">{product.oldPrice}</div>}
            </div>
            <ul className="SoMayLike_colors">
              {product.colors.map((c, index) => (
                <li
                  className={`SoMayLike_color-item${c === color ? " active" : ""}`}
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
          <div className="SoMayLike_action">
            <button className="btn-main" onClick={handleAdd}>
              {t("products_block.buy")}
            </button>
            <a href="#" className="link-main">
              {t("products_block.more")}
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container-SoMayLike">
      <h2>{t("products_block.new")}</h2>
      <div className="SoMayLike-objs">
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default SoMayLike;
