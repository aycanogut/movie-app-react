import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import api from "../../api/api.js";
import helpers from "../helpers";
import fallbackImage from "../../assets/images/fallback-card-image.png";
import Title from "../Title/Title.styled";
import Card from "../Card/Card.styled";

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

const StyledHeader = styled.header`
  display: flex;
  align-content: center;
  margin: 1rem;
  color: ${helpers.colors.text};
`;

const CardContainer = ({ search }) => {
  return (
    <>
      <StyledHeader>
        <Title title={"Results"} />
      </StyledHeader>
      <StyledCardContainer>
        {search.map((item, index) => (
          <Card
            key={index}
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
        ))}
      </StyledCardContainer>
    </>
  );
};

CardContainer.propTypes = {
  search: PropTypes.array,
};

export default CardContainer;
