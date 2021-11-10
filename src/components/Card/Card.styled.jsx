import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import helpers from "../helpers";

const StyledCard = styled.article`
  /* position: relative; */
`;

const StyledImg = styled.img`
  /* css */
`;

const StyledTitle = styled.header`
  position: absolute;
  left: 24px;
  bottom: 24px;
  color: ${helpers.colors.text};

  font-size: 24px;
`;

const Card = ({ image, title }) => {
  return (
    <StyledCard>
      <StyledImg src={image} />
      <StyledTitle>{title}</StyledTitle>
    </StyledCard>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
