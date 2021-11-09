import React from "react";
import styled from "styled-components";
import { Person } from "react-bootstrap-icons";
import { Gear } from "react-bootstrap-icons";
import helpers from "../helpers";
import Search from "../Search/Search.styled";

const StyledWrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: grid;
  place-items: start;
  height: 20%;
  padding: 22% 4rem;
  color: ${helpers.colors.text};

  @media only screen and ${helpers.device.sm} {
    padding: 25% 8rem;
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

const StyledBadge = styled.span`
  padding: 6px;
  border-radius: 12px;
  background-color: rgba(29, 29, 29, 0.5);
  color: ${helpers.colors.textBadge};
  font-size: 10px;

  @media only screen and ${helpers.device.sm} {
    font-size: 12px;
  }

  @media only screen and ${helpers.device.md} {
    font-size: 14px;
  } ;
`;

const Styledh1 = styled.h1`
  font-size: 22px;
  margin: 1rem 0 0 0;

  @media only screen and ${helpers.device.sm} {
    font-size: 24px;
  }

  @media only screen and ${helpers.device.md} {
    font-size: 32px;
    margin: 2rem 0 2rem 0;
  }

  @media only screen and ${helpers.device.lg} {
    font-size: 64px;
  } ;
`;

const StyledP = styled.p`
  font-size: 12px;

  @media only screen and ${helpers.device.sm} {
    font-size: 14px;
  }

  @media only screen and ${helpers.device.md} {
    font-size: 18px;
    line-height: 1.5;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
`;

const StyledUl = styled.ul`
  display: none;
`;

const Styledli = styled.li`
  list-style: none;
`;

const Hero = () => {
  return (
    <>
      <Search />

      <StyledNav>
        <StyledUl>
          <Styledli>
            <a href="#">
              <Person color="white" size={24} />
            </a>
          </Styledli>
          <Styledli>
            <a href="#">
              <Gear color="white" size={24} />
            </a>
          </Styledli>
        </StyledUl>
      </StyledNav>

      <StyledWrapper>
        <StyledBadge>Science Finction</StyledBadge>
        <Styledh1>Godzilla vs. Kong</Styledh1>
        <StyledP>
          In a time when monsters walk the Earth, humanity’s fight for its
          future sets Godzilla and Kong on a collision course that will see the
          two most powerful forces of nature on the planet collide in a
          spectacular battle for the ages.
        </StyledP>
      </StyledWrapper>
    </>
  );
};

export default Hero;
