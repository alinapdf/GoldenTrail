import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./PersonalData.scss";

function PersonalData() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    surname: "",
    patronymic: "",
    phone: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [addresses, setAddresses] = useState([
    { city: "", street: "", building: "", apartment: "", postalCode: "" },
  ]);

  const cart = useSelector((state) => state.cart);

  const addAddress = () => {
    setAddresses([
      ...addresses,
      { city: "", street: "", building: "", apartment: "", postalCode: "" },
    ]);
  };

  const handleInputChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!userInfo.name) newErrors.name = "Введите имя";
    if (!userInfo.surname) newErrors.surname = "Введите фамилию";
    if (!userInfo.email) newErrors.email = "Введите email";
    if (!userInfo.phone) newErrors.phone = "Введите номер телефона";
    if (!userInfo.password) newErrors.password = "Введите пароль";

    return newErrors;
  };

  const handleSave = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Данные сохранены успешно!"); // или отправка на сервер
    }
  };

  return (
    <div className="PersonalData-container">
      <h2>Здравствуйте, Ольга</h2>

      <div className="PersonalData-Inputs-Buttons">
        <div className="PersonalData-input">
          <input
            name="name"
            placeholder="Имя"
            type="text"
            value={userInfo.name}
            onChange={handleInputChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}

          <input
            name="surname"
            placeholder="Фамилия"
            type="text"
            value={userInfo.surname}
            onChange={handleInputChange}
          />
          {errors.surname && <span className="error">{errors.surname}</span>}

          <input
            name="patronymic"
            placeholder="Отчество"
            type="text"
            value={userInfo.patronymic}
            onChange={handleInputChange}
          />
          {errors.patronymic && (
            <span className="error">{errors.patronymic}</span>
          )}
          <input
            name="phone"
            placeholder="Номер телефона"
            type="tel"
            value={userInfo.phone}
            onChange={handleInputChange}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}

          <input
            name="email"
            placeholder="Email"
            type="email"
            value={userInfo.email}
            onChange={handleInputChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <input
            name="password"
            placeholder="Пароль"
            type="password"
            value={userInfo.password}
            onChange={handleInputChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <button className="Change">Изменить пароль</button>
        <button className="btn-main-busket" onClick={handleSave}>
          Сохранить изменения
        </button>
      </div>

      <div className="PersonalData-Inputs-Block-Add">
        {addresses.map((_, index) => (
          <div key={index} className="PersonalData-Inputs-Add">
            <div className="PersonalData-Name">
              <div className="PersonalData-name">Адрес доставки</div>
              {index === addresses.length - 1 && (
                <button className="simvol-btn" onClick={addAddress}>
                  +
                </button>
              )}
            </div>
            <div className="PersonalData-input">
              <input placeholder="Город/Населенный пункт" type="text" />
              <input placeholder="Улица" type="text" />
              <input placeholder="Дом/Строение" type="text" />
              <input placeholder="Квартира/Офис" type="text" />
              <input placeholder="Почтовый индекс" type="text" />
            </div>
            <button className="btn-main-busket">Сохранить изменения</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PersonalData;
