import { useState } from "react";
import { sendContact } from "../../api/contact";
import "./Contacts.scss";

function Contacts() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

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
    <div className="Contacts-container">
      <h2>Контакты</h2>
      <form className="Contacts-form" onSubmit={handleSubmit}>
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
          placeholder="E-mail"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Сообщение"
          value={form.message}
          onChange={handleChange}
        />
        <button type="submit" className="Contacts-btn">Отправить</button>
      </form>
    </div>
  );
}

export default Contacts;
