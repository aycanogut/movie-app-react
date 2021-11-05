import React from "react";
import styled from "styled-components";
import helpers from "../helpers";
import CardContainer from "../CardContainer/CardContainer.styled";

const StyledWrapper = styled.div`
  max-width: 300px;
  margin: 0 auto;

  @media only screen and ${helpers.device.sm} {
    max-width: 450px;
  }

  @media only screen and ${helpers.device.md} {
    max-width: 700px;
  }

  @media only screen and ${helpers.device.lg} {
    max-width: 1000px;
  }
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <CardContainer />
    </StyledWrapper>
  );
};

export default Wrapper;
