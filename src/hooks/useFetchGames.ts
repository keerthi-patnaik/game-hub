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
  id: number;
  name: string;
  slug: slugName;
};

const useFetchGames = (
  selectedGenreId: number | undefined,
  selectedPlatformId: number | undefined,
  selectedOrder: string | undefined,
  selectedValue: string | '',
) => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: [
      'games',
      {
        genres: selectedGenreId,
        parent_platforms: selectedPlatformId,
        ordering: selectedOrder,
        search: selectedValue,
      },
    ],
    queryFn: ({ signal }) => {
      return apiClients.get<FetchGameResponse>('/games', {
        signal: signal,
        params: {
          genres: selectedGenreId,
          parent_platforms: selectedPlatformId,
          ordering: selectedOrder,
          search: selectedValue,
        },
      });
    },
  });

  return { gameList: data?.data.results || [], error, isLoading, isError };
};

export { useFetchGames };
