import { Image } from '@chakra-ui/react';
import bullsEye from '../assets/bulls-eye.webp';
import meh from '../assets/meh.webp';
import thumbsUp from '../assets/thumbs-up.webp';

type EmojiProps = {
  rating: number;
};

const emojiImages: Record<
  number,
  { src: string; alt: string; boxSize: string }
> = {
  3: { src: meh, alt: 'meh', boxSize: '25px' },
  4: { src: thumbsUp, alt: 'thumbsUp', boxSize: '25px' },
  5: { src: bullsEye, alt: 'bullsEye', boxSize: '35px' },
};

const Emoji = ({ rating }: EmojiProps) => {
  if (rating < 3) return null;

  return <Image {...emojiImages[rating]} marginTop={1} />;
};

export default Emoji;
