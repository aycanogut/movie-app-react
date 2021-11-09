import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import helpers from "../helpers";
import Header from "../Header/Header.styled";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { Autoplay, Parallax } from "swiper";
import Title from "../Title/Title.styled";

SwiperCore.use([Autoplay, Parallax]);

const StyledHeader = styled.header`
  display: flex;
  align-content: center;
  margin-block: 4rem;
  color: ${helpers.colors.text};
`;

const Homepage = () => {
  return (
    <>
      <Header />
      <StyledHeader>
        <Title>New Releases</Title>
      </StyledHeader>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={600}
        parallax={true}
        slidesPerView={2}
        centeredSlides={false}
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 3,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 4,
          },
        }}
        className="mySwiper"
      ></Swiper>
    </>
  );
};

export default Homepage;
