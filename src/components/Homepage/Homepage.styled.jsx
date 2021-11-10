import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import helpers from "../helpers";
import Header from "../Header/Header.styled";
import Title from "../Title/Title.styled";
import Card from "../Card/Card.styled";

// Import Swiper styles
import "swiper/css";

// api config
import tmdbApi, { category, movieType } from "../../api/tmdbApi.js";
import config from "../../api/config.js";

const StyledHeader = styled.header`
  display: flex;
  align-content: center;
  margin-block: 4rem;
  color: ${helpers.colors.text};
`;

const Homepage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        setMovies(response.results.slice(0, 20));
      } catch {
        console.log("error");
      }
    };
    getMovies();
  }, []);

  return (
    <>
      <Header />
      <StyledHeader>
        <Title>New Releases</Title>
      </StyledHeader>
      <Swiper
        grabCursor={true}
        slidesPerView={4}
        autoplay={{
          delay: 9999999999999,
          disableOnInteraction: false,
        }}
        className="mySwiper"
        breakpoints={{
          320: {
            width: 320,
            slidesPerView: 1,
          },
          465: {
            width: 465,
            slidesPerView: 2,
          },
          640: {
            width: 640,
            slidesPerView: 2,
          },

          768: {
            width: 768,
            slidesPerView: 3,
          },
          992: {
            width: 992,
            slidesPerView: 2,
          },
        }}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <Card
              image={config.w500images(movie.backdrop_path)}
              title={movie.original_title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Homepage;
