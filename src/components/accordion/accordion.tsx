import * as React from 'react';

import { ReactComponent as Wait } from 'assets/icons/wait.svg';
import { ReactComponent as Sad } from 'assets/icons/sad.svg';
import { ReactComponent as Ok } from 'assets/icons/ok.svg';

import Text from '../text';
import Layout from '../layout';
import {
  Wrapper,
  Title,
  Body,
} from './styles';

interface Props {
  title: string,
  children?: React.ReactNode,
  open?: boolean,
  status: 'active' | 'empty' | 'done',
  onClick?: (e?: React.MouseEvent) => void
}

function Accordion({
  title, children, open, onClick, status,
}: Props): JSX.Element {
  return (
    <Wrapper open={open}>
      <Title data-testid="title" onClick={onClick} open={open}>
        <Layout.Flex p={5}>
          {status === 'active' && (<Wait width={30} height={30} />)}
          {status === 'empty' && (<Sad width={30} height={30} />)}
          {status === 'done' && (<Ok width={30} height={30} />)}
        </Layout.Flex>
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
