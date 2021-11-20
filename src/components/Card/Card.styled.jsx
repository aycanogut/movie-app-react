import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import helpers from "../helpers";

const StyledWrapper = styled.div`
  position: relative;
  transition: 0.3s ease-in-out;
  overflow: hidden;

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
  font-size: 1.2rem;
  color: ${helpers.colors.text};

  @media only screen and ${helpers.device.md} {
    font-size: 1.6rem;
  }

  @media only screen and ${helpers.device.lg} {
    font-size: 1.6rem;
  } ;
`;

const StyledTitle = styled.header`
  font-size: 1.6rem;
  margin: 1rem 0;
  font-weight: ${helpers.fontWeight.extraBold};
  color: ${helpers.colors.text};

  @media only screen and ${helpers.device.md} {
    font-size: 2.6rem;
  }

  @media only screen and ${helpers.device.lg} {
    margin: 2rem 0;
    font-size: 2.4rem;
  } ;
`;

const StyledRating = styled.span`
  font-size: 2.4rem;
  color: ${helpers.colors.textBadge};

  @media only screen and ${helpers.device.md} {
    font-size: 2.9rem;
  }

  @media only screen and ${helpers.device.md} {
    font-size: 3.2rem;
  } ;
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
  image: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  info: PropTypes.string,
};

export default Card;
