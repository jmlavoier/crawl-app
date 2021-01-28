import {
  useState, useCallback, useEffect, useContext,
  useRef,
} from 'react';

import api from 'api';
import { Context } from 'states';

interface KeywordPostResponse {
  data: InspectionType | undefined,
  isLoading: boolean,
  dispatch: () => void,
  error: Error | undefined,
}

const useKeywordPost = (keyword: string): KeywordPostResponse => {
  const [shouldPost, setShouldPost] = useState(false);
  const data = useRef<InspectionType | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);
  const { setInspection } = useContext(Context);

  useEffect(() => {
    if (shouldPost) {
      const fetcher = async () => {
        try {
          const res = await api.post('/crawl', { keyword });
          if (res.data.status === 400) {
            setError(res.data);
          } else {
            const inspect: InspectionType = {
              keyword,
              id: res.data.id,
              status: res.data.status,
            };
            setInspection(inspect);
            data.current = inspect;
          }
        } catch (e) {
          setError(e.response);
        }
      };

      setShouldPost(false);
      fetcher();
    }
  }, [shouldPost, keyword, setInspection]);

  const dispatch = useCallback(() => {
    setShouldPost(true);
  }, [setShouldPost]);

  return {
    data: data.current,
    error,
    isLoading: (shouldPost && !data.current && !error),
    dispatch,
  };
};

export default useKeywordPost;
