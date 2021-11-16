import React, { useEffect } from "react";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import useData, { url } from "../../hooks/useData";
import api from "../../api/api.js";
import helpers from "../helpers";
import carouselBreakpoints from "../../helpers/carouselBreakpoints";
import Navbar from "../Navbar/Navbar.styled";
import Title from "../Title/Title.styled";
import Card from "../Card/Card.styled";
import Carousel from "../Carousel/Carousel";
import Hero from "../Hero/Hero.styled";

const StyledWrapper = styled.div`
  margin: 6rem auto 0 auto;
  max-width: 1920px;
  max-height: 1080px;

  @media only screen and ${helpers.device.lg} {
    margin: 0 auto;
  }
`;

const Homepage = () => {
  const {
    popularMovies,
    upcomingMovies,
    popularSeries,
    topRatedMovies,
    topRatedSeries,
    setPopularMovies,
    setUpComingMovies,
    setPopularSeries,
    setTopRatedMovies,
    setTopRatedSeries,
    submitRequest,
  } = useData();

  const fetchData = () => {
    submitRequest(url.popularMovies(), setPopularMovies);
    submitRequest(url.upcomingMovies(), setUpComingMovies);
    submitRequest(url.popularSeries(), setPopularSeries);
    submitRequest(url.topRatedMovies(), setTopRatedMovies);
    submitRequest(url.topRatedSeries(), setTopRatedSeries);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StyledWrapper>
      <Navbar />

      <Carousel>
        {popularMovies.map((movie, index) => (
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

      <Title title={"New Releases"} />
      <Carousel breakpoints={carouselBreakpoints}>
        {popularMovies.map((movie, index) => (
          <SwiperSlide key={index}>
            <Card
              image={api.w500images(movie.poster_path)}
              title={movie.original_title}
              rating={movie.vote_average}
              info={movie.overview.substring(0, 180).concat("...")}
            />
          </SwiperSlide>
        ))}
      </Carousel>

      <Title title={"Upcoming Movies"} />
      <Carousel breakpoints={carouselBreakpoints}>
        {upcomingMovies.map((movie, index) => (
          <SwiperSlide key={index}>
            <Card
              image={api.w500images(movie.poster_path)}
              title={movie.original_title}
              rating={movie.vote_average}
              info={movie.overview.substring(0, 180).concat("...")}
            />
          </SwiperSlide>
        ))}
      </Carousel>

      <Title title={"Featured TV Shows"} />
      <Carousel breakpoints={carouselBreakpoints}>
        {popularSeries.map((tv, index) => (
          <SwiperSlide key={index}>
            <Card
              image={api.w500images(tv.poster_path)}
              title={tv.original_name}
              rating={tv.vote_average}
              info={tv.overview.substring(0, 180).concat("...")}
            />
          </SwiperSlide>
        ))}
      </Carousel>

      <Title title={"Top Rated Movies"} />
      <Carousel breakpoints={carouselBreakpoints}>
        {topRatedMovies.map((movie, index) => (
          <SwiperSlide key={index}>
            <Card
              image={api.w500images(movie.poster_path)}
              title={movie.original_title}
              rating={movie.vote_average}
              info={movie.overview.substring(0, 180).concat("...")}
            />
          </SwiperSlide>
        ))}
      </Carousel>

      <Title title={"Top Rated TV Shows"} />
      <Carousel breakpoints={carouselBreakpoints}>
        {topRatedSeries.map((movie, index) => (
          <SwiperSlide key={index}>
            <Card
              image={api.w500images(movie.poster_path)}
              title={movie.original_name}
              rating={movie.vote_average}
              info={movie.overview.substring(0, 180).concat("...")}
            />
          </SwiperSlide>
        ))}
      </Carousel>
    </StyledWrapper>
  );
};

export default Homepage;
