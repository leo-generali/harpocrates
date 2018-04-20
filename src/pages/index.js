import React from 'react';
import Link from 'gatsby-link';

// Components
import Checker from '../components/Checker/index';
import CardContainer from '../components/Library/CardContainer';
import Card from '../components/Library/Card';

// Styles
import styled from 'styled-components';
import { colors, maxWidth } from '../styles/sharedValues';
import { thickUnderline } from '../styles/styleUtils';

const HeaderContainer = styled.div`
  background: ${colors.bodyBackground};
  /* background-image: linear-gradient(-90deg, #6409AE, #B4181B); */
  /* background-image: linear-gradient(90deg, rgba(66,115,238,1) 0%, rgba(60,89,224,1) 50%, rgba(0,57,177,1) 100%); */
  /* background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%); */
  /* background-image: linear-gradient(to top, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%); */
  box-shadow: inset 0 1px 2px rgba(0,0,0,.39), 0 -1px 1px #FFF, 0 1px 0 #FFF;
  padding: 6rem 0 11rem;
`;

const HeaderTextWrapper = styled.div`
  max-width: ${maxWidth.small};
  margin: 4em auto;

  @media screen and (min-width: 900px) {
    max-width: ${maxWidth.medium};
  }

  @media screen and (min-width: 1200px) {
    max-width: ${maxWidth.large};
  }
`;

const TextWrapper = styled.div`
  max-width: 50%;
  line-height: 1.5;
`;

const HeaderText = styled.p`
  font-size: 2rem;
  letter-spacing: 0.1rem;
  color: #FFFFFF;
  position: relative;
  z-index: 0;
  margin-top: 2rem;
`;

const StackUp = styled.span`
  font-size: 2rem;
  letter-spacing: 0.1rem;
  color: #FFFFFF;
  ${ thickUnderline('#FFFFFF')};
`;

const IndexPage = () => (
  <section>
    <HeaderContainer>
      <HeaderTextWrapper>
        <TextWrapper>
          <StackUp>How does your password stack up?</StackUp>
          <HeaderText>A good password is key. We want to help make sure you're covered.</HeaderText>
        </TextWrapper>
      </HeaderTextWrapper>
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
