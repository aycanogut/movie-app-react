import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import helpers from "../helpers";
import CardContainer from "../CardContainer/CardContainer.styled";
import Carousel from "../Carousel/Carousel";
import Hero from "../Hero/Hero.styled";
import Navbar from "../Navbar/Navbar.styled";
import SearchInput from "../SearchInput/SearchInput.styled";

// api config
import tmdbApi, { movieType } from "../../api/tmdbApi.js";
import config from "../../api/config.js";

const StyledWrapper = styled.div`
  margin: 6rem auto 0 auto;
  max-width: 1920px;
  max-height: 1080px;

  @media only screen and ${helpers.device.lg} {
    margin: 0 auto;
  }
`;
const Catalog = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });

        setMovies(response.results.slice(11, 16));
      } catch {
        console.log("error");
      }
    };
    getMovies();
  }, []);

  return (
    <StyledWrapper>
      <Navbar />
      <Carousel>
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <img
              src={config.images(movie.backdrop_path)}
              alt={`poster of ${movie.original_title} movie`}
            />
            <Hero
              title={movie.original_title}
              text={movie.overview.substring(0, 220)}
            />
          </SwiperSlide>
        ))}
      </Carousel>
      <SearchInput />
      <CardContainer />
    </StyledWrapper>
  );
};

export default Catalog;
