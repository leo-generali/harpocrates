import React from 'react';

// Styles
import styled from 'styled-components';
import { boxShadow } from '../../styles/sharedValues';

const Container = styled.div`
  margin-top: 1rem;
  text-align: center;
  color: #fff;
  background-color: #ee6742;
  height: 3rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
`

const Speed = ({ children }) => (
  <Container>{children}</Container>
);

export default Speed;