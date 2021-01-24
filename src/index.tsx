import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Accordion from 'components/accordion';

const root = document.getElementById('root');

function App() {
  return (
    <div>
      <div>Init React</div>
      <Accordion />
    </div>
  );
}

ReactDOM.render(
  <App />, 
  root,
);
