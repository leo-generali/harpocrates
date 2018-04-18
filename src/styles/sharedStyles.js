import styled from 'styled-components';
import { transition, boxShadow, hoverStates, radius } from './sharedValues';
import { gradientAnimation } from './animations';

const Button = styled.button`
  padding: 1.5rem 2rem;
  text-shadow: 0 0.1rem 0.2rem rgba(0,0,0,0.20);
  font-weight: bold;
  color: #fff;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  background-image: ${props => props.alt ? 'linear-gradient(135deg, #f38381 0%, #fcdf8a 100%)' : 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)'};
  transition: ${transition};
  box-shadow: ${boxShadow.resting};
  border-radius: ${radius};

  &:hover {
    transform: ${hoverStates.active};
    box-shadow: ${boxShadow.active};
    cursor: pointer;
  }

  &:active {
    transition: 0.1s;
    transform: ${hoverStates.resting};
    box-shadow: ${boxShadow.resting};
    cursor: pointer;
  }
`;

export { Button };