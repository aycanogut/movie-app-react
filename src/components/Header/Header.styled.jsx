import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar.styled";
import Carousel from "../Carousel/Carousel";

const StyledHeader = styled.header``;

function Header() {
  return (
    <StyledHeader>
      <Carousel />
      <Navbar />
    </StyledHeader>
  );
}

export default Header;
