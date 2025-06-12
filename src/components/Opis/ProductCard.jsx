import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import styles from "./ProductCard.module.css";

const ProductCard = () => {
  const product = useSelector((state) => state.currentProduct.product);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] || ""
  );
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "");

  if (!product) {
    return <div className={styles.ProductWrapper}>Товар не выбран</div>;
  }

  return (
    <div className={styles.ProductWrapper}>
      <div className={styles.productCard}>
        <div className={styles.imageSection}>
          <Swiper
            modules={[Navigation, Thumbs]}
            thumbs={{ swiper: thumbsSwiper }}
            navigation
            className={styles.mainSwiper}
          >
            {product.images?.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img src={product.img} alt={`Product ${idx}`} />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            modules={[Thumbs]}
            onSwiper={setThumbsSwiper}
            slidesPerView={4}
            spaceBetween={10}
            watchSlidesProgress
            className={styles.thumbSwiper}
          >
            {product.images?.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img src={product.img} alt={`Thumb ${idx}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={styles.infoSection}>
          <h1>{product.name}</h1>
          <p className={styles.inStock}>🟢 В наличии</p>

          {product.colors?.length > 0 && (
            <div className={styles.optionBlock}>
              <span>Цвет:</span>
              <div className={styles.colorOptions}>
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    className={`${styles.colorDot} ${
                      selectedColor === color ? styles.active : ""
                    }`}
                    style={{ background: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>
          )}

          {product.sizes?.length > 0 && (
            <div className={styles.optionBlock}>
              <span>Размер:</span>
              <div className={styles.sizeOptions}>
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    className={`${styles.sizeBtn} ${
                      selectedSize === size ? styles.active : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className={styles.optionBlock}>
            <span>Количество:</span>
            <div className={styles.quantity}>
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                −
              </button>
              <input type="number" value={quantity} readOnly />
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          <div className={styles.priceBlock}>
            <div className={styles.currentPrice}>{product.mainPrice}</div>
            {product.oldPrice && (
              <div className={styles.oldPrice}>{product.oldPrice}</div>
            )}
          </div>

          <button className={styles.buyButton}>Купить в 1 клик</button>
          <p className={styles.guarantee}>✓ Гарантия 2 года</p>
        </div>
      </div>

      <h2>Описание</h2>
      <div>
        <p>
          Назначение Рентгенозащитный воротник предназначен для защиты
          щитовидной железы от воздействия ионизирующего излучения при
          проведении рентгенологических, томографических и флюороскопических
          процедур. Особенно важен при длительных обследованиях или работе в
          зонах повышенной радиационной нагрузки. Описание и особенности
          Изготовлен из специализированного защитного материала с высоким
          содержанием свинца или его аналогов, обеспечивающего эффективное
          поглощение рентгеновского излучения. Имеет эргономичную форму, которая
          плотно прилегает к шее и закрывает область щитовидной железы без
          дискомфорта. Внешняя оболочка выполнена из износостойкого и легко
          очищаемого материала, устойчивого к медицинским дезинфицирующим
          средствам. Надежная система фиксации — на липучке или с застёжкой —
          позволяет быстро надевать и снимать воротник. Обеспечивает эффективную
          защиту в соответствии с международными стандартами радиационной
          безопасности. Область применения Рентген-кабинеты Операционные
          Стоматологические кабинеты Ветеринарные клиники Косметологические
          процедуры с применением флюороскопии Мобильные диагностические службы
          Преимущества Лёгкий вес и комфорт при длительном ношении Универсальный
          размер для большинства пользователей Надёжная защита чувствительной
          области Подходит для медицинских и косметологических учреждений
          Соответствие требованиям по радиационной защите Комплектация
          Рентгенозащитный воротник — 1 шт Упаковка с инструкцией по уходу
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
