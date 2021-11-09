import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { Autoplay, Parallax } from "swiper";

SwiperCore.use([Autoplay, Parallax]);

import helpers from "../helpers";
import tmdbApi, { category, movieType } from "../../api/tmdbApi.js";
import config from "../../api/config.js";

// header title
const StyledWrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: grid;
  place-items: start;
  height: 20%;
  padding: 12% 4rem;
  color: ${helpers.colors.text};

  @media only screen and ${helpers.device.sm} {
    padding: 20% 8rem;
  }

  @media only screen and ${helpers.device.md} {
    max-width: 500px;
    padding: 20% 12rem;
  }

  @media only screen and ${helpers.device.lg} {
    max-width: 600px;
    padding: 12rem;
    margin: 10rem;
  }
`;

const StyledBadge = styled.span`
  padding: 6px;
  border-radius: 12px;
  background-color: rgba(29, 29, 29, 0.5);
  color: ${helpers.colors.textBadge};
  font-size: 10px;

  @media only screen and ${helpers.device.sm} {
    font-size: 12px;
  }

  @media only screen and ${helpers.device.md} {
    font-size: 14px;
  } ;
`;

const Styledh1 = styled.h1`
  font-size: 22px;
  margin: 1rem 0 0 0;

  @media only screen and ${helpers.device.sm} {
    font-size: 24px;
  }

  @media only screen and ${helpers.device.md} {
    font-size: 32px;
    margin: 2rem 0 2rem 0;
  }

  @media only screen and ${helpers.device.lg} {
    font-size: 64px;
  } ;
`;

const StyledP = styled.p`
  font-size: 12px;

  @media only screen and ${helpers.device.sm} {
    font-size: 14px;
  }

  @media only screen and ${helpers.device.md} {
    font-size: 18px;
    line-height: 1.5;
  }
`;

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
          <StyledWrapper>
            <StyledBadge></StyledBadge>
            <Styledh1>{movie.original_title}</Styledh1>
            <StyledP>{movie.overview.substring(0, 220)}</StyledP>
          </StyledWrapper>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
