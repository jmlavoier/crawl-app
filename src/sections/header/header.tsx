import * as React from 'react';

import {
  Input,
  Button,
  Layout,
} from '../../components';
import { StyledHeader, Wrapper } from './styles';

const Header = (): JSX.Element => (
  <StyledHeader>
    <Wrapper>
      <Layout.Flex mt={50} mb={50}>
        <Layout.Box mr={20}>
          <Input />
        </Layout.Box>
        <Layout.Box>
          <Button>Search</Button>
        </Layout.Box>
      </Layout.Flex>
    </Wrapper>
  </StyledHeader>
);

export default Header;
