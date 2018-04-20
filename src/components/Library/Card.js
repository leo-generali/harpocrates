import React from 'react';
import Link from 'gatsby-link';

// Styles
import styled from 'styled-components';
import { boxShadow, radius } from '../../styles/sharedValues';

const Container = styled.div`
  border-radius: ${radius};
  padding: 2.5rem 3rem;
  background-color: #ffffff;
  box-shadow: ${boxShadow.resting};
  font-size: 1.8rem;
  color: rgba(50,50,50,0.9);
  line-height: 2;
  grid-column: ${props => props.fullWidth ? `1 / 2` : null };

  p {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 900px) {
    grid-column: ${props => props.fullWidth ? `1 / 3` : null };
  }

  @media screen and (min-width: 1200px) {
    grid-column: ${props => props.fullWidth ? `1 / 4` : null };
  }
`;

const Card = (props) => (
  <Container fullWidth={props.fullWidth}>{props.children}</Container>
)

export default Card;
