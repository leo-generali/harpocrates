import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const OuterContainer = styled.div`
  background-color: #ffffff;
  height: 5rem;
`;

const InnerContainer = styled.div`
  max-width: 96rem;
  margin: 0 auto;
  align-items: center;
  display: flex;
  height: 100%;
`;

const Header = ({ siteTitle }) => (
  <OuterContainer>
    <InnerContainer>
      <h1>
        <Link to='/'> {siteTitle} </Link>
      </h1>
      <h1>
        <Link to='/about'> About </Link>
      </h1>
    </InnerContainer>
  </OuterContainer>
)

export default Header;
