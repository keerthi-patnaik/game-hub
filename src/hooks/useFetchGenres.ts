import { useQuery } from '@tanstack/react-query';
import apiClients from '../services/api-clients';

export type FetchGenreResponse = {
  count: number;
  results: Genre[];
};

export type Genre = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
};

const useFetchGenres = () => {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ['genre'],
    queryFn: ({ signal }) => {
      return apiClients.get<FetchGenreResponse>('/genres', {
        signal: signal,
      });
    },
  });

  return { genres: data?.data.results || [], error, isLoading, isError };
};

export { useFetchGenres };
