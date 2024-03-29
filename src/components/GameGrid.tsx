import { SimpleGrid, Text } from '@chakra-ui/react';
import { Genre, Platform, useFetchGames } from '../hooks/useFetchGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

type GameGridProps = {
  selectedGenre?: Genre;
  selectedPlatform?: Platform;
  selectedOrder?: string;
  selectedValue: string | '';
};

const GameGrid = ({
  selectedGenre,
  selectedPlatform,
  selectedOrder,
  selectedValue,
}: GameGridProps) => {
  const { isLoading, error, isError, gameList } = useFetchGames(
    selectedGenre?.id,
    selectedPlatform?.id,
    selectedOrder,
    selectedValue,
  );

  const skeletonArray = Array.from(Array(15).keys());

  if (isError) return <Text>{error?.message}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding="10px"
    >
      {isLoading
        ? skeletonArray.map(skeleton => {
            return (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            );
          })
        : gameList.map(game => {
            const platforms = game.parent_platforms.map(platform => {
              return platform.platform;
            });

            return (
              <GameCardContainer key={game.id}>
                <GameCard
                  name={game.name}
                  image={game.background_image}
                  platforms={platforms}
                  metacritic={game.metacritic}
                  rating={game.rating_top}
                />
              </GameCardContainer>
            );
          })}
    </SimpleGrid>
  );
};

export default GameGrid;
