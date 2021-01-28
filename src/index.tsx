import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'states';
import App from 'app';

const root = document.getElementById('root');

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  root,
);
