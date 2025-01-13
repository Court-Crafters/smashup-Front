import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation , Pagination} from 'swiper/modules';


const BrandSliderSection = () => {
  return (
    <div className="brand-slider-section section-padding fix">
      <div className="brand-slider-container-wrapper style1">
        <div className="container">
          <div className="brand-slider-wrapper style1">
            <h2 className="single-section-title">Millions of clients trust us.</h2>
            <Swiper
              modules={[Pagination, Navigation]}
              loop={true}
              pagination={{ clickable: true }}
              navigation={true}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 2, centeredSlides: true },
                768: { slidesPerView: 3 },
                1025: { slidesPerView: 4 },
                1400: { slidesPerView: 5 },
              }}
              className="swiper-container"
            >
              <SwiperSlide>
                <div className="brand-logo">
                  <img src="assets/images/logo/brandLogo1_1.png" alt="logo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-logo">
                  <img src="assets/images/logo/brandLogo1_2.png" alt="logo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-logo">
                  <img src="assets/images/logo/brandLogo1_3.png" alt="logo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-logo">
                  <img src="assets/images/logo/brandLogo1_4.png" alt="logo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-logo">
                  <img src="assets/images/logo/brandLogo1_5.png" alt="logo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-logo">
                  <img src="assets/images/logo/brandLogo1_3.png" alt="logo" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSliderSection;