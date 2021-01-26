import * as React from 'react';

import {
  Wrapper,
} from './styles';

type Weight = 'bold' | 'semiBold' | 'normal' | 'fin';

interface Props {
  children?: string,
  size?: number,
  weight?: Weight,
  height?: number,
}

function Accordion({
  children, size, weight, height,
}: Props): JSX.Element {
  return (
    <Wrapper size={size} weight={weight} height={height}>
      {children}
    </Wrapper>
  );
}

Accordion.defaultProps = {
  children: null,
  size: 18,
  weight: 'normal',
  height: 18,
};

export default Accordion;
