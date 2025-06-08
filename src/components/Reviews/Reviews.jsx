import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import styles from "./Reviews.module.css";

const Reviews = () => {
  return (
    <div className="reviewsContainer">
      <div className="container">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          spaceBetween={12}
          slidesPerView={1.2}
          breakpoints={{
            520: {
              slidesPerView: 1.4,
              spaceBetween: 12,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
          }}
          className={styles.swiper_Review}
        >
          <SwiperSlide className={styles.swiperSlide_Review}>
            Slide 1
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide_Review}>
            Slide 2
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide_Review}>
            Slide 3
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide_Review}>
            Slide 4
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide_Review}>
            Slide 5
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide_Review}>
            Slide 6
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide_Review}>
            Slide 7
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide_Review}>
            Slide 8
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide_Review}>
            Slide 9
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
