import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar.styled";
import Carousel from "../Carousel/Carousel";

const StyledHeader = styled.header`
  margin: 0 auto 4.5rem auto;
  max-width: 1920px;
  max-height: 1080px;
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
