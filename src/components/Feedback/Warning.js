import React from 'react';

// Styles
import styled from 'styled-components';

const Text = styled.p`
  color: red;
`;

const Warning = ({ children }) => (
  <Text>{children}</Text>
);

export default Warning;