import styled from 'styled-components';
import { boxShadow, radius } from './sharedValues';

const Container = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  /* margin-top: 2rem; */
  box-shadow: ${boxShadow.restingEmoji};
  border-radius: ${radius};
`;

export { Container };