import "./FavBusket.scss";
import { useSelector, useDispatch } from "react-redux";
import { removeFav, clearFav } from "../../redux/AddFav";
import { addItem, increaseQuantity, decreaseQuantity } from "../../redux/CardSlice";
import person from "../../assets/img/person.png";
import bahyli from "../../assets/img/bahyli.png";
import dezenfekiciya from "../../assets/img/dezenfekciya.png";

function FavBusket() {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFav(id));
  };

  const handleAdd = (product) => {
    dispatch(addItem(product));
  };

  const total = favorites.reduce((sum, item) => {
    const price = parseFloat(item.mainPrice.replace(/\s|₽/g, ""));
    const qty = item.quantity || 1;
    return sum + price * qty;
  }, 0);

  const categories = [
    { id: 1, name: "Рентгенозащитная одежда", bg: person },
    { id: 2, name: "Одноразовая продукция", bg: bahyli },
    { id: 3, name: "Антисептики и дезинфекция", bg: dezenfekiciya },
  ];

  return (
    <div className="container-FavBusket">
      <div className="FavBusket-Block">
        {favorites.length === 0 ? (
          <>
            <div className="FavBusket-Empty">
              <p>В избранном пока ничего нет</p>
            </div>

            <div className="FavBusket-categories-list">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="FavBusket-category-card"
                  style={{ backgroundImage: `url(${category.bg})` }}
                >
                  <h3 className="FavBusket-category-name">{category.name}</h3>
                  <button className="btn-main btn">Перейти в каталог</button>
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
                          <div>Размер</div>
                          <div>{item.sizes[0] || "-"}</div>
                        </li>
                        <li className="FavBusket-Item-Quantity">
                          <div>Количество</div>
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
                        Удалить
                      </button>
                      <button className="btn" onClick={() => handleAdd(item)}>
                        Добавить в корзину
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="FavBusket-Block-Total-Price">
              <div className="FavBusket-Block-Total">
                <div className="FavBusket-Total">Итого</div>
                <div className="FavBusket-Price">
                  {total.toLocaleString()} ₽
                </div>
              </div>
              <div className="Delivery-texts">
                <p className="Delivery-text">
                  Доступные способы оплаты и доставки можно выбрать при
                  оформлении заказа.
                </p>
                <p className="delivery">Без учета стоимости доставки</p>
              </div>
            </div>

            <div className="FavBusket-Buttons">
              <div className="FavBusket-Buttons-add">
                <button className="btn">Купить в 1 клик</button>
                <button className="btn">Добавить все в корзину</button>
              </div>
              <button className="delete" onClick={() => dispatch(clearFav())}>
                Очистить избранное
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default FavBusket;
