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
  color?: string,
}

function Text({
  children, size, weight, height, color,
}: Props): JSX.Element {
  return (
    <Wrapper
      size={size}
      weight={weight}
      height={height}
      color={color}
    >
      {children}
    </Wrapper>
  );
}

Text.defaultProps = {
  children: null,
  size: 18,
  weight: 'normal',
  height: 18,
  color: '#000',
};

export default Text;
