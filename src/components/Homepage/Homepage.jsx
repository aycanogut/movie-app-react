import { useState, useEffect } from "react";

import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

import useData, { url } from "../../hooks/useData";
import useFavorites from "../../hooks/useFavorites";
import api from "../../api/api.js";
import helpers from "../helpers";
import carouselBreakpoints from "../../helpers/carouselBreakpoints";

import Navbar from "../Navbar/Navbar.styled";
import Title from "../Title/Title.styled";
import Card from "../Card/Card.styled";
import Carousel from "../Carousel/Carousel";
import Hero from "../Hero/Hero.styled";
import Button from "../Button/Button.styled";
import Footer from "../Footer/Footer.styled";

const StyledWrapper = styled.div`
  margin: 6rem auto 0 auto;
  max-width: 1920px;
  max-height: 1080px;

  @media only screen and ${helpers.device.lg} {
    margin: 0 auto;
  }
`;

const StyledImage = styled.img`
  width: 1920px;
  height: auto;
`;

const StyledFavorites = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1rem 0;
`;

const Homepage = () => {
  const { submitRequest } = useData();
  const { favorites, setFavorites, addFavorite, removeFavorite } =
    useFavorites();

  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [topRatedSeries, setTopRatedSeries] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  const fetchData = async (name, location, setState) => {
    name = await submitRequest(location);
    setState(name);
  };

  useEffect(() => {
    const localFavorites = localStorage.getItem("favorites");
    const parsedFavorites = JSON.parse(localFavorites);

    if (parsedFavorites) {
      setFavorites(parsedFavorites);
    }
  }, []);

  useEffect(() => {
    fetchData(popularMovies, url.popularMovies(), setPopularMovies);
    fetchData(upcomingMovies, url.upcomingMovies(), setUpcomingMovies);
    fetchData(popularSeries, url.popularSeries(), setPopularSeries);
    fetchData(topRatedSeries, url.topRatedSeries(), setTopRatedSeries);
    fetchData(topRatedMovies, url.topRatedMovies(), setTopRatedMovies);

    const localFavorites = JSON.stringify(favorites);
    localStorage.setItem("favorites", localFavorites);
  }, [favorites]);

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

      <Title title={"New Releases"} />
      <Carousel breakpoints={carouselBreakpoints}>
        {popularMovies.map((movie, index) => (
          <SwiperSlide key={index}>
            <Card
              image={api.w500images(movie.poster_path)}
              title={movie.original_title}
              rating={movie.vote_average}
              info={movie.overview.substring(0, 180).concat("...")}
              item={movie}
            />
            <StyledFavorites>
              <Button
                title="Add to Favorites"
                onClick={() => addFavorite(movie)}
              />
              <Button
                title="Remove from Favorites"
                onClick={() => removeFavorite(movie)}
              />
            </StyledFavorites>
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
            <StyledFavorites>
              <Button
                title="Add to Favorites"
                onClick={() => addFavorite(movie)}
              />
              <Button
                title="Remove from Favorites"
                onClick={() => removeFavorite(movie)}
              />
            </StyledFavorites>
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
            <StyledFavorites>
              <Button
                title="Add to Favorites"
                onClick={() => addFavorite(tv)}
              />
              <Button
                title="Remove from Favorites"
                onClick={() => removeFavorite(tv)}
              />
            </StyledFavorites>
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
            <StyledFavorites>
              <Button
                title="Add to Favorites"
                onClick={() => addFavorite(movie)}
              />
              <Button
                title="Remove from Favorites"
                onClick={() => removeFavorite(movie)}
              />
            </StyledFavorites>
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
            <StyledFavorites>
              <Button
                title="Add to Favorites"
                onClick={() => addFavorite(movie)}
              />
              <Button
                title="Remove from Favorites"
                onClick={() => removeFavorite(movie)}
              />
            </StyledFavorites>
          </SwiperSlide>
        ))}
      </Carousel>
      <Footer />
    </StyledWrapper>
  );
};

export default Homepage;
