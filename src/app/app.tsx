import * as React from 'react';

import {
  Accordion, Text, Input, Button,
} from '../components';
import GlobalStyle from '../utils/global-styles';

function App(): JSX.Element {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <GlobalStyle />
      <div style={{ display: 'flex' }}>
        <Input />
        <Button>Search</Button>
      </div>
      <Accordion title="Security" onClick={handleClick} open={open}>
        <div>
          <Text>This is the text inside the component</Text>
        </div>
      </Accordion>
    </div>
  );
}

export default App;
