import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import helpers from "../helpers";
import carouselBreakpoints from "../../helpers/carouselBreakpoints";

import Navbar from "../Navbar/Navbar.styled";
import Title from "../Title/Title.styled";
import Card from "../Card/Card.styled";
import Carousel from "../Carousel/Carousel";
import Hero from "../Hero/Hero.styled";

// api config
import tmdbApi, { movieType, tvType } from "../../api/tmdbApi.js";
import config from "../../api/config.js";

const StyledWrapper = styled.div`
  margin: 6rem auto 0 auto;
  max-width: 1920px;
  max-height: 1080px;

  @media only screen and ${helpers.device.lg} {
    margin: 0 auto;
  }
`;

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const heroMovies = movies.slice(0, 5);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const responseMovies = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        const responseTv = await tmdbApi.getTvList(tvType.popular, {
          params,
        });

        setMovies(responseMovies.results.slice(0, 20));
        setTvShows(responseTv.results.slice(0, 20));
      } catch {
        console.log("error");
      }
    };
    getMovies();
  }, []);

  return (
    <StyledWrapper>
      <Navbar />
      {/* header hero carousel start */}
      <Carousel>
        {heroMovies.map((movie, index) => (
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
      {/* header hero carousel end */}
      {/* tv shows section start */}
      <Title title={"New Releases"} />
      <Carousel breakpoints={carouselBreakpoints}>
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <Card
              image={config.w500images(movie.poster_path)}
              title={movie.original_title}
              rating={movie.vote_average}
              info={movie.overview.slice(0, 180).concat("...")}
            />
          </SwiperSlide>
        ))}
      </Carousel>
      {/* tv shows section end */}
      {/* movies section start */}
      <Title title={"Featured TV Shows"} />
      <Carousel breakpoints={carouselBreakpoints}>
        {tvShows.map((tv, index) => (
          <SwiperSlide key={index}>
            <Card
              image={config.w500images(tv.poster_path)}
              title={tv.original_name}
              rating={tv.vote_average}
              info={tv.overview.slice(0, 180).concat("...")}
            />
          </SwiperSlide>
        ))}
      </Carousel>
      {/* movies section start */}
    </StyledWrapper>
  );
};

export default Homepage;
