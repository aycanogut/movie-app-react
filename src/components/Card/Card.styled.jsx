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

  .overflow {
  }
  /* hover effect for movie details */
  &:hover .overflow {
    transition: 0.3s ease-in-out;
    transform: translateY(0);
  }

  &::last-child {
  }
`;
// todo update card hover effect one last one (upper block)

const StyledCardOverflow = styled.div`
  position: absolute;
  inset: 0;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  transform: translateY(100%);
  transition: 0.3s ease-in-out;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 1rem;

  @media only screen and ${helpers.device.md} {
    padding: 2rem;
  } ;
`;

const StyledCardInfo = styled.p`
  font-size: 12px;
  color: ${helpers.colors.text};

  @media only screen and ${helpers.device.md} {
    font-size: 16px;
  }

  @media only screen and ${helpers.device.lg} {
    font-size: 18px;
  } ;
`;

const StyledTitle = styled.header`
  font-size: 16px;
  margin: 1rem 0;
  font-weight: ${helpers.fontWeight.extraBold};
  color: ${helpers.colors.text};

  @media only screen and ${helpers.device.md} {
    font-size: 26px;
  }

  @media only screen and ${helpers.device.lg} {
    margin: 2rem 0;
    font-size: 24px;
  } ;
`;

const StyledRating = styled.span`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
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
    width: 40%;
    font-size: 16px;
  }

  @media only screen and ${helpers.device.lg} {
    width: 30%;
  }
`;

const Card = ({ image, title, rating, info }) => {
  return (
    <StyledWrapper>
      <StyledCardOverflow className="overflow">
        <StyledRating>Rating: {rating}</StyledRating>
        <StyledCardInfo>{info}</StyledCardInfo>
        <StyledTitle>{title}</StyledTitle>
      </StyledCardOverflow>
      <img src={image} />
    </StyledWrapper>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.number,
  info: PropTypes.string,
};

export default Card;
