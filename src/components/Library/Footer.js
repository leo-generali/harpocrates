import React from 'react';
import Link from 'gatsby-link';

// Styles
import styled from 'styled-components';
import { maxWidth, colors } from '../../styles/sharedValues';

const Container = styled.footer`
  /* box-shadow: inset 0 1px 2px rgba(0,0,0,.39), 0 -1px 1px #FFF, 0 1px 0 #FFF; */
  color: #FFFFFF;
  text-shadow: 0 0.1rem 0.2rem rgba(0,0,0,0.20);
  flex-shrink: 0;
  padding: 2rem;
  text-align: center;
  font-size: 1.6rem;
  background: ${colors.bodyBackground};
  /* background-image: linear-gradient(90deg, rgba(66,115,238,1) 0%, rgba(60,89,224,1) 50%, rgba(0,57,177,1) 100%); */
`;

const Heart = styled.span`
  color: ${colors.accent};
  font-size: 2rem;
  margin: 0 0.3rem;
`;

const Footer = (props) => (
  <Container>
    Made with <Heart>♥</Heart> by Leo Generali
  </Container>
)

export default Footer;
