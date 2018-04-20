import React from 'react';
import Link from 'gatsby-link';

import styled from 'styled-components';

const OuterContainer = styled.header`
  background-color: #ffffff;
  height: 5rem;
  margin-bottom: 2rem;
`;

const InnerContainer = styled.div`
  max-width: 96rem;
  margin: 0 auto;
  align-items: center;
  display: flex;
  height: 100%;
`;

const HeaderLink = styled(Link)`
  font-size: 2rem;
  text-decoration: none;
  margin: ${props => props.title ? '0 auto 0 0' : '0 0 0 auto'};
  color: ${props => props.title ? 'black' : '#4273ee'};
  /* font-weight: ${props => props.title ? 'bold' : 'regular'}; */
`;

const Bad = styled.span`
  color: tomato;
  font-weight: bold;
`;

const Header = ({ siteTitle }) => (
  <OuterContainer>
    <InnerContainer>
      <HeaderLink title to='/'>🔒 Is My Password <Bad>Bad?</Bad></HeaderLink>
      <HeaderLink to='/about'>About</HeaderLink>
    </InnerContainer>
  </OuterContainer>
)

export default Header;
