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

const headerAnimation = keyframes`
  0% {
    background-position:0% 82%
  }

  50% {
    background-position:100% 19%
  }

  100% {
    background-position:0% 82%
  }
`;

export { fadeInAnimation, headerAnimation };