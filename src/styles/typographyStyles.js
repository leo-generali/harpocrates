import styled from 'styled-components';
import { thickUnderline } from './styleUtils';

const TypoHeader = styled.h1`
  color: ${ props => props.black ? 'rgba(50,50,50,0.9)' : '#FFFFFF' };
  display: inline;
  font-size: 2rem;
  letter-spacing: 0.1rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 3rem;

  ${ props => props.underline ? thickUnderline(props => props.color) : null}
`;

const Text = styled.p`
  font-size: 1.8rem;
  margin-top: 2rem;
`;

const Mono = styled.span`
  font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Mono', 'Droid Sans Mono', 'Source Code Pro', monospace;
`;

const Bold = styled.span`
  font-weight: bold;
`;


const BaseHeader = styled.h6`
  font-weight: bold;
  text-transform: ${props => props.uppercase ? 'uppercase' : null};
`;

const H6 = BaseHeader.extend`
  font-size: 1.6rem;
`;

const H5 = BaseHeader.withComponent('h5').extend`
  font-size: 2rem;
`;

const H4 = BaseHeader.withComponent('h4').extend`
  font-size: 2.2rem;
`;

const H3 = BaseHeader.withComponent('h3').extend`
  font-size: 2.4rem;
`;

const H2 = BaseHeader.withComponent('h2').extend`
  font-size: 2.6rem;
`;

const H1 = BaseHeader.withComponent('h1').extend`
  font-size: 2.8rem;
`;

export { TypoHeader, Text, Mono, Bold, H1, H2, H3, H4, H5, H6 };