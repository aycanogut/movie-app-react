import React from "react";
import styled from "styled-components";
import helpers from "../helpers";
import Title from "../Title/Title.styled";
import Card from "../Card/Card.styled";
import { CaretRight } from "react-bootstrap-icons";

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
