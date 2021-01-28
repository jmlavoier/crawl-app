import * as React from 'react';
import useSWR from 'swr';

import api from 'api';
import { Context } from 'states';

interface UseInspectGetType {
  data: InspectionGetResponseType | undefined,
  isLoading: boolean,
  dispatch: () => void,
  error: Error | undefined,
}

const {
  useState, useCallback, useContext,
} = React;

const fetcher = (id: string) => api
  .get(`/crawl/${id}`).then((res) => res.data);

const useInspectGet = (inspectId: string): UseInspectGetType => {
  const [shouldPost, setShouldPost] = useState(false);
  const { setURLs } = useContext(Context);

  const { data, error } = useSWR(inspectId, fetcher, {
    refreshInterval: shouldPost ? 2000 : 0,
    dedupingInterval: shouldPost ? 10000 : 0,
    onSuccess: ({ id, status, urls }: InspectionGetResponseType) => {
      setURLs(
        id,
        status,
        urls,
      );
      if (status === 'done') setShouldPost(false);
    },
  });

  const dispatch = useCallback(() => {
    setShouldPost(true);
  }, [setShouldPost]);

  return {
    data,
    error,
    isLoading: (shouldPost && !data && !error),
    dispatch,
  };
};

export default useInspectGet;
