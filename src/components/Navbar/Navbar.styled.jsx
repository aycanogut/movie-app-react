import React from "react";
import styled from "styled-components";
import helpers from "../helpers";
import NavLogo from "../../assets/images/nav-brand.png";
import { House } from "react-bootstrap-icons";
import { Search } from "react-bootstrap-icons";

import { Star } from "react-bootstrap-icons";

const StyledNavbar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 0.6rem 0;

  @media only screen and ${helpers.device.sm} {
  }

  @media only screen and ${helpers.device.md} {
    padding: 0.8rem 0;
  }

  @media only screen and ${helpers.device.lg} {
    flex-direction: column;
    justify-content: flex-start;
    width: 6rem;
    height: 70%;
    padding: 4rem 0;
  }
`;

const StyledBadge = styled.img`
  width: 38px;
  height: 38px;

  @media only screen and ${helpers.device.sm} {
    width: 42px;
    height: 42px;
  }

  @media only screen and ${helpers.device.md} {
    width: 48px;
    height: 48px;
  }

  @media only screen and ${helpers.device.lg} {
    width: 50px;
    height: 50px;
  }
`;

const StlyedUl = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  list-style: none;
  padding: 0;

  @media only screen and ${helpers.device.sm} {
    gap: 5rem;
  }

  @media only screen and ${helpers.device.md} {
    gap: 12rem;
  }

  @media only screen and ${helpers.device.lg} {
    flex-direction: column;
    gap: 9rem;
    padding: 8rem 0;
  }
`;

const StyledList = styled.li``;

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledBadge src={NavLogo} alt="" />
      <StlyedUl>
        <StyledList>
          <a href="#">
            <House color="white" size={24} />
          </a>
        </StyledList>
        <StyledList>
          <a href="#">
            <Search color="white" size={24} />
          </a>
        </StyledList>
        <StyledList>
          <a href="#">
            <Star color="white" size={24} />
          </a>
        </StyledList>
      </StlyedUl>
    </StyledNavbar>
  );
};

export default Navbar;
