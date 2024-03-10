import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import { useFetchGenres } from '../hooks/useFetchGenres';
import getCroppedImageUrl from '../services/getCroppedImageUrl';
import GenreListSkeleton from './GenreListSkeleton';

const GenreList = () => {
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

                    <Text fontSize="lg">{genre.name}</Text>
                  </HStack>
                </ListItem>
              );
            })}
      </>
    </List>
  );
};

export default GenreList;
