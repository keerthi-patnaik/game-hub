import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Platform } from '../hooks/useFetchGames';
import getCroppedImageUrl from '../services/getCroppedImageUrl';
import CriticsScore from './CriticsScore';
import PlatformList from './PlatformList';

type GameCardProps = {
  name: string;
  image: string;
  platforms: Platform[];
  metacritic: number;
};

const GameCard = ({ metacritic, name, image, platforms }: GameCardProps) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(image)} />
      <CardBody>
        <HStack justifyContent="space-between">
          <PlatformList platforms={platforms} />
          <CriticsScore score={metacritic} />
        </HStack>
        <Heading size="md">{name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
