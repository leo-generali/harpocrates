import styled from 'styled-components';
import { boxShadow, radius } from './sharedValues';

const Container = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  /* margin-top: 2rem; */
  box-shadow: ${boxShadow.restingEmoji};
  border-radius: ${radius};
  display: ${props => props.flex ? 'flex' : null};
  justify-content: ${props => props.flex ? 'space-between' : null};;
`;

export { Container };