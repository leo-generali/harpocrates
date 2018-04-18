import styled from 'styled-components';
import { transition, boxShadow, buttonBoxShadow, hoverStates, radius } from './sharedValues';
import { gradientAnimation } from './animations';

const Button = styled.button`
  padding: 1.5rem 2rem;
  text-shadow: 0 0.1rem 0.2rem rgba(0,0,0,0.20);
  font-weight: bold;
  color: #fff;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  background-color: #1338CE;
  transition: ${transition};
  box-shadow: ${buttonBoxShadow.resting};
  border-radius: ${radius};
  margin-right: 1rem;

  &:hover {
    background-color: #4273ee;
    transform: ${hoverStates.active};
    box-shadow: ${buttonBoxShadow.active};
    cursor: pointer;
  }

  &:active {
    background-color: #103baa;
    transition: 0.1s;
    transform: ${hoverStates.resting};
    box-shadow: ${buttonBoxShadow.resting};
    cursor: pointer;
  }
`;

export { Button };