import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar.styled";
import Search from "../Search/Search.styled";

const StyledHeader = styled.header`
  // css
`;

function Header() {
  return (
    <StyledHeader>
      <Navbar />
      <Search />
    </StyledHeader>
  );
}

export default Header;
