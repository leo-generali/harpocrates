// Styles
import styled from 'styled-components';
import { colors } from '../styles/sharedValues';
import { thickUnderline } from '../styles/styleUtils';

const HeroContainer = styled.div`
  background: ${colors.bodyBackground};
  padding: 6rem 0 11rem;
`;

const HeroTextMain = styled.span`
  font-size: 2rem;
  letter-spacing: 0.1rem;
  color: #FFFFFF;
  ${ thickUnderline('#FFFFFF')};
`;

const HeroText = styled.p`
  font-size: 2rem;
  letter-spacing: 0.1rem;
  color: #FFFFFF;
  position: relative;
  z-index: 0;
  margin-top: 2rem;
`;

export { HeroContainer, HeroText, HeroTextMain };