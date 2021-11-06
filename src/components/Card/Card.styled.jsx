import React from "react";
import styled from "styled-components";
import helpers from "../helpers";
import CardImage from "../../assets/images/img.png";

const StyledCard = styled.article`
  position: relative;
`;

const StyledImg = styled.img`
  /* css */
`;

const StyledBadge = styled.span`
  position: absolute;
  left: 24px;
  bottom: 64px;
  padding: 10px;
  border-radius: 12px;
  background-color: rgba(29, 29, 29, 0.5);
  color: ${helpers.colors.textBadge};
  font-size: 14px;
`;

const StyledTitle = styled.header`
  position: absolute;
  left: 24px;
  bottom: 24px;
  color: ${helpers.colors.text};

  font-size: 24px;
`;

const Card = () => {
  return (
    <StyledCard>
      <StyledImg src={CardImage} />
      <StyledBadge>Fantasy</StyledBadge>
      <StyledTitle>Wonder Woman 1984</StyledTitle>
    </StyledCard>
  );
};

export default Card;
