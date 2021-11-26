import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import helpers from "../helpers";

import Icon from "../Icon/Icon.styled";

import NavLogo from "../../assets/images/nav-brand.png";
import House from "../../assets/icons/house.svg";
import Search from "../../assets/icons/search.svg";
import Star from "../../assets/icons/star.svg";

const StyledNavbar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
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

const Navbar = ({ source, alternative }) => {
  return (
    <StyledNavbar>
      <Link to="/">
        <StyledBadge src={NavLogo} alt="Nav brand logo" />
      </Link>
      <StlyedUl>
        <StyledList>
          <Link to="/">
            <Icon
              src={source}
              source={House}
              alternative={"Home icon"}
              alt={alternative}
            />
          </Link>
        </StyledList>
        <StyledList>
          <Link to="/search">
            <Icon
              src={source}
              source={Search}
              alternative={"Search icon"}
              alt={alternative}
            />
          </Link>
        </StyledList>
        <StyledList>
          <Link to="/favorites">
            <Icon
              src={source}
              source={Star}
              alternative={"Favorites icon"}
              alt={alternative}
            />
          </Link>
        </StyledList>
      </StlyedUl>
    </StyledNavbar>
  );
};

Navbar.propTypes = {
  source: PropTypes.string,
  alternative: PropTypes.string,
};

export default Navbar;
