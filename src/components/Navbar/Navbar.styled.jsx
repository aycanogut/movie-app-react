import React from "react";
import styled from "styled-components";
import NavLogo from "../../assets/images/nav-brand.png";
import { House } from "react-bootstrap-icons";
import { Film } from "react-bootstrap-icons";
import { Tv } from "react-bootstrap-icons";
import { Star } from "react-bootstrap-icons";

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  width: 56px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
`;

const StyledImg = styled.img`
  width: 50px;
  height: auto;
  margin: 40px 0 64px 0;
`;

const StlyedUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 90px;
  list-style: none;
  padding: 0;
`;

const StyledList = styled.li``;

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledImg src={NavLogo} alt="" />
      <StlyedUl>
        <StyledList>
          <a href="#">
            <House color="white" size={32} />
          </a>
        </StyledList>
        <StyledList>
          <a href="#">
            <Film color="white" size={32} />
          </a>
        </StyledList>
        <StyledList>
          <a href="#">
            <Tv color="white" size={32} />
          </a>
        </StyledList>
        <StyledList>
          <a href="#">
            <Star color="white" size={32} />
          </a>
        </StyledList>
      </StlyedUl>
    </StyledNavbar>
  );
};

export default Navbar;
