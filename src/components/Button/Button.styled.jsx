import styled from "styled-components";
import PropTypes from "prop-types";

import helpers from "../helpers";

const StyledButton = styled.button`
  font-size: 0.8rem;
  padding: 0;
  margin: 0;

  @media only screen and ${helpers.device.sm} {
    font-size: 1rem;
  }

  @media only screen and ${helpers.device.md} {
    font-size: 1.3rem;
  }

  @media only screen and ${helpers.device.lg} {
    font-size: 1.6rem;
    padding: 0.4rem;
  } ;
`;

const Button = ({ onClick, title }) => {
  return <StyledButton onClick={onClick}>{title}</StyledButton>;
};

Button.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
};

export default Button;
