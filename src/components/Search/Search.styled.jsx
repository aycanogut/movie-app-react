import React from 'react';
import { useState } from 'react';
import styled from "styled-components";

const StyledInput=styled.input`
    background-color:#313131;
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
  background-color:#313131;
`;
const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;


const Search = ({search})=>{

        const [searchValue, setSearchValue] = useState("");
      
        const handleSearchInputChanges = e => {
          setSearchValue(e.target.value);
        };
      
       
    return (
        <div>
           
        
        <SearchBox>
           <SearchIcon src="src/assets/icons/search-icon.svg" />  
           <StyledInput
            placeholder="Search Movie"
            value={searchValue}
            onChange={handleSearchInputChanges}
          />
        </SearchBox>
        </div>
    );
};

export default Search;
