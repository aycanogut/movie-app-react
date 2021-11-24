import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

import useData, { url } from "../../hooks/useData";
import api from "../../api/api.js";
import helpers from "../helpers";

import Navbar from "../Navbar/Navbar.styled";
import Hero from "../Hero/Hero.styled";
import SearchInput from "../SearchInput/SearchInput.styled";
import Carousel from "../Carousel/Carousel";
import Title from "../Title/Title.styled";
import CardContainer from "../CardContainer/CardContainer.styled";

const StyledWrapper = styled.div`
  margin: 6rem auto 0 auto;

  @media only screen and ${helpers.device.lg} {
    margin: 0 auto;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  align-content: center;
  margin: 1rem;
  color: ${helpers.colors.text};
`;

const StyledImage = styled.img`
  width: 1920px;
  height: auto;
`;

const Search = () => {
  const { submitRequest } = useData();

  const [heroImage, setHeroImage] = useState([]);
  const [cardContainer, setCardContainer] = useState([]);

  const submitSearch = async (value) => {
    const search = await submitRequest(url.search(value));
    setCardContainer(search);
  };

  const fetchMovies = async () => {
    const popularMovies = await submitRequest(url.popularMovies());
    setCardContainer(popularMovies);
    setHeroImage(popularMovies);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <StyledWrapper>
      <Navbar />
      <Carousel>
        {heroImage.map((movie, index) => (
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
      <StyledHeader>
        <Title title={"Results"} />
      </StyledHeader>
      <CardContainer cardContainer={cardContainer} />
    </StyledWrapper>
  );
};

export default Search;
