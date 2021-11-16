import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { CaretRight } from "react-bootstrap-icons";
import { api } from "../../hooks/useData";
import helpers from "../helpers";
import Title from "../Title/Title.styled";
import Card from "../Card/Card.styled";

const StyledCardContainer = styled.section`
  display: grid;
  place-items: center;
  gap: 3rem;

  @media only screen and ${helpers.device.sm} {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and ${helpers.device.md} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and ${helpers.device.lg} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  align-content: center;
  margin-block: 4rem;
  color: ${helpers.colors.text};
`;

const StyledTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContainer = ({ search }) => {
  return (
    <>
      <StyledHeader>
        <StyledTitleWrapper>
          <Title title={"Results"} />
          <CaretRight color="white" size={24} />
        </StyledTitleWrapper>
      </StyledHeader>
      <StyledCardContainer>
        {search.map((item, index) => (
          <Card
            key={index}
            image={api.w500images(item.poster_path)}
            title={item.original_title || item.original_name}
            rating={item.vote_average}
            info={item.overview.substring(0, 180) + "..."}
          />
        ))}
      </StyledCardContainer>
    </>
  );
};

CardContainer.propTypes = {
  search: PropTypes.array,
};

export default CardContainer;
