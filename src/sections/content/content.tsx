import * as React from 'react';

import { Context } from 'states';
import {
  Layout,
} from 'components';
import Item from './item';
import { StyledContent } from './styles';

const {
  useContext,
} = React;

const Content = (): JSX.Element => {
  const { state: { inspections } } = useContext(Context);

  return (
    <Layout.Flex justify="center">
      <StyledContent>
        <Layout.Box grow={1}>
          {inspections.map((inspect) => (
            <Item id={inspect.id} keyword={inspect.keyword} key={inspect.id} />
          ))}
        </Layout.Box>
      </StyledContent>
    </Layout.Flex>
  );
};
export default Content;
