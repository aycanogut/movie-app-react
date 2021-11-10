import React from "react";
import styled from "styled-components";
import helpers from "../helpers";
import Navbar from "../Navbar/Navbar.styled";
import Carousel from "../Carousel/Carousel";

const StyledHeader = styled.header`
  margin: 6rem auto 0 auto;
  max-width: 1920px;
  max-height: 1080px;

  @media only screen and ${helpers.device.lg} {
    margin: 0 auto;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Carousel />
      <Navbar />
    </StyledHeader>
  );
}

export default Header;
