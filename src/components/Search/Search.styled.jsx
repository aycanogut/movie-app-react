import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Search } from "react-bootstrap-icons";

const StyledInput = styled.input`
  background-color: #313131;
  width: 100%;
  border-style: none;
  padding-left: 10px;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 10px;
  margin-left: 20px;
  width: 30%;
  position: fixed;
  right: 300px;
  top: 20px;
  background-color: #313131;
`;

const SearchInput = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <SearchBox>
        <Search size={24} color="gray" />
        <StyledInput
          placeholder="Search Movie"
          value={searchValue}
          onChange={handleSearchInputChanges}
        />
      </SearchBox>
    </div>
  );
};

export default SearchInput;
