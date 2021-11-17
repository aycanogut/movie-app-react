import React, { useEffect } from "react";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import useData, { url } from "../../hooks/useData";
import api from "../../api/api.js";
import helpers from "../helpers";
import CardContainer from "../CardContainer/CardContainer.styled";
import Carousel from "../Carousel/Carousel";
import Hero from "../Hero/Hero.styled";
import Navbar from "../Navbar/Navbar.styled";
import SearchInput from "../SearchInput/SearchInput.styled";

const StyledWrapper = styled.div`
  margin: 6rem auto 0 auto;

  @media only screen and ${helpers.device.lg} {
    margin: 0 auto;
  }
`;

const StyledImage = styled.img`
  width: 1920px;
  height: auto;
`;

const Catalog = () => {
  const { popularMovies, setPopularMovies, search, setSearch, submitRequest } =
    useData();

  const submitSearch = (search) => {
    submitRequest(url.search(search), setSearch);
  };

  const fetchMovies = () => {
    submitRequest(url.popularMovies(), setPopularMovies);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <StyledWrapper>
      <Navbar />
      <Carousel>
        {popularMovies.map((movie, index) => (
          <SwiperSlide key={index}>
            <StyledImage
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
      <SearchInput submitSearch={submitSearch} />
      <CardContainer search={search} />
    </StyledWrapper>
  );
};

export default Catalog;
