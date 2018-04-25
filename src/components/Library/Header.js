import React from 'react';
import Link from 'gatsby-link';

// Styles
import styled from 'styled-components';
import { maxWidth, colors, transition, textShadow } from '../../styles/sharedValues';

const OuterContainer = styled.header`
  background: ${ colors.bodyBackground };
  padding: 1.5rem;
`;

const InnerContainer = styled.div`
  max-width: ${maxWidth.large};
  padding: 0 2rem;
  margin: 0 auto;
  align-items: center;
  display: flex;
  height: 100%;
`;

const HeaderLink = styled(Link)`
  font-size: ${props => props.title ? '1.8rem' : '1.4rem'};
  text-decoration: none;
  margin: ${props => props.title ? '0 auto 0 0' : '0 0 0 auto'};
  color: #FFFFFF;

  ${ props => { if (props.alt) {
      return `
        transition: ${transition.fast};
        letter-spacing: 0.2rem;
        text-transform: uppercase;
        position: relative;
        text-shadow: ${textShadow};

        &:hover {
          color: ${colors.accent};
        }
      `;
    }
  }};
`;

const Bad = styled.span`
  color: ${colors.accent};
  font-weight: bold;
  letter-spacing: 0.1rem;
`;

const Header = ({ siteTitle }) => (
  <OuterContainer>
    <InnerContainer>
      <HeaderLink title to='/'>Is My Password <Bad>Bad?</Bad></HeaderLink>
      <HeaderLink alt to='/about'>About</HeaderLink>
    </InnerContainer>
  </OuterContainer>
)

export default Header;
