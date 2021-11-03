import React from "react";
import styled from "styled-components";
import Title from "../Title/Title.styled";
import Card from "../Card/Card.styled";
import { CaretRight } from "react-bootstrap-icons";

const StyledCardContainer = styled.section`
  display: flex;
`;

const StyledHeader = styled.header`
  display: flex;
  align-content: center;
`;

const CardContainer = () => {
  return (
    <>
      <StyledHeader>
        <Title>New Releases</Title>
        <CaretRight color="black" size={24} />
      </StyledHeader>
      <StyledCardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </StyledCardContainer>
    </>
  );
};

export default CardContainer;
