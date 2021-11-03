import React from "react";
import styled from "styled-components";
import Card from "../Card/Card.styled";

const StyledCardContainer = styled.section`
  display: flex;
`;

const CardContainer = () => {
  return (
    <StyledCardContainer>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </StyledCardContainer>
  );
};

export default CardContainer;
