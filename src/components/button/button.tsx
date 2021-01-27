import * as React from 'react';

import Text from '../text';
import {
  Wrapper,
  Loading,
  Spin1,
  Spin2,
  Spin3,
} from './styles';

interface Props {
  children: string,
  isLoading?: boolean,
  onClick?: (e: React.MouseEvent) => void,
}

function Button({ children, onClick, isLoading }: Props): JSX.Element {
  return (
    <Wrapper type="button" onClick={() => {}} onMouseDown={onClick}>
      {isLoading ? (
        <Loading>
          <Spin1 />
          <Spin2 />
          <Spin3 />
        </Loading>
      ) : (
        <Text color="#fff">{children}</Text>
      )}
    </Wrapper>
  );
}

Button.defaultProps = {
  onClick: () => {},
  isLoading: false,
};

export default Button;
