import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const BrandSliderSection = () => {
  const logos = [
    "assets/images/logo/brandLogo1_1.png",
    "assets/images/logo/brandLogo1_2.png",
    "assets/images/logo/brandLogo1_3.png",
    "assets/images/logo/brandLogo1_4.png",
    "assets/images/logo/brandLogo1_5.png",
    "assets/images/logo/brandLogo1_2.png",
  ];

  return (
    <div className="brand-slider-section section-padding fix">
      <div className="brand-slider-container-wrapper style1">
        <div className="container">
          <div className="brand-slider-wrapper style1">
            <h2 className="single-section-title pb-4" style={{ color: "#1a22b7" }}>
            Join The Network Of Excellence.
            </h2>
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              loop={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              slidesPerView={5}
              spaceBetween={30}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                576: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                992: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
              }}
            >
              {logos.map((logo, index) => (
                <SwiperSlide
                  key={index}
                  style={{
                    width: "300px", // Fixed width per logo
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="brand-logo">
                    <img
                      src={logo}
                      alt={`Partner ${index + 1}`}
                      style={{
                        width: "60%",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSliderSection;
