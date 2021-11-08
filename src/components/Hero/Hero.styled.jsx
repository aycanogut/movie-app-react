import React from 'react'
import { Person } from "react-bootstrap-icons";
import { Gear } from "react-bootstrap-icons";
import styled from "styled-components";
import Image from "../../assets/images/godzilla.jpg";
import Search from "../Search/Search.styled";


const StyledBadge = styled.span`
  width: 150px;
  padding: 10px;
  border-radius: 12px;
  background-color: rgba(29, 29, 29, 0.5);
  color: #0feffd;
  font-size: 14px;
  text-align: center;
`;
const StyledUl = styled.ul`
 display: flex;
`;

const StyledNav = styled.nav`
 display: flex;
justify-content: flex-end;
`;

const Styledli = styled.li`
  list-style: none;
`;

const StyledContent = styled.div`
  margin-top:200px;
  padding-left: 60px;
  width: 700px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color:white;
  font-size: 24px;
`;

const StyledP = styled.p`
font-size: 15px;
`;

const Styledh1= styled.h1`
font-size: 40px;
`;

const Background = styled.div`
 background-image:url(${Image});
 background-repeat: no-repeat;
 background-size: cover;
 position:absolute;
 margin-left:56px;
 width: 100%;
 height: 100%;
`;


const Header = () => {
    return (
    <>
    <Search/>
    <Background>
    <StyledNav>
      <StyledUl>
        <Styledli><a href=""><Person color="white" size={24} /></a></Styledli>
        <Styledli><a href=""><Gear color="white" size={24} /></a></Styledli>
      </StyledUl>
    </StyledNav>

    <StyledContent>
    <StyledBadge>Science Finction</StyledBadge>
    <Styledh1>Godzilla vs. Kong</Styledh1>
    <StyledP>The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity.</StyledP>
    </StyledContent>
    </Background>
    </>
    );
};