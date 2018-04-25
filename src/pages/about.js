import React from 'react';

// Styles
import styled from 'styled-components';
import { HeroContainer, HeroText, HeroTextMain } from '../styles/pageStyles';
import { maxWidth } from '../styles/sharedValues';

const ContentContainer = styled.div`
  max-width: ${ maxWidth.large };
  margin: 4em auto;
  line-height: 1.5;
`;

const AboutPage = () => (
  <section>
    <HeroContainer>
      <ContentContainer>
        <HeroTextMain>How does your password stack up?</HeroTextMain>
        <HeroText>A good password is key. We want to help make sure you're covered.</HeroText>
      </ContentContainer>
    </HeroContainer>
  </section>
)

export default AboutPage;
