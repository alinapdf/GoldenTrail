// components/BuyModal.jsx
import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import "./BuyModal.scss";

const BuyModal = ({ onClose }) => {
  const { t } = useContext(LanguageContext);
  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal-title">{t("auth.buy_modal.title")}</div>
        <p>{t("auth.buy_modal.desc")}</p>

        <form className="form">
          <input type="text" placeholder={t("auth.buy_modal.name")} required />
          <input type="tel" placeholder={t("auth.buy_modal.phone")} required />
          <input type="email" placeholder={t("auth.buy_modal.email")} required />
          <textarea placeholder={t("auth.buy_modal.comment")} />

          <label className="checkboxLabel">
            <input type="checkbox" required />
            <div className="chek-span">{t("auth.buy_modal.agree")}</div>
          </label>

          <button type="submit" className="submitBtn">
            {t("auth.buy_modal.submit")}
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
