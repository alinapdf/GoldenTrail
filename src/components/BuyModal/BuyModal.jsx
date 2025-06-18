// components/BuyModal.jsx
import React, { useContext, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { sendContact } from "../../api/contact";
import "./BuyModal.scss";

const BuyModal = ({ onClose }) => {
  const { t } = useContext(LanguageContext);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendContact(form);
      setForm({ name: "", phone: "", email: "", message: "" });
      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal-title">{t("auth.buy_modal.title")}</div>
        <p>{t("auth.buy_modal.desc")}</p>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder={t("auth.buy_modal.name")}
            required
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder={t("auth.buy_modal.phone")}
            required
            value={form.phone}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder={t("auth.buy_modal.email")}
            required
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder={t("auth.buy_modal.comment")}
            value={form.message}
            onChange={handleChange}
          />

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
