import * as React from 'react';

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
    <Wrapper>
      <Title data-testid="title" onClick={onClick}>{title}</Title>
      <Body data-testid="body" open={open}>{children}</Body>
    </Wrapper>
  );
}

Accordion.defaultProps = {
  children: null,
  open: false,
  onClick: () => {},
};

export default Accordion;
