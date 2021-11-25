import styled from "styled-components";
import PropTypes from "prop-types";

import helpers from "../helpers";

const StyledButton = styled.button`
  transition: 0.3s ease-in-out;
  padding: 0;
  margin: 0;
  font-size: 0.8rem;
  background-color: transparent;
  color: ${helpers.colors.text};
  border: 1px solid ${helpers.colors.text};
  cursor: pointer;

  &:hover {
    transition: 0.3s ease-in-out;
    border: 1px solid #ffcc11;
    color: #ffcc11;
  }

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
