import * as React from 'react';

import Text from '../text';
import {
  Wrapper,
  Title,
  Body,
} from './styles';

interface Props {
  title: string,
  children?: React.ReactNode,
  open?: boolean,
  onClick?: (e?: React.MouseEvent) => void
}

function Accordion({
  title, children, open, onClick,
}: Props): JSX.Element {
  return (
    <Wrapper open={open}>
      <Title data-testid="title" onClick={onClick} open={open}>
        <Text size={22} height={40} weight="semiBold">{title}</Text>
      </Title>
      <Body data-testid="body">{children}</Body>
    </Wrapper>
  );
}

Accordion.defaultProps = {
  children: null,
  open: false,
  onClick: () => {},
};

export default Accordion;
