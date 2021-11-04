import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/swiper-bundle.min.css";
import CarouselBg from "../../assets/images/carousel.png";

const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      //todo look for usage of pagination and scrollbar, also add auto change of slides
      spaceBetween={0}
      slidesPerView={1}
      centeredSlides
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src={CarouselBg} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={CarouselBg} alt="" />{" "}
      </SwiperSlide>
      <SwiperSlide>
        <img src={CarouselBg} alt="" />{" "}
      </SwiperSlide>
      <SwiperSlide>
        <img src={CarouselBg} alt="" />{" "}
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
