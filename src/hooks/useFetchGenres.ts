import { AxiosError, CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import apiClients from '../services/api-clients';

export type FetchGenreResponse = {
  count: number;
  results: Genre[];
};

export type Genre = {
  id?: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
};

const useFetchGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  const fetchGenre = async (controller: AbortController) => {
    setLoading(true);
    try {
      const res = await apiClients.get<FetchGenreResponse>('/genres', {
        signal: controller.signal,
      });
      setGenres(res.data.results);
      setError('');
      setLoading(false);
    } catch (err) {
      if (err instanceof CanceledError) {
        return;
      }
      setError((err as AxiosError).message);
      setLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    fetchGenre(controller);
    return () => {
      controller.abort();
    };
  }, []);

  return { genres, error, isLoading };
};

export { useFetchGenres };
