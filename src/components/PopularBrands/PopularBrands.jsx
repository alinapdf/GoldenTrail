import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Импорт модуля Autoplay

import amazonLogo from "../../assets/img/amazon-logo.png";
import "swiper/css";

import "./PopularBrands.scss";

const PopularBrands = () => {
  return (
    <>
      <div className="PopularBrands-container">
        <div className="PopularBrands-Blocks">
          <h2 className="H2">
            Популярные бренды
          </h2>
          <p className="p">
            Мы работаем с проверенными производителями, такими как Kiran Medical
            Systems и Trivitron Healthcare. Это надёжная рентгенозащитная одежда
            и качественные медицинские расходники для клиник и салонов,
            косметологических учреждений.
          </p>
        </div>
      </div>
      <div className="popularBrands_container">
        <Swiper
          modules={[Autoplay]} // Подключаем модуль
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={100}
          slidesPerView={5}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 100,
            },
            540: {
              slidesPerView: 3,
              spaceBetween: 100,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 100,
            },
          }}
          className="PopularBrandsSwiper"
        >
          {[...Array(8)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="logo-img">
                <img src={amazonLogo} alt="Amazon" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default PopularBrands;
