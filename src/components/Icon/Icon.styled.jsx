import styled from "styled-components";
import PropTypes from "prop-types";

import helpers from "../helpers";

const StyledIcon = styled.img`
  width: 2.2rem;
  height: 2.2rem;

  @media only screen and ${helpers.device.md} {
    width: 2.4rem;
    height: 2.4rem;
  }

  @media only screen and ${helpers.device.lg} {
    width: 3rem;
    height: 3rem;
  } ;
`;

function Icon({ source }) {
  return <StyledIcon src={source} />;
}

Icon.propTypes = {
  source: PropTypes.string.isRequired,
};

export default Icon;
