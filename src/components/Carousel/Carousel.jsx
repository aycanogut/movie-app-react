import React from "react";
import { Swiper } from "swiper/react";
import PropTypes from "prop-types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { Autoplay, Parallax } from "swiper";

SwiperCore.use([Autoplay, Parallax]);

const Carousel = ({ children, breakpoints }) => {
  return (
    <Swiper
      grabCursor={true}
      autoplay={{
        delay: 9999999999999,
        disableOnInteraction: false,
      }}
      className="mySwiper"
      breakpoints={breakpoints}
    >
      {children}
    </Swiper>
  );
};

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  breakpoints: PropTypes.object,
};

export default Carousel;
