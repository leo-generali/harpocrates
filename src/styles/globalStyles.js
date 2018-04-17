import { injectGlobal } from 'styled-components';
import { reset } from './styleReset';

injectGlobal`
  ${reset}

  html {
    background-color: palevioletred;
  }
`;