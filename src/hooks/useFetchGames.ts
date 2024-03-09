import { AxiosError, CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import apiClients from '../services/api-clients';

type FetchResponse = {
  count: number;
  results: Game[];
};

type Game = {
  id: number;
  name: string;
};

const useFetchGames = () => {
  const [gameList, setGameList] = useState<Game[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  const fetchGame = async (controller: AbortController) => {
    setLoading(true);
    try {
      const res = await apiClients.get<FetchResponse>('/games', {
        signal: controller.signal,
      });
      setGameList(res.data.results);
    } catch (err) {
      if (err instanceof CanceledError) {
        return;
      }
      setLoading(true);
      setError((err as AxiosError).message);
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
