import * as React from 'react';

import { Context } from 'states';
import {
  Accordion,
  Layout,
  Text,
} from 'components';
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
            <Accordion title={inspect.keyword} key={inspect.id}>
              <Layout.Flex>
                <Text>This is the text inside the component</Text>
              </Layout.Flex>
            </Accordion>
          ))}
        </Layout.Box>
      </StyledContent>
    </Layout.Flex>
  );
};
export default Content;
