import React from "react";
import styled from "styled-components";
import helpers from "../helpers";

const StyledTitle = styled.h4`
  color: ${helpers.colors.text}
  font-size: 2.4em;
  font-weight: 500;
  margin: 0;
`;

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
