import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { Platform } from '../hooks/useFetchGames';
import PlatformList from './PlatformList';

type GameCardProps = {
  name: string;
  image: string;
  platforms: Platform[];
};

const GameCard = ({ name, image, platforms }: GameCardProps) => {
  return (
    <Card>
      <Image src={image} />
      <CardBody>
        <PlatformList platforms={platforms} />
        <Heading size="md">{name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
