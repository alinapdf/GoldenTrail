
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState, useContext } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Autor from "../../assets/img/LogoAutor.png";
import stars from "../../assets/img/Starrs.png";
import { LanguageContext } from "../../context/LanguageContext";

import { Pagination, Navigation } from "swiper/modules";

import styles from "./Reviews.module.css";

const Reviews = () => {
  const { t } = useContext(LanguageContext);
  const comment = [
    {
      id: 1,
      name: "Анна С.",
      imgLogo: Autor,
      stars: stars,
      comment:
        "Уже несколько раз заказываю одноразовые халаты и перчатки — качество стабильно отличное! Быстрая доставка и хорошее обслуживание.",
      data: "04.05.2025",
    },
    {
      id: 2,
      name: "Дмитрий П.",
      imgLogo: Autor,
      stars: stars,
      comment:
        "Рентгенозащитный фартук оказался очень удобным, материал прочный. Единственный минус — упаковка была слегка повреждена.",
      data: "27.04.2025",
    },
    {
      id: 3,
      name: "Екатерина А.",
      imgLogo: Autor,
      stars: stars,
      comment:
        "Мы сотрудничаем с Golden Trail MMC уже больше года и можем с уверенностью сказать, что это надёжный поставщик медицинской продукции. Заказывали как одноразовые расходные материалы, так...Мы сотрудничаем с Golden Trail MMC уже больше года и можем с уверенностью сказать, что это надёжный поставщик медицинской продукции. Заказывали как одноразовые расходные материалы, так...",
      data: "22.04.2025",
    },
    {
      id: 4,
      name: "Наталья М.",
      imgLogo: Autor,
      stars: stars,
      comment: "Быстро оформили и доставили заказ. Всё подошло, спасибо!",
      data: "22.04.2025",
    },
    {
      id: 5,
      name: "Анна С.",
      imgLogo: Autor,
      stars: stars,
      comment:
        "Уже несколько раз заказываю одноразовые халаты и перчатки — качество стабильно отличное! Быстрая доставка и хорошее обслуживание.",
      data: "04.05.2025",
    },
    {
      id: 6,
      name: "Дмитрий П.",
      imgLogo: Autor,
      stars: stars,
      comment:
        "Рентгенозащитный фартук оказался очень удобным, материал прочный. Единственный минус — упаковка была слегка повреждена.",
      data: "27.04.2025",
    },
    {
      id: 7,
      name: "Екатерина А.",
      imgLogo: Autor,
      stars: stars,
      comment:
        "Мы сотрудничаем с Golden Trail MMC уже больше года и можем с уверенностью сказать, что это надёжный поставщик медицинской продукции. Заказывали как одноразовые расходные материалы, так...Мы сотрудничаем с Golden Trail MMC уже больше года и можем с уверенностью сказать, что это надёжный поставщик медицинской продукции. Заказывали как одноразовые расходные материалы, так...",
      data: "22.04.2025",
    },
    {
      id: 8,
      name: "Наталья М.",
      imgLogo: Autor,
      stars: stars,
      comment: "Быстро оформили и доставили заказ. Всё подошло, спасибо!",
      data: "22.04.2025",
    },
  ];

  const [expandedMap, setExpandedMap] = useState({});

  return (
    <div className="reviewsContainer">
      <div className="container">
        <h2 className={styles.reviewTitle}>{t("reviews.title")}</h2>

        <div className={styles.controlsWrapper}>
          <div className={`customPagination ${styles.customPagination}`}></div>
          <div className={styles.rightControls}>
            <span className={styles.slideHint}>{t("reviews.slide_hint")}</span>
            <div className={styles.buttonsWrapper}>
              <div className={`swiper-button-prev ${styles.navButton}`}></div>
              <div className={`swiper-button-next ${styles.navButton}`}></div>
            </div>
          </div>
        </div>

        <Swiper
          pagination={{ el: ".customPagination", type: "fraction" }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Pagination, Navigation]}
          spaceBetween={12}
          slidesPerView={1.2}
          breakpoints={{
            520: { slidesPerView: 1.4, spaceBetween: 12 },
            768: { slidesPerView: 3, spaceBetween: 16 },
          }}
          className={styles.swiper_Review}
        >
          {comment.map((item) => {
            const isExpanded = expandedMap[item.id] || false;
            const shouldTruncate = item.comment.length > 180;
            const visibleText =
              isExpanded || !shouldTruncate
                ? item.comment
                : item.comment.slice(0, 110) + "...";
            const toggleExpand = () =>
              setExpandedMap((prev) => ({ ...prev, [item.id]: !isExpanded }));

            return (
              <SwiperSlide key={item.id} className={styles.swiperSlide_Review}>
                <div className={styles.SwiperCommentBlock}>
                  <div className={styles.SwiperCommentHeader}>
                    <div className={styles.SwiperCommentUser}>
                      <img src={item.imgLogo} alt="Лого" className="Logo" />
                      <div>
                        <div className="UserName">{item.name}</div>
                        <img src={item.stars} alt="Оценка" className="Stars" />
                      </div>
                    </div>
                    <div className="UserDate">{item.data}</div>
                  </div>

                  <p className="Comment">
                    {visibleText}
                    {shouldTruncate && (
                      <button
                        onClick={toggleExpand}
                        className={styles.showMoreBtn}
                      >
                        {isExpanded ? t("reviews.hide") : t("reviews.show_more")}
                      </button>
                    )}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
