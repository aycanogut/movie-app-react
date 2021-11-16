import React, { useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Search } from "react-bootstrap-icons";
import helpers from "../helpers";

const SearchBox = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 70%;
  margin: 2rem auto;
  padding: 1rem 1rem 1rem 2rem;
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

const StyledInput = styled.input`
  width: 100%;
  font-size: 12px;
  background-color: ${helpers.colors.body};
  border: none;

  &:focus {
    outline: none;
    border: none;
  }

  &::placeholder,
  &:focus,
  &:focus-visible {
    color: ${helpers.colors.text};
  }
`;

const StyledSubmit = styled.div`
  cursor: pointer;
`;

const SearchInput = ({ submitSearch }) => {
  const inputRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;

    submitSearch(value);
    inputRef.current.value = "";
  };

  const onKeyDown = (e) => {
    e.code === "Enter" || e.code === "NumpadEnter" ? handleSearch(e) : null;
  };

  return (
    <>
      <SearchBox>
        <StyledInput
          placeholder="Search something.."
          ref={inputRef}
          onSubmit={handleSearch}
          onKeyDown={(e) => onKeyDown(e)}
        />
        <StyledSubmit>
          <Search
            size={24}
            color="white"
            style={{ marginRight: 12 }}
            onClick={handleSearch}
          />
        </StyledSubmit>
      </SearchBox>
    </>
  );
};

SearchInput.propTypes = {
  submitSearch: PropTypes.func,
};

export default SearchInput;
