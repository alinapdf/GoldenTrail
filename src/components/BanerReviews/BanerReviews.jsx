import "./HeroBanner.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import heroImg from "../../assets/img/girlBaner.png";
import Square from "../../assets/img/Square.png";

function BanerReviews() {
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
                    <div className="heroBadge">
                      Индивидуальный пошив. Гарантия — 1 год.
                    </div>
                    <h2 className="heroTitle">
                      Надёжная защита для медперсонала
                    </h2>
                    <p className="heroSubtitle">
                      Рентгенозащитные фартуки, воротники и очки от Kiran
                    </p>
                    <button className="heroBtn">Перейти в каталог</button>
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
