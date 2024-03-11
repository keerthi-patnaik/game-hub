import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { BsGlobe } from 'react-icons/bs';
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { Platform, slugName } from '../hooks/useFetchGames';

type PlatformListIconsProps = {
  platforms: Platform[];
};

const iconsImages: Record<slugName, IconType> = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  mac: FaApple,
  linux: FaLinux,
  android: FaAndroid,
  ios: MdPhoneIphone,
  nintendo: SiNintendo,
  web: BsGlobe,
};

const PlatformListIcons = ({ platforms }: PlatformListIconsProps) => {
  return (
    <HStack marginY={1}>
      {platforms.map(platform => {
        return (
          <Icon
            color="gray.500"
            as={iconsImages[platform.slug]}
            key={platform.id}
          />
        );
      })}
    </HStack>
  );
};

export default PlatformListIcons;
