import { Card, CardBody, Heading, Image, Stack } from '@chakra-ui/react';

type GameCardProps = {
  name: string;
  image: string;
};

const GameCard = ({ name, image }: GameCardProps) => {
  return (
    <Card>
      <Image src={image} />
      <CardBody>
        <Stack>
          <Heading size="md">{name}</Heading>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
