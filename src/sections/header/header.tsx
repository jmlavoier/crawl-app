import * as React from 'react';

import {
  Input,
  Button,
  Layout,
  Text,
} from '../../components';
import useKeywordPost from './useKeywordPost';
import {
  StyledHeader, Wrapper, BaloonWrapper, Baloon,
} from './styles';

const {
  useState,
} = React;

const Header = (): JSX.Element => {
  const [word, setWord] = useState('');

  const {
    isLoading,
    dispatch,
    error,
  } = useKeywordPost(word);

  return (
    <StyledHeader>
      <Wrapper>
        <Layout.Flex mt={50} mb={50}>
          <BaloonWrapper>
            <Layout.Box mr={20} mb={5}>
              <Input value={word} onChange={(e) => setWord(e.currentTarget.value)} placeholder="keyword" />
            </Layout.Box>
            {error && error.message && (
              <Baloon>
                <Text color="#ed0000">{error.message}</Text>
              </Baloon>
            )}
          </BaloonWrapper>
          <Layout.Box>
            <Button
              onClick={() => { dispatch(); }}
              isLoading={isLoading}
            >
              Search
            </Button>
          </Layout.Box>
        </Layout.Flex>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
