import styles from "./HeroBanner.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import heroImg from "../../assets/img/girlBaner.png";
import Square from "../../assets/img/Square.png";
function BanerReviews() {
  return (
    <div className={styles.BanerReviewsWrapper}>
      <div className={styles.BanerReviewsContainer}>
        <section className={styles.heroBanner}>
          <div className={styles.heroSlideWrapper}>
            <Swiper
              modules={[Pagination]}
              pagination={{
                el: ".customPagination",
                clickable: true,
              }}
              loop={true}
              className={styles.heroSwiper}
            >
              <SwiperSlide>
                <div className={styles.heroSlide}>
                  <div className={styles.heroContent}>
                    <div className={styles.heroBadge}>
                      Индивидуальный пошив. Гарантия — 1 год.
                    </div>
                    <h1 className={styles.heroTitle}>
                      Надёжная защита для <br /> медперсонала
                    </h1>
                    <p className={styles.heroSubtitle}>
                      Рентгенозащитные фартуки, воротники и очки от Kiran
                    </p>
                    <button className={styles.heroBtn}>
                      Перейти в каталог
                    </button>
                  </div>
                  <div className={styles.heroImgs}>
                    <div className={styles.heroBackImg}>
                      <img src={Square} />
                    </div>
                    <div className={styles.heroImage}>
                      <img src={heroImg} alt="Медицинская защита" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.heroSlide}>
                  <div className={styles.heroContent}>
                    <div className={styles.heroBadge}>
                      Индивидуальный пошив. Гарантия — 1 год.
                    </div>
                    <h1 className={styles.heroTitle}>
                      Надёжная защита для <br /> медперсонала
                    </h1>
                    <p className={styles.heroSubtitle}>
                      Рентгенозащитные фартуки, воротники и очки от Kiran
                    </p>
                    <button className={styles.heroBtn}>
                      Перейти в каталог
                    </button>
                  </div>
                  <div className={styles.heroImgs}>
                    <div className={styles.heroBackImg}>
                      <img src={Square} />
                    </div>
                    <div className={styles.heroImage}>
                      <img src={heroImg} alt="Медицинская защита" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.heroSlide}>
                  <div className={styles.heroContent}>
                    <div className={styles.heroBadge}>
                      Индивидуальный пошив. Гарантия — 1 год.
                    </div>
                    <h1 className={styles.heroTitle}>
                      Надёжная защита для <br /> медперсонала
                    </h1>
                    <p className={styles.heroSubtitle}>
                      Рентгенозащитные фартуки, воротники и очки от Kiran
                    </p>
                    <button className={styles.heroBtn}>
                      Перейти в каталог
                    </button>
                  </div>
                  <div className={styles.heroImgs}>
                    <div className={styles.heroBackImg}>
                      <img src={Square} />
                    </div>
                    <div className={styles.heroImage}>
                      <img src={heroImg} alt="Медицинская защита" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* Добавь ещё слайды при необходимости */}
            </Swiper>
            <div className={styles.heroPagination + " customPagination"} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default BanerReviews;
