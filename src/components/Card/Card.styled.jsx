import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import helpers from "../helpers";

const StyledWrapper = styled.div`
  position: relative;
  transition: 0.3s ease-in-out;
  cursor: grab;

  img {
    grid-area: 1 / 2;
  }

  /* hover effect for movie details */

  &:hover .overflow {
    transition: 0.3s ease-in-out;
    transform: translateX(0);
  }
`;

const StyledCardOverflow = styled.div`
  position: absolute;
  inset: 0;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  transform: translateX(100%);
  transition: 0.3s ease-in-out;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 1.2rem;
`;

//todo add this components responsive styles
const StyledCardInfo = styled.p`
  font-size: 12px;
  color: ${helpers.colors.text};
`;

const StyledTitle = styled.p`
  font-size: 18px;
  margin: 1rem 0;
  font-weight: ${helpers.fontWeight.extraBold};
  color: ${helpers.colors.text};

  @media only screen and ${helpers.device.md} {
    font-size: 22px;
  }

  @media only screen and ${helpers.device.lg} {
    margin: 2rem 0;
    font-size: 28px;
  } ;
`;

//todo add this components responsive styles
const StyledRating = styled.span`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 10%;
  padding: 0.2rem;
  border-radius: 20px;
  font-size: 12px;
  background-color: rgba(0, 0, 0, 0.5);
  color: ${helpers.colors.textBadge};

  @media only screen and ${helpers.device.sm} {
    padding: 0.4rem;
    font-size: 14px;
  }

  @media only screen and ${helpers.device.md} {
    font-size: 16px;
  }

  @media only screen and ${helpers.device.lg} {
  }
`;

const Card = ({ image, title, rating, info }) => {
  return (
    <StyledWrapper>
      <StyledCardOverflow className="overflow">
        <StyledRating>{rating}</StyledRating>
        <StyledCardInfo>{info}</StyledCardInfo>
        <StyledTitle>{title}</StyledTitle>
      </StyledCardOverflow>
      <img src={image} />
    </StyledWrapper>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  info: PropTypes.string.isRequired,
};

export default Card;
