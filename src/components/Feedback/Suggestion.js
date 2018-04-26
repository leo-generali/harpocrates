import React from 'react';

// Styles
import styled from 'styled-components';
import { colors } from '../../styles/sharedValues';

const Text = styled.li`
  list-style: none;
  color: ${colors.text};
  font-size: 1.6rem;
`;

const Suggestion = ({ children }) => (
  <Text>{children}</Text>
);

export default Suggestion;