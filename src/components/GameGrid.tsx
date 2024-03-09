import { Text } from '@chakra-ui/react';
import { useFetchGames } from '../hooks/useFetchGames';

const GameGrid = () => {
  const { isLoading, error, gameList } = useFetchGames();

  return (
    <ul>
      {error && <Text>{error}</Text>}
      {gameList.map(game => {
        return <li key={game.id}>{game.name}</li>;
      })}
    </ul>
  );
};

export default GameGrid;
