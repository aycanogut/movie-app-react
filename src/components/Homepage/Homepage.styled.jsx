import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../Header/Header.styled";
import Title from "../Title/Title.styled";
import Card from "../Card/Card.styled";

// Import Swiper styles
import "swiper/css";

// api config
import tmdbApi, { movieType, tvType } from "../../api/tmdbApi.js";
import config from "../../api/config.js";

const StyledWrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
`;

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);

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
    <>
      <Header />
      <StyledWrapper>
        <Title title={"New Releases"} />
        <Swiper
          grabCursor={true}
          autoplay={{
            delay: 9999999999999,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          breakpoints={{
            320: {
              width: 160,
              slidesPerView: 1,
            },
            465: {
              width: 320,
              slidesPerView: 2,
            },
            640: {
              width: 500,
              slidesPerView: 2,
            },

            768: {
              width: 700,
              slidesPerView: 3,
            },
            992: {
              width: 992,
              slidesPerView: 3,
            },
          }}
        >
          {movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <Card
                image={config.w500images(movie.poster_path)}
                title={movie.original_title}
                rating={movie.vote_average}
                genre={movie.genre_ids}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Title title={"Featured TV Shows"} />

        <Swiper
          grabCursor={true}
          autoplay={{
            delay: 9999999999999,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          breakpoints={{
            320: {
              width: 160,
              slidesPerView: 1,
            },
            465: {
              width: 320,
              slidesPerView: 2,
            },
            640: {
              width: 500,
              slidesPerView: 2,
            },

            768: {
              width: 700,
              slidesPerView: 3,
            },
            992: {
              width: 992,
              slidesPerView: 3,
            },
          }}
        >
          {tvShows.map((tv, index) => (
            <SwiperSlide key={index}>
              <Card
                image={config.w500images(tv.poster_path)}
                title={tv.original_name}
                rating={tv.vote_average}
                genre={tv.genre_ids}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </StyledWrapper>
    </>
  );
};

export default Homepage;
