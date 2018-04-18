import { injectGlobal } from 'styled-components';
import { reset } from './styleReset';

import NunitoRegular from '../fonts/Nunito-Regular.ttf';
import NunitoBold from '../fonts/Nunito-ExtraBold.ttf';


injectGlobal`
  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoRegular});
  }

  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoBold});
    font-weight: bold;
  }

  ${reset}

  html {
    background-color: palevioletred;
  }

  body {
    font-family: 'Nunito';
  }


`;