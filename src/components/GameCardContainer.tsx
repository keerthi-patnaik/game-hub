import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

type GameCardContainerProps = {
  children: ReactNode;
};

const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return <Box borderRadius={10}>{children}</Box>;
};

export default GameCardContainer;
