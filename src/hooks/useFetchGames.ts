import { AxiosError, CanceledError } from 'axios';
import { useEffect, useState } from 'react';
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
  genre: Genre[];
};

export type Genre = {
  name: string;
  slug: string;
  games_count: number;
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

const useFetchGames = () => {
  const [gameList, setGameList] = useState<Game[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  const fetchGame = async (controller: AbortController) => {
    setLoading(true);
    try {
      const res = await apiClients.get<FetchGameResponse>('/games', {
        signal: controller.signal,
      });
      setGameList(res.data.results);
      setLoading(false);
      setError('');
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
    fetchGame(controller);

    return () => {
      controller.abort();
    };
  }, []);

  return { gameList, error, isLoading };
};

export { useFetchGames };
