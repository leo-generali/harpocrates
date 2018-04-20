import React from 'react';
import Link from 'gatsby-link';

// Styles
import styled from 'styled-components';
import { maxWidth } from '../../styles/sharedValues';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  max-width: ${maxWidth.small};
  margin: -5rem auto 0;

  @media screen and (min-width: 900px) {
    max-width: ${maxWidth.medium};
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1200px) {
    max-width: ${maxWidth.large};
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const CardContainer = (props) => (
  <Container>
    {props.children}
  </Container>
)

export default CardContainer;
