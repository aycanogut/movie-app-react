import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import helpers from "../helpers";

import Icon from "../Icon/Icon.styled";

import House from "../../assets/icons/house.svg";
import Search from "../../assets/icons/search.svg";
import Star from "../../assets/icons/star.svg";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  margin: 2rem 0 0 0;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);

  @media only screen and ${helpers.device.sm} {
    margin: 3rem 0 0 0;
    padding: 1.6rem;
  }

  @media only screen and ${helpers.device.md} {
    margin: 4rem 0 0 0;
    padding: 2.4rem;
  }

  @media only screen and ${helpers.device.md} {
    margin: 5rem 0 0 0;
    padding: 3rem;
  }
`;

const StlyedUl = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  list-style: none;
  padding: 0;

  @media only screen and ${helpers.device.sm} {
    gap: 5rem;
  }

  @media only screen and ${helpers.device.md} {
    gap: 12rem;
  }

  @media only screen and ${helpers.device.lg} {
    gap: 30rem;
  }
`;

const StyledList = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

const StyledText = styled.p`
  color: ${helpers.colors.text};
  text-decoration: none;
  font-size: 1.3rem;

  @media only screen and ${helpers.device.sm} {
    font-size: 1.8rem;
  }

  @media only screen and ${helpers.device.md} {
    font-size: 2.4rem;
  }

  @media only screen and ${helpers.device.lg} {
    font-size: 2.6rem;
  }
`;

const Footer = ({ source, alternative }) => {
  const LinkStyles = {
    display: "flex",
    alignItems: "center",
  };

  return (
    <StyledFooter>
      <StlyedUl>
        <StyledList>
          <Link to="/" style={LinkStyles}>
            <Icon
              src={source}
              source={House}
              alternative={"Home icon"}
              alt={alternative}
            />
            <StyledText style={{ marginLeft: 12 }}>Home</StyledText>
          </Link>
        </StyledList>
        <StyledList>
          <Link to="/search" style={LinkStyles}>
            <Icon
              src={source}
              source={Search}
              alternative={"Search icon"}
              alt={alternative}
            />
            <StyledText style={{ marginLeft: 12 }}>Search</StyledText>
          </Link>
        </StyledList>
        <StyledList>
          <Link to="/favorites" style={LinkStyles}>
            <Icon
              src={source}
              source={Star}
              alternative="Favorites icon"
              alt={alternative}
            />
            <StyledText style={{ marginLeft: 12 }}>Favorites</StyledText>
          </Link>
        </StyledList>
      </StlyedUl>
    </StyledFooter>
  );
};

Footer.propTypes = {
  source: PropTypes.string,
  alternative: PropTypes.string,
};

export default Footer;
