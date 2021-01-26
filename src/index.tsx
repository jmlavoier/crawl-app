import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Accordion, Text, Input } from 'components';

import GlobalStyle from 'utils/GlobalStyles';

const root = document.getElementById('root');

function App() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <GlobalStyle />
      <Input />
      <Accordion title="Security" onClick={handleClick} open={open}>
        <div>
          <Text>This is the text inside the component</Text>
        </div>
      </Accordion>
    </div>
  );
}

ReactDOM.render(
  <App />,
  root,
);
