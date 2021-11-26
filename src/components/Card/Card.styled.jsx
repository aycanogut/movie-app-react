import styled from "styled-components";
import PropTypes from "prop-types";

import helpers from "../helpers";

const StyledWrapper = styled.div`
  position: relative;
  transition: 0.3s ease-in-out;
  overflow: hidden;

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
  transform: translateY(100%);
  transition: 0.3s ease-in-out;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 1rem;

  @media only screen and ${helpers.device.md} {
    padding: 2rem;
  }

  @media only screen and ${helpers.device.lg} {
    padding: 3rem;
  }
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
    padding-block: 1rem;
    text-align: center;
    font-size: 2.8rem;
  } ;
`;

const StyledCardInfo = styled.p`
  overflow: hidden;
  font-size: 1.2rem;
  color: ${helpers.colors.text};

  @media only screen and ${helpers.device.md} {
    font-size: 1.6rem;
  }

  @media only screen and ${helpers.device.lg} {
    padding-block: 2rem;
    text-align: justify;
    font-size: 2rem;
  } ;
`;

const StyledRating = styled.span`
  margin: auto 0 0 0;
  font-size: 2.4rem;
  color: ${helpers.colors.textBadge};

  @media only screen and ${helpers.device.md} {
    font-size: 2.9rem;
  }

  @media only screen and ${helpers.device.md} {
    margin: auto auto 0 auto;
    font-size: 3.2rem;
  } ;
`;

const StyledImg = styled.img`
  width: auto;
  height: auto;
`;

const Card = ({ image, title, rating, info }) => {
  return (
    <StyledWrapper>
      <StyledCardOverflow className="overflow">
        <StyledTitle>{title}</StyledTitle>
        <StyledCardInfo>{info}</StyledCardInfo>
        <StyledRating>{rating}</StyledRating>
      </StyledCardOverflow>
      <StyledImg src={image} alt="Movie card" />
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
