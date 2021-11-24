import styled from "styled-components";
import PropTypes from "prop-types";

import useFavorites from "../../hooks/useFavorites";
import helpers from "../helpers";

import RemoveFavoriteIcon from "../../assets/icons/delete.svg";

const StyledIcon = styled.img`
  position: absolute;
  top: 1rem;
  right: 0.6rem;
  width: 2.4rem;
  height: auto;

  @media only screen and ${helpers.device.md} {
    top: 2rem;
    right: 1rem;
    width: 3.6rem;
  }

  @media only screen and ${helpers.device.lg} {
    right: 1.2rem;
    width: 4.8rem;
  }
`;

const RemoveFavorite = ({ item }) => {
  const { removeFavorite } = useFavorites();

  return (
    <StyledIcon src={RemoveFavoriteIcon} onClick={() => removeFavorite(item)} />
  );
};

RemoveFavorite.propTypes = {
  item: PropTypes.object,
};

export default RemoveFavorite;
