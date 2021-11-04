import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar.styled";
import SearchInput from "../Search/Search.styled";

const StyledHeader = styled.header`
  // css
`;

function Header() {
  return (
    <StyledHeader>
      <Navbar />
      <SearchInput />
    </StyledHeader>
  );
}

export default Header;
