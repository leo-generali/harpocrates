import React from 'react';

// Styles
import styled from 'styled-components';
import { colors } from '../../styles/sharedValues';

const Text = styled.p`
  color: ${colors.text};
  font-size: 1.6rem;
  margin-top: 0.8rem;
`;

const Warning = ({ children }) => (
  <Text>{ children }</Text>
);

export default Warning;