import { useState, useCallback, useEffect } from 'react';

import api from 'api';

interface CrawlPostResponse {
  id: string,
  status: 'active' | 'done' | number | string,
  urls: string[],
  message: string,
}

interface KeywordPostResponse {
  data: CrawlPostResponse | undefined,
  isLoading: boolean,
  dispatch: () => void,
  error: Error | undefined,
}

const useKeywordPost = (keyword: string): KeywordPostResponse => {
  const [shouldPost, setShouldPost] = useState(false);
  const [data, setData] = useState<CrawlPostResponse | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    if (shouldPost) {
      const fetcher = async () => {
        try {
          const res = await api.post('/crawl', { keyword });
          if (res.data.status === 200) setData(res.data);
          else setError(res.data);
        } catch (e) {
          setError(e.response);
        }
        setShouldPost(false);
      };

      fetcher();
    }
  }, [shouldPost, keyword, setData]);

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

export default useKeywordPost;
