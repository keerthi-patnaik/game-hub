import { SimpleGrid, Text } from '@chakra-ui/react';
import { useFetchGames } from '../hooks/useFetchGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
  const { isLoading, error, gameList } = useFetchGames();
  const skeletonArray = Array.from(Array(15).keys());

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={5}
        padding="10px"
      >
        {isLoading
          ? skeletonArray.map(skeleton => {
              return (
                <GameCardContainer>
                  <GameCardSkeleton key={skeleton} />
                </GameCardContainer>
              );
            })
          : gameList.map(game => {
              const platforms = game.parent_platforms.map(platform => {
                return platform.platform;
              });

              return (
                <GameCardContainer>
                  <GameCard
                    key={game.id}
                    name={game.name}
                    image={game.background_image}
                    platforms={platforms}
                    metacritic={game.metacritic}
                  />
                </GameCardContainer>
              );
            })}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
