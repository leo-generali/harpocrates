import { injectGlobal } from 'styled-components';
import { reset } from './styleReset';
import fontFiles from './fonts';

injectGlobal`
  ${reset}

  html {
    background-color: palevioletred;
  }

`;