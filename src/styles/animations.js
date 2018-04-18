import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(1rem);
  }

  100% {
    opacity: 100%;
    transform: translateY(0);
  }
`;

export const gradientAnimation = keyframes`
  0 % { background-position: 0% 50%; }
  100 % { background-position: 100% 50%; }
`