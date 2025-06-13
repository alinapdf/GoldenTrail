// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import "./PersonalData.scss";

// function PersonalData() {
//   const [userInfo, setUserInfo] = useState({
//     name: "",
//     surname: "",
//     patronymic: "",
//     phone: "",
//     email: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [addresses, setAddresses] = useState([
//     { city: "", street: "", building: "", apartment: "", postalCode: "" },
//   ]);

//   const cart = useSelector((state) => state.cart);

//   const addAddress = () => {
//     setAddresses([
//       ...addresses,
//       { city: "", street: "", building: "", apartment: "", postalCode: "" },
//     ]);
//   };

//   const handleInputChange = (e) => {
//     setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!userInfo.name) newErrors.name = "Введите имя";
//     if (!userInfo.surname) newErrors.surname = "Введите фамилию";
//     if (!userInfo.email) newErrors.email = "Введите email";
//     if (!userInfo.phone) newErrors.phone = "Введите номер телефона";
//     if (!userInfo.password) newErrors.password = "Введите пароль";

//     return newErrors;
//   };

//   const handleSave = () => {
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       setErrors({});
//       alert("Данные сохранены успешно!"); // или отправка на сервер
//     }
//   };

//   return (
//     <div className="PersonalData-container">
//       <h2>Здравствуйте, Ольга</h2>

//       <div className="PersonalData-Inputs-Buttons">
//         <div className="PersonalData-input">
//           <input
//             name="name"
//             placeholder="Имя"
//             type="text"
//             value={userInfo.name}
//             onChange={handleInputChange}
//             className={userInfo.name ? "filled" : ""}
//           />
//           {errors.name && <span className="error">{errors.name}</span>}

//           <input
//             name="surname"
//             placeholder="Фамилия"
//             type="text"
//             value={userInfo.surname}
//             onChange={handleInputChange}
//             className={userInfo.name ? "filled" : ""}
//           />
//           {errors.surname && <span className="error">{errors.surname}</span>}

//           <input
//             name="patronymic"
//             placeholder="Отчество"
//             type="text"
//             value={userInfo.patronymic}
//             onChange={handleInputChange}
//             className={userInfo.name ? "filled" : ""}
//           />
//           {errors.patronymic && (
//             <span className="error">{errors.patronymic}</span>
//           )}
//           <input
//             name="phone"
//             placeholder="Номер телефона"
//             type="tel"
//             value={userInfo.phone}
//             onChange={handleInputChange}
//             className={userInfo.name ? "filled" : ""}
//           />
//           {errors.phone && <span className="error">{errors.phone}</span>}

//           <input
//             name="email"
//             placeholder="Email"
//             type="email"
//             value={userInfo.email}
//             onChange={handleInputChange}
//             className={userInfo.name ? "filled" : ""}
//           />
//           {errors.email && <span className="error">{errors.email}</span>}

//           <input
//             name="password"
//             placeholder="Пароль"
//             type="password"
//             value={userInfo.password}
//             onChange={handleInputChange}
//             className={userInfo.name ? "filled" : ""}
//           />
//           {errors.password && <span className="error">{errors.password}</span>}
//         </div>

//         <button className="Change">Изменить пароль</button>
//         <button className="btn-main-busket" onClick={handleSave}>
//           Сохранить изменения
//         </button>
//       </div>

//       <div className="PersonalData-Inputs-Block-Add">
//         {addresses.map((_, index) => (
//           <div key={index} className="PersonalData-Inputs-Add">
//             <div className="PersonalData-Name">
//               <div className="PersonalData-name">Адрес доставки</div>
//               {index === addresses.length - 1 && (
//                 <button className="simvol-btn" onClick={addAddress}>
//                   +
//                 </button>
//               )}
//             </div>
//             <div className="PersonalData-input">
//               <input placeholder="Город/Населенный пункт" type="text" />
//               <input placeholder="Улица" type="text" />
//               <input placeholder="Дом/Строение" type="text" />
//               <input placeholder="Квартира/Офис" type="text" />
//               <input placeholder="Почтовый индекс" type="text" />
//             </div>
//             <button className="btn-main-busket">Сохранить изменения</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default PersonalData;

