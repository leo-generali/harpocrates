import React from 'react';

// Components
import Warning from './Warning';

// Styles
import styled from 'styled-components';
import { Container } from '../../styles/informationStyles';
import { TypoHeader } from '../../styles/typographyStyles';

const SuggestionsWrapper = styled.ul`
  margin-top: 0.8rem;
`;

const Wrapper = styled.div`
  height: ${props => props.height};
`;

const warningHeight = 45;
const suggestionHeight = 100 - warningHeight;

const View = ({ warning, suggestions }) => (
  <Container>
    <Wrapper height={`${warningHeight}%`}>
      <TypoHeader black underline color={'tomato'}>Warning:</TypoHeader>
      <Warning>
        {warning}
      </Warning>
    </Wrapper>
    <Wrapper height={`${suggestionHeight}%`}>
      <TypoHeader black underline color={'tomato'}>Suggestions:</TypoHeader>
      <SuggestionsWrapper>
        {suggestions}
      </SuggestionsWrapper>
    </Wrapper>
  </Container>
);

export default View;