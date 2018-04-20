import { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(1rem);
  }

  100% {
    opacity: 100%;
    transform: translateY(0);
  }
`;

export { fadeInAnimation };