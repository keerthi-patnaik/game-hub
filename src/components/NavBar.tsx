import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeToggle from './ColorModeToggle';
import SearchInput from './SearchInput';

type NavBarProps = {
  onSearch: (value: string) => void;
};

const NavBar = ({ onSearch }: NavBarProps) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="55px" />
      <SearchInput
        onSearch={value => {
          onSearch(value);
        }}
      />
      <ColorModeToggle />
    </HStack>
  );
};

export default NavBar;
