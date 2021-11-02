import React from "react";
import styled from "styled-components";
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
  bottom: 104px;
  padding: 10px;
  border-radius: 12px;
  background-color: rgba(29, 29, 29, 0.5);
  color: #0feffd;
  font-size: 14px;
`;

const StyledTitle = styled.header`
  position: absolute;
  left: 24px;
  bottom: 24px;
  color: #fff;
  font-size: 28px;
`;

const Card = () => {
  return (
    <StyledCard>
      <StyledImg src={CardImage} />
      <StyledBadge>Fantasy</StyledBadge>
      <StyledTitle>Wonder Woman</StyledTitle>
    </StyledCard>
  );
};

export default Card;
