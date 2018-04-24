import React from 'react';

// Components
import Warning from './Warning';

// Styles
import styled from 'styled-components';

const Text = styled.span`
  color: aliceblue;
`;

const SuggestionsWrapper = styled.ul`

`;

const View = ({ warning, suggestions }) => (
  <div>
    <p>Warning:</p>
    <Warning>{warning}</Warning>
    <p>Suggestions:</p>
    <SuggestionsWrapper>
      {suggestions}
    </SuggestionsWrapper>
  </div>
);

export default View;