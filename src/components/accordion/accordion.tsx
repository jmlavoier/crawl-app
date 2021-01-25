import * as React from 'react';

import { Wrapper } from './styles';

interface Props {
  name: unknown,
}

function Accordion({ name }: Props): JSX.Element {
  return (
    <Wrapper>
      {`Accordion Component It is An ${name}`}
    </Wrapper>
  );
}

export default Accordion;
