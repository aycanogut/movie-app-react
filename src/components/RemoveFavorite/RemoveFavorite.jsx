import styled from "styled-components";
import PropTypes from "prop-types";

import helpers from "../helpers";

import RemoveFavoriteIcon from "../../assets/icons/delete.svg";

const StyledRemoveFavorite = styled.div`
  /* css */
`;

const StyledIcon = styled.img`
  /* position: absolute; */
  top: 1rem;
  right: 4rem;
  width: 2.4rem;
  height: auto;

  @media only screen and ${helpers.device.md} {
    top: 2rem;
    right: 6rem;
    width: 3.6rem;
  }

  @media only screen and ${helpers.device.lg} {
    right: 7rem;
    width: 4.8rem;
  }
`;

const StyledText = styled.span`
  /* css */
`;

const RemoveFavorite = ({ onClick }) => {
  return (
    <StyledRemoveFavorite onClick={onClick}>
      <StyledIcon src={RemoveFavoriteIcon} />
      <StyledText>Add to Favorites</StyledText>
    </StyledRemoveFavorite>
  );
};

RemoveFavorite.propTypes = {
  onClick: PropTypes.func,
};

export default RemoveFavorite;
