import React from 'react';
import styled from "styled-components";

const StyledInput=styled.input`

border-radius:20px;
background-color:#313131;
width: 400px;
height: 46px;
display: flex;
justify-content: center;
padding:10px;

`;
export default function Search() {
    return (
        <div>
            <StyledInput type="text"  placeholder="Search"/>
        </div>
    )
}
