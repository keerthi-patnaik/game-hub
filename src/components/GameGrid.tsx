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
        const platforms = game.parent_platforms.map(platform => {
          return platform.platform;
        });

        return (
          <GameCard
            key={game.id}
            name={game.name}
            image={game.background_image}
            platforms={platforms}
          />
        );
      })}
    </SimpleGrid>
  );
};

export default GameGrid;
