import React from 'react';
import Link from 'gatsby-link';

// Components
import Checker from '../components/Checker/index';
import CardContainer from '../components/Library/CardContainer';
import Card from '../components/Library/Card';

// Styles
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #1338CE;
  background-image: linear-gradient(90deg, rgba(66,115,238,1) 0%, rgba(60,89,224,1) 50%, rgba(0,57,177,1) 100%);
  /* background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%); */
  /* background-image: linear-gradient(to top, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%); */
  /* background-image: linear-gradient(10deg, #1338CE 0%,#932CFA 100%); */
  box-shadow: inset 0 1px 2px rgba(0,0,0,.39), 0 -1px 1px #FFF, 0 1px 0 #FFF;
  padding: 15rem 0;
`

const IndexPage = () => (
  <section>
    <HeaderContainer>
      <Checker />
    </HeaderContainer>
    <CardContainer>
      <Card fullWidth>
        <h1>ASDFASDF</h1>
      </Card>
      <Card />
      <Card />
    </CardContainer>
  </section>
)

export default IndexPage;
