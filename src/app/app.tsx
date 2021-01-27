import * as React from 'react';

import Header from '../sections/header';
import Content from '../sections/content';

import GlobalStyle from '../utils/global-styles';

function App(): JSX.Element {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Content />
    </div>
  );
}

export default App;
