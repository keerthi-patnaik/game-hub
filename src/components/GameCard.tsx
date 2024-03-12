import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Platform } from '../hooks/useFetchGames';
import getCroppedImageUrl from '../services/getCroppedImageUrl';
import CriticsScore from './CriticsScore';
import PlatformListIcons from './PlatformListIcons';

type GameCardProps = {
  name: string;
  image: string;
  platforms: Platform[];
  metacritic: number;
};

const GameCard = ({ metacritic, name, image, platforms }: GameCardProps) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformListIcons platforms={platforms} />
          <CriticsScore score={metacritic} />
        </HStack>
        <Heading size="md">{name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
