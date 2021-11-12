import React from "react";
import styled from "styled-components";
import { Search } from "react-bootstrap-icons";
import helpers from "../helpers";

const StyledInput = styled.input`
  width: 100%;
  font-size: 12px;
  background-color: ${helpers.colors.body};
  border: none;

  &::placeholder {
    color: ${helpers.colors.text};
  }
`;

const SearchBox = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 70%;
  margin: 2rem auto;
  padding: 1rem;
  background-color: ${helpers.colors.body};
  border: 1px solid gray;
  border-radius: 3rem;

  @media only screen and ${helpers.device.md} {
    width: 50%;
  }

  @media only screen and ${helpers.device.lg} {
    position: absolute;
    width: 40%;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1;
  } ;
`;

const SearchInput = () => {
  return (
    <>
      <SearchBox>
        <Search size={24} color="white" style={{ marginRight: 12 }} />
        <StyledInput placeholder="Search Movie" />
      </SearchBox>
    </>
  );
};

export default SearchInput;
