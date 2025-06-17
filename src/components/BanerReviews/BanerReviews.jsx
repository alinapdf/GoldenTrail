import "./HeroBanner.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import heroImg from "../../assets/img/girlBaner.png";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

function BanerReviews() {
  const { t } = useContext(LanguageContext);
  return (
    <div className="BanerReviewsWrapper">
      <div className="BanerReviewsContainer">
        <div className="heroBanner">
          <Swiper
            modules={[Pagination]}
            pagination={{ el: ".customPagination", clickable: true }}
            loop={true}
            className="heroSwiper"
          >
            {[...Array(3)].map((_, i) => (
              <SwiperSlide key={i}>
                <div className="heroSlide">
                  <div className="heroContent">
                    <div className="heroBadge">{t("hero.badge")}</div>
                    <h2 className="heroTitle">{t("hero.title")}</h2>
                    <p className="heroSubtitle">{t("hero.subtitle")}</p>
                    <button className="heroBtn">{t("hero.go_to_catalog")}</button>
                  </div>
                  <div className="heroImgs">                  
                     
                    <div className="heroImage">
                      <img src={heroImg} alt="Медицинская защита" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="customPagination"></div>
        </div>
      </div>
    </div>
  );
}

export default BanerReviews;
