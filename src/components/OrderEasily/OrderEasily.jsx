import { useState, useContext } from "react";
import { sendContact } from "../../api/contact";
import "./OrderEasily.scss";
import { LanguageContext } from "../../context/LanguageContext";

function OrderEasily() {
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
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="OrderEasily-container">
      <div className="OrderEasily-Title">
        <h2>{t("order_easily.title")}</h2>
        <p>{t("order_easily.subtitle")}</p>
      </div>
      <form className="OrderEasily-Registration" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder={t("order_easily.name")}
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="phone"
          placeholder={t("order_easily.phone")}
          value={form.phone}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder={t("order_easily.email")}
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder={t("order_easily.message")}
          value={form.message}
          onChange={handleChange}
        />
        <button type="submit" className="OrderEasily-btn">
          {t("order_easily.send")}
        </button>
      </form>
    </div>
  );
}

export default OrderEasily;
