/* eslint-disable react/no-array-index-key */
import * as React from 'react';

import {
  Accordion,
  Layout,
  Text,
} from 'components';
import { StyledAnchor } from './styles';
import useInspectGet from './use-inspect-get';

interface ItemPropTypes {
  id: string,
  keyword: string,
}

const {
  useState, useEffect, useMemo,
} = React;

const Item = React.memo(({ id, keyword }: ItemPropTypes): JSX.Element => {
  const { data, dispatch } = useInspectGet(id);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch();
  }, [dispatch]);

  const status = useMemo((): 'active' | 'empty' | 'done' => {
    if (!data || data.status === 'active') {
      return 'active';
    }

    if (data && data.urls.length === 0) {
      return 'empty';
    }

    return 'done';
  }, [data]);

  return (
    <Accordion
      title={keyword}
      open={open}
      onClick={() => setOpen((o) => !o)}
      status={status}
    >
      <Layout.Flex>
        {data?.urls.length ? (
          <ul>
            {data.urls.map((url, key) => (
              <li key={key}>
                <StyledAnchor href={url}>{url}</StyledAnchor>
              </li>
            ))}
          </ul>
        ) : (
          <Text>{`"${keyword}" wasn't found`}</Text>
        )}
      </Layout.Flex>
    </Accordion>
  );
});

Item.displayName = 'Item';

export default Item;
