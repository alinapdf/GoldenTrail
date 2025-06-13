import { useState } from "react";
import { sendContact } from "../../api/contact";
import "./OrderEasily.scss";

function OrderEasily() {
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
        <h2>Закажите легко</h2>
        <p>Оставьте заявку и мы свяжемся с вами в ближайшее время</p>
      </div>
      <form className="OrderEasily-Registration" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Имя"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="phone"
          placeholder="Телефон"
          value={form.phone}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="E-mail"
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Сообщение"
          value={form.message}
          onChange={handleChange}
        />
        <button type="submit" className="OrderEasily-btn">
          Отправить
        </button>
      </form>
    </div>
  );
}

export default OrderEasily;
