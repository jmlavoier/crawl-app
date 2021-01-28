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

    if (!hydrated && storedState) {
      rehydrate(JSON.parse(storedState));
    }

    return () => {
      const { state: { inspections } } = context;

      if (inspections.length) {
        window.localStorage.setItem(
          STORE_NAME,
          JSON.stringify(inspections),
        );
      }
    };
  }, [context]);
};

export default usePersist;
