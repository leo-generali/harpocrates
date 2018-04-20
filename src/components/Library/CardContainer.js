import React from 'react';
import Link from 'gatsby-link';

// Styles
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  max-width: 110rem;
  margin: 2rem auto 0;

  @media screen and (min-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const CardContainer = (props) => (
  <Container>
    {props.children}
  </Container>
)

export default CardContainer;
