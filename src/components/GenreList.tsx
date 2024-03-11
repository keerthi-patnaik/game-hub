import { Button, HStack, Image, List, ListItem } from '@chakra-ui/react';
import { Genre } from '../hooks/useFetchGames';
import { useFetchGenres } from '../hooks/useFetchGenres';
import getCroppedImageUrl from '../services/getCroppedImageUrl';
import GenreListSkeleton from './GenreListSkeleton';

type GenreListProps = {
  onFilterGenre: (genre: Genre) => void;
};

const GenreList = ({ onFilterGenre }: GenreListProps) => {
  const { error, isLoading, genres } = useFetchGenres();

  const skeletonArray = Array.from(Array(15).keys());

  if (error) return null;

  return (
    <List>
      <>
        {isLoading
          ? skeletonArray.map(skeleton => {
              return <GenreListSkeleton key={skeleton} />;
            })
          : genres.map(genre => {
              return (
                <ListItem key={genre.id} paddingY="5px">
                  <HStack>
                    <Image
                      boxSize="32px"
                      borderRadius={8}
                      src={getCroppedImageUrl(genre.image_background)}
                    />

                    <Button
                      onClick={() => {
                        onFilterGenre(genre);
                      }}
                      variant="links"
                    >
                      {genre.name}
                    </Button>
                  </HStack>
                </ListItem>
              );
            })}
      </>
    </List>
  );
};

export default GenreList;
