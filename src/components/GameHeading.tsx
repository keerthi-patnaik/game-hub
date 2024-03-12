import { Heading } from '@chakra-ui/react';

type GameHeadingProps = {
  platformTitle?: string;
  genreTitle?: string;
};

const GameHeading = ({ platformTitle, genreTitle }: GameHeadingProps) => {
  return (
    <Heading as="h1" marginY={5} fontSize="6xl">
      {platformTitle && <span>{platformTitle} </span>}
      {genreTitle && <span>{genreTitle} </span>}
      Games
    </Heading>
  );
};

export default GameHeading;
