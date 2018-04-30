import React from 'react';
import Link from 'gatsby-link';

// Styles
import styled from 'styled-components';
import { boxShadow, radius, colors } from '../../styles/sharedValues';

const Container = styled.div`
  border-radius: ${radius};
  padding: ${props => props.sidebar ? '8rem 2rem' : '8rem 10rem' };
  background-color: #FFFFFF;
  box-shadow: ${props => props.sidebar ? boxShadow.restingEmoji : boxShadow.resting };
  font-size: 1.8rem;
  color: rgba(50,50,50,0.9);
  line-height: 2;
  grid-column: ${props => props.columnSpan ? `1 / -1` : null };

  /* @media screen and (min-width: 900px) {
    grid-column: ${props => props.columnSpan ? `1 / -1` : null };
  } */

  @media screen and (min-width: 1200px) {
    grid-column: ${props => props.columnSpan };
  }
`;

const Card = ({ sidebar, columnSpan, children }) => (
  <Container sidebar={sidebar} columnSpan={columnSpan}>{ children }</Container>
)

export default Card;
