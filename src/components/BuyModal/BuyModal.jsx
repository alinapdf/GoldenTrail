// components/BuyModal.jsx
import React from "react";
import "./BuyModal.scss";

const BuyModal = ({ onClose }) => {
  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal-title">Купить в 1 клик</div>
        <p>
          Оставьте контактные данные — мы свяжемся с вами для подтверждения и
          уточнения деталей.
        </p>

        <form className="form">
          <input type="text" placeholder="Имя*" required />
          <input type="tel" placeholder="+994-__-___-__-__" required />
          <input type="email" placeholder="E-mail*" required />
          <textarea placeholder="Комментарий к заказу" />

          <label className="checkboxLabel">
            <input type="checkbox" required />
            <div className="chek-span">
              
              Соглашаюсь на обработку <span>персональных данных</span> и с
              условиями <span>публичной оферты</span>
            </div>
          </label>

          <button type="submit" className="submitBtn">
            Войти
          </button>
        </form>

        <button className="closeBtn" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
};

export default BuyModal;
