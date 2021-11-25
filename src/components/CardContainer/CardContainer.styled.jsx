import { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import useFavorites from "../../hooks/useFavorites";
import api from "../../api/api";
import helpers from "../helpers";
import fallbackImage from "../../assets/images/fallback-card-image.png";

import Card from "../Card/Card.styled";
import Button from "../Button/Button.styled";

const StyledCardContainer = styled.section`
  display: grid;
  place-items: center;
  gap: 2.4rem;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 1rem;

  @media only screen and ${helpers.device.sm} {
    grid-template-columns: 1fr 1fr;

    padding: 0 2rem;
  }

  @media only screen and ${helpers.device.md} {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0 3rem;
  }

  @media only screen and ${helpers.device.lg} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    padding: 0 5rem;
  }
`;

const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledFavorites = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1rem 0;
`;

const CardContainer = ({ cardContainer }) => {
  const { favorites, setFavorites, addFavorite, removeFavorite } =
    useFavorites();

  useEffect(() => {
    const localFavorites = localStorage.getItem("favorites");
    const parsedFavorites = JSON.parse(localFavorites);

    parsedFavorites ? setFavorites(parsedFavorites) : setFavorites([]);
  }, []);

  useEffect(() => {
    const localFavorites = JSON.stringify(favorites);
    localStorage.setItem("favorites", localFavorites);
  }, [favorites]);

  return (
    <StyledCardContainer>
      {cardContainer.map((item, index) => (
        <StyledCardWrapper key={index}>
          <Card
            image={
              item.poster_path === null || item.poster_path === undefined
                ? fallbackImage
                : api.w500images(item.poster_path)
            }
            title={
              item.original_title || item.original_name
                ? item.original_title || item.original_name
                : "No title"
            }
            rating={
              item.vote_average === 0 ||
              item.vote_average === undefined ||
              !item.vote_average
                ? "None"
                : item.vote_average
            }
            info={
              item.overview === null ||
              item.overview === undefined ||
              !item.overview
                ? `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Di
                stinctio necessitatibus debitis esse aliquid.`
                : item.overview.slice(0, 100)
            }
          />
          <StyledFavorites>
            <Button
              title="Add to Favorites"
              onClick={() => addFavorite(item)}
            />
            <Button
              title="Remove from Favorites"
              onClick={() => removeFavorite(item)}
            />
          </StyledFavorites>
        </StyledCardWrapper>
      ))}
    </StyledCardContainer>
  );
};

CardContainer.propTypes = {
  cardContainer: PropTypes.array,
};

export default CardContainer;
