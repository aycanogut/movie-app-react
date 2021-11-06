import React from "react";
import styled from "styled-components";
import { CaretRight } from "react-bootstrap-icons";
import helpers from "../helpers";
import Title from "../Title/Title.styled";
import Card from "../Card/Card.styled";

const StyledCardContainer = styled.section`
  display: grid;
  place-items: center;
  gap: 3rem;

  @media only screen and ${helpers.device.sm} {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and ${helpers.device.md} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and ${helpers.device.lg} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  align-content: center;
  margin-block: 4rem;
  color: ${helpers.colors.text};
`;

const CardContainer = () => {
  return (
    <>
      <StyledHeader>
        <Title>Movies</Title>
        <CaretRight color="white" size={24} />
      </StyledHeader>
      <StyledCardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
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
