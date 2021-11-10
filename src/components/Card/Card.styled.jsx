import React from "react";
import PropTypes from "prop-types";

const Card = ({ image }) => {
  return <img src={image} />;
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Card;
