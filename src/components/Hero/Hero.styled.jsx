import React from "react";
import styled from "styled-components";
import { Person } from "react-bootstrap-icons";
import { Gear } from "react-bootstrap-icons";
import helpers from "../helpers";
import Search from "../Search/Search.styled";

const StyledWrapper = styled.section`
  /* margin-top: 200px;
  padding-left: 60px;
  width: 700px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: white;
  font-size: 24px; */
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 8rem 4rem;
  color: ${helpers.colors.text};
`;

const StyledBadge = styled.span`
  padding: 6px;
  border-radius: 12px;
  background-color: rgba(29, 29, 29, 0.5);
  color: ${helpers.colors.textBadge};
  font-size: 10px;
`;

const Styledh1 = styled.h1`
  font-size: 22px;
`;

const StyledP = styled.p`
  font-size: 12px;
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
          The world is beset by the appearance of monstrous creatures, but one
          of them may be the only one who can save humanity.
        </StyledP>
      </StyledWrapper>
    </>
  );
};

export default Hero;
