import { useQuery } from '@tanstack/react-query';
import apiClients from '../services/api-clients';

type FetchPlatformsResponse = {
  count: number;
  results: Platform[];
};

type Platform = {
  id: number;
  name: string;
  slug: string;
};

const useFetchPlatforms = () => {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ['platform', 'lists', 'parents'],
    queryFn: ({ signal }) => {
      return apiClients.get<FetchPlatformsResponse>(
        '/platforms/lists/parents',
        {
          signal: signal,
        },
      );
    },
  });
  return { platforms: data?.data.results || [], isError, isLoading, error };
};

export { useFetchPlatforms };
