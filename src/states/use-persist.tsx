/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

import Context from './context';

const STORE_NAME = 'persist/crawl-context-state';

const {
  useEffect, useContext,
} = React;

const usePersist = (): void => {
  const context = useContext(Context);

  useEffect(() => {
    const { state: { hydrated }, rehydrate } = context;
    const storedState = window.localStorage.getItem(STORE_NAME);

    console.log('rehydrate', rehydrate);
    console.log('hydrated', hydrated);
    console.log('storedState', storedState);

    if (!hydrated && storedState) {
      rehydrate(JSON.parse(storedState));
    }

    return () => {
      const { state: { inspections } } = context;
      console.log('update');
      console.log('rehydrate', rehydrate);
      console.log('inspections', inspections);

      window.localStorage.setItem(
        STORE_NAME,
        JSON.stringify(inspections),
      );
    };
  }, [context]);
};

export default usePersist;
