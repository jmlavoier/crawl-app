import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Accordion } from 'components';

const root = document.getElementById('root');

function App() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Accordion title="Security" onClick={handleClick} open={open}>
        <div>
          <p>This is the text inside the component</p>
        </div>
      </Accordion>
    </div>
  );
}

ReactDOM.render(
  <App />,
  root,
);
