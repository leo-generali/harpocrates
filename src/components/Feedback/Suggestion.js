import React from 'react';

// Styles
import styled from 'styled-components';

const Text = styled.li`
  list-style: none;
  color: red;
`;

const Suggestion = ({ children }) => (
  <Text>{ children }</Text>
);

export default Suggestion;