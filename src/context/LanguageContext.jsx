/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";

const availableLanguages = ["az", "en", "ru"];

const translations = {
  az: {
    products: "Məhsullar",
    about: "Haqqımızda",
    contacts: "Əlaqə",
    search: "Axtarış",
    favorites: "Seçilmişlər",
    cart: "Səbət",
    account: "Hesab",
    menu: "Menyu",
  },
  en: {
    products: "Products",
    about: "About us",
    contacts: "Contacts",
    search: "Search",
    favorites: "Favorites",
    cart: "Cart",
    account: "Account",
    menu: "Menu",
  },
  ru: {
    products: "Продукция",
    about: "О нас",
    contacts: "Контакты",
    search: "Поиск",
    favorites: "Избранное",
    cart: "Корзина",
    account: "Аккаунт",
    menu: "Меню",
  },
};

export const LanguageContext = createContext({
  language: "ru",
  setLanguage: () => {},
  t: (key) => key,
});

export const LanguageProvider = ({ children }) => {
  const detectBrowserLanguage = () => {
    const lang = navigator.language?.slice(0, 2).toLowerCase();
    return availableLanguages.includes(lang) ? lang : "ru";
  };

  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("language");
    if (saved && availableLanguages.includes(saved)) return saved;
    return detectBrowserLanguage();
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
