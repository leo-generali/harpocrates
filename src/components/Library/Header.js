import React from 'react';
import Link from 'gatsby-link';

// Styles
import styled from 'styled-components';
import { maxWidth } from '../../styles/sharedValues';

const OuterContainer = styled.header`
  background-color: #ffffff;
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
  color: ${props => props.title ? 'black' : '#4273ee'};
  ${ props => { if (props.alt) {
      return `
        letter-spacing: 0.2rem;
        text-transform: uppercase;
      `;
    }
  }};
`;

const Header = ({ siteTitle }) => (
  <OuterContainer>
    <InnerContainer>
      <HeaderLink title to='/'>🔒 Is My Password Bad?</HeaderLink>
      <HeaderLink alt to='/about'>About</HeaderLink>
    </InnerContainer>
  </OuterContainer>
)

export default Header;
