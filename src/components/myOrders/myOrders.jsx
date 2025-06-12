import { FaRegCopy } from "react-icons/fa";

import SSS from "../../assets/img/Man.png";

import "./myOrders.scss";

function MyOrders() {
  return (
    <>
      <div className="Myorders-container">
        <h2>Мои заказы[3]</h2>

        <div>
          <div className="order-container">
            <div className="order-left">
              <div className="order-number">
                Заказ номер 03-123-0505
                <FaRegCopy className="copy-icon" />
              </div>
              <div className="order-info">
                <span className="order-data">от 05.05.2025</span>
                <span className="order-price">9 350 ₽</span>
              </div>
            </div>

            <div className="order-right">
              <label className="order-status">
                <span className="order-circle"></span>
                <span className="order-payment">Оплачен</span>
              </label>
              <button className="toggle-btn"></button>
            </div>
          </div>
          <div className="myorders-blocks">
            <div className="myorders-block">
              <div className="order-info-block">
                <div className="order-info-img">
                  <img src={SSS} />
                </div>
                <div className="Order-info">
                  <h2>Рентгенозащитный воротник щитовидной железы</h2>
                  <div className="Order-info-items">
                    <div className="Order">
                      <div className="Order-color">Цвет</div>
                      <div></div>
                    </div>
                    <div className="Order">
                      <div className="Order-size">Размер</div>
                      <div className="Order-sizes">S</div>
                    </div>
                    <div className="Order">
                      <div className="order-quantity">Количество</div>
                      <div className="order-number">1</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Order-Prices">
                <div className="Order-old-price">12 400 ₽</div>
                <div className="Order-new-price">9 300 ₽</div>
              </div>
            </div>
            <div className="myorders-block">
              <div className="order-info-block">
                <div className="order-info-img">
                  <img src={SSS} />
                </div>
                <div className="Order-info">
                  <h2>Рентгенозащитный воротник щитовидной железы</h2>
                  <div className="Order-info-items">
                    <div className="Order">
                      <div className="Order-color">Цвет</div>
                      <div></div>
                    </div>
                    <div className="Order">
                      <div className="Order-size">Размер</div>
                      <div className="Order-sizes">S</div>
                    </div>
                    <div className="Order">
                      <div className="order-quantity">Количество</div>
                      <div className="order-number">1</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Order-Prices">
                <div className="Order-old-price">12 400 ₽</div>
                <div className="Order-new-price">9 300 ₽</div>
              </div>
            </div>
            <div className="myorders-block">
              <div className="order-info-block">
                <div className="order-info-img">
                  <img src={SSS} />
                </div>
                <div className="Order-info">
                  <h2>Рентгенозащитный воротник щитовидной железы</h2>
                  <div className="Order-info-items">
                    <div className="Order">
                      <div className="Order-color">Цвет</div>
                      <div></div>
                    </div>
                    <div className="Order">
                      <div className="Order-size">Размер</div>
                      <div className="Order-sizes">S</div>
                    </div>
                    <div className="Order">
                      <div className="order-quantity">Количество</div>
                      <div className="order-number">1</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Order-Prices">
                <div className="Order-old-price">12 400 ₽</div>
                <div className="Order-new-price">9 300 ₽</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div></div>
          <div></div>
        </div>

        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default MyOrders;
