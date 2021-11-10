import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import helpers from "../helpers";

const StyledWrapper = styled.div`
  position: relative;
  display: grid;

  img {
    grid-area: 1 / 2;
  }
`;
//todo add this components responsive styles
const StyledCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  grid-area: 1 / 2;
  padding: 4rem;
  text-shadow: 2px 2px 5px #000;
`;

const StyledTitle = styled.p`
  font-size: 18px;
  font-weight: ${helpers.fontWeight.extraBold};
  color: ${helpers.colors.text};

  @media only screen and ${helpers.device.md} {
    font-size: 22px;
  }

  @media only screen and ${helpers.device.lg} {
    font-size: 32px;
  } ;
`;

//todo add this components responsive styles
const StyledRating = styled.span`
  font-size: 20px;
  color: ${helpers.colors.text};
`;

//todo add this components responsive styles
const StyledGenre = styled.span`
  font-size: 20px;
  color: ${helpers.colors.text};
`;

const Card = ({ image, title, rating, genre }) => {
  return (
    <StyledWrapper>
      <img src={image} />
      <StyledCardInfo>
        <StyledRating>{rating}</StyledRating>
        <StyledGenre>{genre}</StyledGenre>
        <StyledTitle>{title}</StyledTitle>
      </StyledCardInfo>
    </StyledWrapper>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  genre: PropTypes.array,
};

export default Card;
