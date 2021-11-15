import React, { useEffect } from "react";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import useData, { api, url } from "../../hooks/useData";
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
  const { movies, series, setMovies, setSeries, submitRequest } = useData();

  const fetchData = () => {
    submitRequest(url.movies(), setMovies);
    submitRequest(url.series(), setSeries);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StyledWrapper>
      <Navbar />
      {/* header hero carousel start */}
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
      {/* header hero carousel end */}
      {/* tv shows section start */}
      <Title title={"New Releases"} />
      <Carousel breakpoints={carouselBreakpoints}>
        {movies.map((movie, index) => (
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
      {/* tv shows section end */}
      {/* movies section start */}
      <Title title={"Featured TV Shows"} />
      <Carousel breakpoints={carouselBreakpoints}>
        {series.map((tv, index) => (
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
      {/* movies section start */}
    </StyledWrapper>
  );
};

export default Homepage;
