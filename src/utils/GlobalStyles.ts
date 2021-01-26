import { createGlobalStyle } from 'styled-components';

import MuseoSansRounded100 from '../../assets/fonts/MuseoSansRounded100.woff';
import MuseoSansRounded300 from '../../assets/fonts/MuseoSansRounded300.woff';
import MuseoSansRounded500 from '../../assets/fonts/MuseoSansRounded500.woff';
import MuseoSansRounded700 from '../../assets/fonts/MuseoSansRounded700.woff';

export default createGlobalStyle`
  @font-face {
    font-family: 'Museo Sans Rounded 500';
    font-weight: 500;
    src: url('${MuseoSansRounded500}') format('woff');
  }
  
  @font-face {
    font-family: 'Museo Sans Rounded 100';
    font-weight: 100;
    src: url('${MuseoSansRounded100}') format('woff');
  }
  
  @font-face {
    font-family: 'Museo Sans Rounded 300';
    font-weight: 300;
    src: url('${MuseoSansRounded300}') format('woff');
  }
  
  @font-face {
    font-family: 'Museo Sans Rounded 700';
    font-weight: 700;
    src: url('${MuseoSansRounded700}') format('woff');
  }
`;
