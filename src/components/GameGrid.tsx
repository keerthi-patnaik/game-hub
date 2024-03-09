import { SimpleGrid, Text } from '@chakra-ui/react';
import { useFetchGames } from '../hooks/useFetchGames';
import GameCard from './GameCard';

const GameGrid = () => {
  const { isLoading, error, gameList } = useFetchGames();

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      spacing={5}
      padding="10px"
    >
      {error && <Text>{error}</Text>}
      {gameList.map(game => {
        return (
          <GameCard
            key={game.id}
            name={game.name}
            image={game.background_image}
          />
        );
      })}
    </SimpleGrid>
  );
};

export default GameGrid;
