import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import up from "../../assets/img/up.svg"; // замените на свою иконку

import SSS from "../../assets/img/mask.png"; // картинка товара

import "./myOrders.scss";

function OrderItem() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleAccordion2 = () => setIsOpen2(!isOpen2);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleAccordion3 = () => setIsOpen3(!isOpen3);

  return (
    <div className="order-wrapper">
      <h2>Мои заказы[3]</h2>
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
          <button className="toggle-btn" onClick={toggleAccordion}>
            <img
              src={up}
              alt="toggle"
              className={`toggle-arrow ${isOpen ? "rotated" : ""}`}
            />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="myorders-blocks">
          {[1, 2, 3].map((_, idx) => (
            <div className="myorders-block" key={idx}>
              <div className="order-info-block">
                <div className="order-info-img">
                  <img src={SSS} alt="product" />
                </div>
                <div className="Order-info-items">
                  <h2>Рентгенозащитный воротник щитовидной железы</h2>
                  <div className="Order-info-item">
                    <div className="Order">
                      <div className="Order-word">Цвет</div>
                      <div className="Order-color"></div>
                    </div>
                    <div className="Order">
                      <div className="Order-word">Размер</div>
                      <div className="Order-means">S</div>
                    </div>
                    <div className="Order">
                      <div className="Order-word">Количество</div>
                      <div className="Order-means">1</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Order-Prices">
                <div className="Order-old-price">12 400 ₽</div>
                <div className="Order-new-price">9 300 ₽</div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="order-containers-Cancelled">
        <div className="order-container-Cancelled">
          <div className="order-left-Cancelled">
            <div className="order-number-Cancelled">
              Заказ номер 03-123-0505
              <FaRegCopy className="copy-icon" />
            </div>
            <div className="order-info-Cancelled">
              <span className="order-data-Cancelled">от 05.05.2025</span>
              <span className="order-price-Cancelled">9 350 ₽</span>
            </div>
          </div>

          <div className="order-right-Cancelled">
            <label className="order-status-Cancelled">
              <span className="order-circle-Cancelled"></span>
              <span className="order-payment-Cancelled">Отменен</span>
            </label>
            <button className="toggle-btn" onClick={toggleAccordion2}>
              <img
                src={up}
                alt="toggle"
                className={`toggle-arrow ${isOpen2 ? "rotated" : ""}`}
              />
            </button>
          </div>
        </div>

        {isOpen2 && (
          <div className="myorders-blocks">
            {[1, 2, 3].map((_, idx) => (
              <div className="myorders-block" key={idx}>
                <div className="order-info-block">
                  <div className="order-info-img">
                    <img src={SSS} alt="product" />
                  </div>
                  <div className="Order-info-items">
                    <h2>Рентгенозащитный воротник щитовидной железы</h2>
                    <div className="Order-info-item">
                      <div className="Order">
                        <div className="Order-word">Цвет</div>
                        <div className="Order-color"></div>
                      </div>
                      <div className="Order">
                        <div className="Order-word">Размер</div>
                        <div className="Order-means">S</div>
                      </div>
                      <div className="Order">
                        <div className="Order-word">Количество</div>
                        <div className="Order-means">1</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Order-Prices">
                  <div className="Order-old-price">12 400 ₽</div>
                  <div className="Order-new-price">9 300 ₽</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="order-container-delivery">
        <div className="order-left-delivery">
          <div className="order-number-delivery">
            Заказ номер 01-123-1504
            <FaRegCopy className="copy-icon" />
          </div>
          <div className="order-info-delivery">
            <span className="order-data-delivery">от 15.04.2025 на </span>
            <span className="order-price-delivery">7 000 ₽</span>
          </div>
        </div>

        <div className="order-right-delivery">
          <label className="order-status-delivery">
            <span className="order-circle-delivery"></span>
            <span className="order-payment-delivery">Доставлен</span>
          </label>
          <button className="toggle-btn" onClick={toggleAccordion3}>
            <img
              src={up}
              alt="toggle"
              className={`toggle-arrow ${isOpen3 ? "rotated" : ""}`}
            />
          </button>
        </div>
      </div>

      {isOpen3 && (
        <div className="myorders-blocks">
          {[1, 2, 3].map((_, idx) => (
            <div className="myorders-block" key={idx}>
              <div className="order-info-block">
                <div className="order-info-img">
                  <img src={SSS} alt="product" />
                </div>
                <div className="Order-info-items">
                  <h2>Рентгенозащитный воротник щитовидной железы</h2>
                  <div className="Order-info-item">
                    <div className="Order">
                      <div className="Order-word">Цвет</div>
                      <div className="Order-color"></div>
                    </div>
                    <div className="Order">
                      <div className="Order-word">Размер</div>
                      <div className="Order-means">S</div>
                    </div>
                    <div className="Order">
                      <div className="Order-word">Количество</div>
                      <div className="Order-means">1</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Order-Prices">
                <div className="Order-old-price">12 400 ₽</div>
                <div className="Order-new-price">9 300 ₽</div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="copy-button-wrapper">
        <button className="btn">Скопировано</button>
      </div>
    </div>
  );
}

export default OrderItem;
