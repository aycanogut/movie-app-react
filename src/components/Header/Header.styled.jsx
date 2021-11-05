import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar.styled";
import SearchInput from "../Search/Search.styled";
import Carousel from "../Carousel/Carousel";

const StyledHeader = styled.header`
  position: relative;
`;

function Header() {
  return (
    <StyledHeader>
      <Carousel />
      <Navbar />
      <SearchInput />
    </StyledHeader>
  );
}

export default Header;
