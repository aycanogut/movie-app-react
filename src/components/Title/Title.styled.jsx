import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h4`
  font-size: 2.4em;
  font-weight: 500;
  margin: 0;
`;

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