import React, { useState, useEffect, useContext } from "react";
import "./PersonalData.scss";
import { LanguageContext } from "../../context/LanguageContext";

function PersonalData() {
  const { t } = useContext(LanguageContext);
  const [users, setUsers] = useState([]); // массив пользователей
  const [userInfo, setUserInfo] = useState({
    name: "",
    surname: "",
    patronymic: "",
    phone: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const [addresses, setAddresses] = useState([
    { city: "", street: "", building: "", apartment: "", postalCode: "" },
  ]);

  const handleInputChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!userInfo.name) newErrors.name = t("personal_data.errors.name");
    if (!userInfo.surname) newErrors.surname = t("personal_data.errors.surname");
    if (!userInfo.email) newErrors.email = t("personal_data.errors.email");
    if (!userInfo.phone) newErrors.phone = t("personal_data.errors.phone");
    if (!userInfo.password) newErrors.password = t("personal_data.errors.password");
    return newErrors;
  };

  const handleSave = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Проверка на существующего пользователя (по email)
    const existing = users.find((u) => u.email === userInfo.email);
    if (!existing) {
      setUsers((prev) => [...prev, userInfo]); // добавляем нового
    }

    alert(t("personal_data.saved"));
  };

  useEffect(() => {
    const existingUser = users.find((u) => u.email === userInfo.email);
    if (existingUser) {
      setUserInfo(existingUser);
    }
  }, [users, userInfo.email]);

  return (
    <div className="PersonalData-container">
      <h2>
        {t("personal_data.hello")}, {userInfo.name || t("personal_data.guest")}
      </h2>

      <div className="PersonalData-Inputs-Buttons">
        <div className="PersonalData-input">
          {["name", "surname", "patronymic", "phone", "email", "password"].map(
            (field) => (
              <React.Fragment key={field}>
                <input
                  name={field}
                  placeholder={
                    field === "password"
                      ? t("personal_data.placeholders.password")
                      : t(`personal_data.placeholders.${field}`)
                  }
                  type={field === "password" ? "password" : "text"}
                  value={userInfo[field]}
                  onChange={handleInputChange}
                  className={userInfo[field] ? "filled" : ""}
                />
                {errors[field] && (
                  <span className="error">{errors[field]}</span>
                )}
              </React.Fragment>
            )
          )}
        </div>

        <button className="Change">{t("personal_data.change_password")}</button>
        <button className="btn-main-busket" onClick={handleSave}>
          {t("personal_data.save_changes")}
        </button>
      </div>

      <div className="PersonalData-Inputs-Block-Add">
        {addresses.map((_, index) => (
          <div key={index} className="PersonalData-Inputs-Add">
            <div className="PersonalData-Name">
              <div className="PersonalData-name">{t("personal_data.address")}</div>
              {index === addresses.length - 1 && (
                <button
                  className="simvol-btn"
                  onClick={() =>
                    setAddresses((prev) => [
                      ...prev,
                      {
                        city: "",
                        street: "",
                        building: "",
                        apartment: "",
                        postalCode: "",
                      },
                    ])
                  }
                >
                  +
                </button>
              )}
            </div>
            <div className="PersonalData-input">
              <input
                placeholder={t("personal_data.placeholders.city")}
                type="text"
              />
              <input
                placeholder={t("personal_data.placeholders.street")}
                type="text"
              />
              <input
                placeholder={t("personal_data.placeholders.building")}
                type="text"
              />
              <input
                placeholder={t("personal_data.placeholders.apartment")}
                type="text"
              />
              <input
                placeholder={t("personal_data.placeholders.postalCode")}
                type="text"
              />
            </div>
            <button className="btn-main-busket">
              {t("personal_data.save_changes")}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PersonalData;
