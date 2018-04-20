import { css } from 'styled-components';
import { fadeInAnimation } from './animations';

function fadeIn(delay) {
  return css`
    animation: ${fadeInAnimation} ease-in-out 0.3s;
    animation-fill-mode: both;
    animation-delay: ${delay}s;
  `;
}

function thickUnderline(color) {
  console.log(color)
  return css`
    position: relative;
    z-index: 0;

    &:after{
      content: '';
      position: absolute;
      height: 1rem;
      width: 103%;
      background-color: ${color};
      opacity: 0.3;
      left: -1.5%;
      bottom: 0;
      z-index: -1;
    }
  `;
}

export { fadeIn, thickUnderline };