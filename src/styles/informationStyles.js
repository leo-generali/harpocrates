import styled from 'styled-components';
import { boxShadow, radius } from './sharedValues';

const Container = styled.div`
  background-color: #FFFFFF;
  padding: 2rem;
  box-shadow: ${boxShadow.restingEmoji};
  border-radius: ${radius};
  display: ${props => props.flex ? 'flex' : null};
  justify-content: ${props => props.flex ? 'space-between' : null};
`;

export { Container };