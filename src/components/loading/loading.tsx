import * as React from 'react';

import {
  Loading as StyledLoading, Spin1, Spin2, Spin3,
} from './styles';

interface Props {
  color?: string,
}

const Loading = ({ color }: Props): JSX.Element => (
  <StyledLoading color={color}>
    <Spin1 />
    <Spin2 />
    <Spin3 />
  </StyledLoading>
);

Loading.defaultProps = {
  color: '#fff',
};

export default Loading;
