import "./SelectedItem.scss";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../redux/CardSlice";
import person from "../../assets/img/person.png";
import bahyli from "../../assets/img/bahyli.png";
import dezenfekiciya from "../../assets/img/dezenfekciya.png";

function SelectedItem() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.mainPrice.replace(/\s|₽/g, ""));
    return sum + price * item.quantity;
  }, 0);

  const categories = [
    { id: 1, name: "Рентгенозащитная одежда", bg: person },
    { id: 2, name: "Одноразовая продукция", bg: bahyli },
    { id: 3, name: "Антисептики и дезинфекция", bg: dezenfekiciya },
  ];

  return (
    <div className="container-SelectedItem">
      {cart.length === 0 ? (
        <>
          <div className="SelectedItem-Empty">
            <p>Ваша корзина пуста</p>
          </div>

          <div className="SelectedItem-categories-list">
            {categories.map((category) => (
              <div
                key={category.id}
                className="SelectedItem-category-card"
                style={{ backgroundImage: `url(${category.bg})` }}
              >
                <h3 className="SelectedItem-category-name">{category.name}</h3>
                <button className="btn-main btn">Перейти в каталог</button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="SelectedItem-Block">
            <div className="SelectedItem-Block-newcard">
              {cart.map((item) => (
                <div className="SelectedItem-Block-Obj" key={item.id}>
                  <div className="SelectedItem-img">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className="SelectedItem-Blok-desc">
                    <h3 className="h3">{item.name}</h3>
                    <ul className="SelectedItem-Menu">
                      <li className="SelectedItem-Item-Size">
                        <div>Размер</div>
                        <div>{item.sizes[0] || "-"}</div>
                      </li>
                      <li className="SelectedItem-Item-Quantity">
                        <div>Количество</div>
                        <div>{item.quantity}</div>
                      </li>
                    </ul>
                  </div>
                  <div className="SelectedItem-Total-Price">
                    <div className="SelectedItem-New-Price">
                      {item.mainPrice}
                    </div>
                    {item.oldPrice && (
                      <div className="SelectedItem-Old-Price">
                        {item.oldPrice}
                      </div>
                    )}
                    <button
                      className="deleete"
                      onClick={() => handleRemove(item.id)}
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="SelectedItem-Block-Total-Price">
              <div className="SelectedItem-Block-Discount">
                <div className="SelectedItem-Discount">Скидка</div>
                <div className="SelectedItem-Discount-total">-0 ₽</div>
              </div>
              <div className="SelectedItem-Block-Total">
                <div className="SelectedItem-Total">Итого</div>
                <div className="SelectedItem-Total-Ptice">
                  <div className="SelectedItem-Price">
                    {total.toLocaleString()} ₽
                  </div>
                  <p className="delivery">Без учета стоимости доставки</p>
                </div>
              </div>
              <button className="btn">Купить в 1 клик</button>
              <p className="Delivery-text">
                Доступные способы оплаты и доставки можно выбрать при оформлении
                заказа.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SelectedItem;
