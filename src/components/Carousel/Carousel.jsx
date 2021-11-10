import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { Autoplay, Parallax } from "swiper";

SwiperCore.use([Autoplay, Parallax]);

// api config
import tmdbApi, { category, movieType } from "../../api/tmdbApi.js";
import config from "../../api/config.js";
import Hero from "../Hero/Hero.styled";

const Carousel = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        setMovies(response.results.slice(0, 5));
        console.log(movies);
      } catch {
        console.log("error");
      }
    };
    getMovies();
  }, []);

  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      speed={600}
      parallax={true}
      grabCursor={true}
      slidesPerView={1}
      centeredSlides={true}
      className="mySwiper"
    >
      {movies.map((movie, index) => (
        <SwiperSlide key={index}>
          <img src={config.images(movie.backdrop_path)} alt="" />
          <Hero
            badge={movie.original_title}
            title={movie.original_title}
            text={movie.overview.substring(0, 220)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
