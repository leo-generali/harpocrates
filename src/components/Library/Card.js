import React from 'react';
import Link from 'gatsby-link';

// Styles
import styled from 'styled-components';
import { boxShadow } from '../../styles/sharedValues';

const Container = styled.div`
  padding: 2.5rem 3rem;
  background-color: #ffffff;
  box-shadow: ${boxShadow.resting};
  font-size: 1.8rem;
  color: rgba(50,50,50,0.9);
  line-height: 2;

`;

const Card = (props) => (
  <Container>{props.children}</Container>
)

export default Card;
