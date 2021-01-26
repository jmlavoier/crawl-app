import * as React from 'react';

import Text from '../text';
import {
  Wrapper,
} from './styles';

interface Props {
  children: string,
  onClick?: (e: React.MouseEvent) => void,
}

function Button({ children, onClick }: Props): JSX.Element {
  return (
    <Wrapper type="button" onClick={() => {}} onMouseDown={onClick}>
      <Text color="#fff">{children}</Text>
    </Wrapper>
  );
}

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
