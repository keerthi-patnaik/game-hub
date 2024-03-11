import { useQuery } from '@tanstack/react-query';
import apiClients from '../services/api-clients';

type FetchGameResponse = {
  count: number;
  results: Game[];
};

export type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
};

export type Genre = {
  id: number;
  name: string;
  slug: string;
};

export type slugName =
  | 'pc'
  | 'playstation'
  | 'xbox'
  | 'mac'
  | 'linux'
  | 'android'
  | 'ios'
  | 'nintendo'
  | 'web';

export type Platform = {
  id?: number;
  name: string;
  slug: slugName;
};

const useFetchGames = (selectedGenre: Genre | null) => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['games', { genres: selectedGenre?.id }],
    queryFn: ({ signal }) => {
      return apiClients.get<FetchGameResponse>('/games', {
        signal: signal,
        params: { genres: selectedGenre?.id },
      });
    },
  });

  return { gameList: data?.data.results || [], error, isLoading, isError };
};

export { useFetchGames };
