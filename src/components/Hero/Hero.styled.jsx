import PropTypes from "prop-types";
import styled from "styled-components";

import helpers from "../helpers";

// header title
export const StyledHero = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: grid;
  place-items: start;
  height: 20%;
  padding: 10% 4rem;
  color: ${helpers.colors.text};
  text-shadow: 2px 2px 5px #000;

  @media only screen and ${helpers.device.sm} {
    padding: 20% 8rem;
  }

  @media only screen and ${helpers.device.md} {
    max-width: 500px;
    padding: 20% 12rem;
  }

  @media only screen and ${helpers.device.lg} {
    max-width: 600px;
    padding: 12rem;
    margin: 10rem;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 2.2rem;
  margin: 1rem 0 0 0;

  @media only screen and ${helpers.device.sm} {
    font-size: 2.4rem;
  }

  @media only screen and ${helpers.device.md} {
    font-size: 3.2rem;
    margin: 2rem 0 2rem 0;
  }

  @media only screen and ${helpers.device.lg} {
    font-size: 6.4rem;
  } ;
`;
export const StyledText = styled.p`
  font-size: 1.2rem;

  @media only screen and ${helpers.device.sm} {
    font-size: 1.4rem;
  }

  @media only screen and ${helpers.device.md} {
    font-size: 1.8rem;
    line-height: 1.5;
  }
`;

function Hero({ title, text }) {
  return (
    <StyledHero>
      <StyledTitle>{title}</StyledTitle>
      <StyledText>{text}</StyledText>
    </StyledHero>
  );
}

Hero.propTypes = {
  badge: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Hero;
