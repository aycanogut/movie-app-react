import styled from "styled-components";
import PropTypes from "prop-types";
import helpers from "../helpers";

const StyledTitle = styled.header`
  color: ${helpers.colors.text};
  font-size: 1.6rem;
  margin: 0 0 0 1.4rem;

  @media only screen and ${helpers.device.sm} {
    font-size: 1.8rem;
    margin: 0 0 0 1.8rem;
  }

  @media only screen and ${helpers.device.md} {
    font-size: 2.4rem;
    margin: 0 0 0 2.2rem;
  }

  @media only screen and ${helpers.device.lg} {
    font-size: 3rem;
    margin: 0 0 0 4rem;
  }
`;

import React from "react";

const Title = ({ title }) => {
  return (
    <StyledTitle>
      <p>{title}</p>
    </StyledTitle>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
