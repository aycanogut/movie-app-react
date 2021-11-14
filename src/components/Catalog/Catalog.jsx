import React, { useEffect } from "react";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import useData from "../../hooks/useData";
import { api } from "../../hooks/useData";
import helpers from "../helpers";
import CardContainer from "../CardContainer/CardContainer.styled";
import Carousel from "../Carousel/Carousel";
import Hero from "../Hero/Hero.styled";
import Navbar from "../Navbar/Navbar.styled";
import SearchInput from "../SearchInput/SearchInput.styled";

const StyledWrapper = styled.div`
  margin: 6rem auto 0 auto;
  max-width: 1920px;
  max-height: 1080px;

  @media only screen and ${helpers.device.lg} {
    margin: 0 auto;
  }
`;

const Catalog = () => {
  const { movies, getMovies } = useData();

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <StyledWrapper>
      <Navbar />
      <Carousel>
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <img
              src={api.images(movie.backdrop_path)}
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
