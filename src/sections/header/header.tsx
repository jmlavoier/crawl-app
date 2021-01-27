import * as React from 'react';

import {
  Input,
  Button,
  Layout,
} from '../../components';
import { StyledHeader, Wrapper } from './styles';

const {
  useState,
} = React;

const Header = (): JSX.Element => {
  const [word, setWord] = useState('');

  return (
    <StyledHeader>
      <Wrapper>
        <Layout.Flex mt={50} mb={50}>
          <Layout.Box mr={20}>
            <Input value={word} onChange={(e) => setWord(e.currentTarget.value)} />
          </Layout.Box>
          <Layout.Box>
            <Button>Search</Button>
          </Layout.Box>
        </Layout.Flex>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
