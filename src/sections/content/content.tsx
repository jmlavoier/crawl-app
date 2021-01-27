import * as React from 'react';

import {
  Accordion,
  Layout,
  Text,
} from 'components';
import { StyledContent } from './styles';

const Content = (): JSX.Element => (
  <Layout.Flex justify="center">
    <StyledContent>
      <Layout.Box grow={1}>
        <Accordion title="Security">
          <Layout.Flex>
            <Text>This is the text inside the component</Text>
          </Layout.Flex>
        </Accordion>
      </Layout.Box>
    </StyledContent>
  </Layout.Flex>
);

export default Content;
