import { HStack, ListItem, Skeleton } from '@chakra-ui/react';

const GenreListSkeleton = () => {
  return (
    <ListItem paddingY="5px">
      <HStack>
        <Skeleton boxSize="32px" borderRadius={8} />
        <Skeleton height="10px" width="100%" />
      </HStack>
    </ListItem>
  );
};

export default GenreListSkeleton;
