import { injectGlobal } from 'styled-components';
import { reset, formReset } from './styleReset';
import { colors } from './sharedValues';

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
  ${formReset}

  body {
    background-color: #F6F7FD;
  }

  ::selection {
    background-color: ${colors.accent};
    color: #FFF;
  }

  ::-moz-selection {
    background-color: ${colors.accent};
    color: #FFF;
  }
`;