import "./FavBusket.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFav,
  clearFav,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/AddFav";
import { addItem } from "../../redux/CardSlice";
import person from "../../assets/img/person.png";
import bahyli from "../../assets/img/bahyli.png";
import dezenfekiciya from "../../assets/img/dezenfekciya.png";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

function FavBusket() {
  const { t } = useContext(LanguageContext);
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFav(id));
  };

  const handleAdd = (product) => {
    dispatch(addItem(product));
  };

  const total = favorites.reduce((sum, item) => {
    const price = parseFloat((item.mainPrice || "0").replace(/\s|₽/g, ""));
    const quantity = item.quantity || 1;
    return sum + price * quantity;
  }, 0);

  const categories = [
    { id: 1, name: t("categories.xr"), bg: person },
    { id: 2, name: t("categories.disposable"), bg: bahyli },
    { id: 3, name: t("categories.antiseptics"), bg: dezenfekiciya },
  ];

  return (
    <div className="container-FavBusket">
      <div className="FavBusket-Block">
        {favorites.length === 0 ? (
          <>
            <div className="FavBusket-Empty">
              <p>{t("busket.favorites_empty")}</p>
            </div>
            <div className="FavBusket-categories-list">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="FavBusket-category-card"
                  style={{ backgroundImage: `url(${category.bg})` }}
                >
                  <h3 className="FavBusket-category-name">{category.name}</h3>
                  <button className="btn-main btn">
                    {t("busket.go_to_catalog")}
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="FavBusket-Block-newcard">
              {favorites.map((item) => (
                <div className="FavBusket-Block-Obj" key={item.id}>
                  <div className="FavBusket-Left-Block">
                    <div className="FavBusket-img">
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className="FavBusket-Blok-desc">
                      <h3 className="h3">{item.name}</h3>
                      <ul className="FavBusket-Menu">
                        <li className="FavBusket-Item-Size">
                          <div>{t("busket.size")}</div>
                          <div>{item.sizes?.[0] || "-"}</div>
                        </li>
                        <li className="FavBusket-Item-Quantity">
                          <div>{t("busket.quantity")}</div>
                          <div>{item.quantity}</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="FavBusket-Total-Price">
                    <div className="FavBusket-New-Price">{item.mainPrice}</div>
                    {item.oldPrice && (
                      <div className="FavBusket-Old-Price">{item.oldPrice}</div>
                    )}
                    <div className="FavBusket-Buttons">
                      <button
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        className="FavBusket-decrease"
                      >
                        -
                      </button>
                      <span className="FavBusket-Quantity">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => dispatch(increaseQuantity(item.id))}
                        className="FavBusket-increase"
                      >
                        +
                      </button>
                    </div>
                    <div className="Del-Add">
                      <button
                        className="deleete"
                        onClick={() => handleRemove(item.id)}
                      >
                        {t("busket.delete")}
                      </button>
                      <button className="btn" onClick={() => handleAdd(item)}>
                        {t("busket.add_to_cart")}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="FavBusket-Block-Total-Price">
              <div className="FavBusket-Block-Total">
                <div className="FavBusket-Total">{t("busket.total")}</div>
                <div className="FavBusket-Price">
                  {total.toLocaleString()} ₽
                </div>
              </div>
              <div className="Delivery-texts">
                <p className="Delivery-text">
                  {t("busket.pay_delivery_info")}
                </p>
                <p className="delivery">{t("busket.no_delivery")}</p>
              </div>
            </div>

            <div className="FavBusket-Buttons">
              <div className="FavBusket-Buttons-add">
                <button className="btn">{t("busket.one_click")}</button>
                <button className="btn">{t("busket.add_all_to_cart")}</button>
              </div>
              <button className="delete" onClick={() => dispatch(clearFav())}>
                {t("busket.clear_favorites")}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default FavBusket;
