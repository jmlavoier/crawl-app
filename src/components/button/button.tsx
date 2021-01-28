import * as React from 'react';

import Text from '../text';
import Loading from '../loading';
import {
  Wrapper,
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
        <Loading />
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
