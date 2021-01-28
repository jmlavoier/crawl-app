import * as React from 'react';

import { usePersist } from 'states';

import Header from 'sections/header';
import Content from 'sections/content';

import GlobalStyle from 'utils/global-styles';

function App(): JSX.Element {
  usePersist();

  return (
    <>
      <GlobalStyle />
      <Header />
      <Content />
    </>
  );
}

export default App;
