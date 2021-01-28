import * as React from 'react';

import { Provider } from 'states';

import Header from 'sections/header';
import Content from 'sections/content';

import GlobalStyle from 'utils/global-styles';

function App(): JSX.Element {
  return (
    <Provider>
      <GlobalStyle />
      <Header />
      <Content />
    </Provider>
  );
}

export default App;
