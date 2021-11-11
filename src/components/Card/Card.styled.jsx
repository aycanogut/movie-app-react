import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import helpers from "../helpers";

const StyledWrapper = styled.div`
  position: relative;
  display: grid;
  transition: 0.3s ease-in-out;
  cursor: grab;

  img {
    grid-area: 1 / 2;
  }

  /* hover effect for title */
  &:hover p {
    transition: 0.3s ease-out color;
    color: ${helpers.colors.body};
    text-shadow: 2px 2px 2px #fff;
  }
`;

//todo add this components responsive styles
const StyledCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  grid-area: 1 / 2;
  padding: 2rem;
  text-shadow: 2px 2px 3px #000;

  .details {
    display: flex;
    justify-content: space-between;
  }
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
  width: 60%;
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

const StyledButton = styled.button``;

//todo add this components responsive styles
// const StyledGenre = styled.span`
//   font-size: 20px;
//   color: ${helpers.colors.text};
// `;

const Card = ({ image, title, rating, genre, openModal }) => {
  return (
    <StyledWrapper>
      <img src={image} />
      <StyledCardInfo>
        {/* <StyledGenre>{genre}</StyledGenre> */}
        <StyledTitle>{title}</StyledTitle>
        <div className="details">
          <StyledRating>{rating} Points</StyledRating>
          <StyledButton onClick={openModal}>Details</StyledButton>
        </div>
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
