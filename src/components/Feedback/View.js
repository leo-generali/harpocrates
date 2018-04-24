import React from 'react';

// Components
import Warning from './Warning';

// Styles
import styled from 'styled-components';
import { Container } from '../../styles/informationStyles';
import { TypoHeader } from '../../styles/typographyStyles';

const Text = styled.span`
  color: aliceblue;
`;

const SuggestionsWrapper = styled.ul`

`;


const View = ({ warning, suggestions }) => (
  <Container>
    <TypoHeader underline color={'tomato'}>Warning:</TypoHeader>
    <Warning>
      {warning}
    </Warning>
    <TypoHeader underline color={'tomato'}>Suggestions:</TypoHeader>
    <SuggestionsWrapper>
      {suggestions}
    </SuggestionsWrapper>
  </Container>
);

export default View;