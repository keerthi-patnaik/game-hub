import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { IoIosArrowDown } from 'react-icons/io';
import { useFetchPlatforms } from '../hooks/useFetchPlatforms';

const PlatformSelector = () => {
  const { platforms, isError } = useFetchPlatforms();

  if (isError) return null;

  return (
    <Box padding="10px">
      <Menu>
        <MenuButton as={Button} rightIcon={<IoIosArrowDown />}>
          Platforms
        </MenuButton>
        <MenuList maxH="400px" overflowY="scroll">
          {platforms.map(platform => {
            return <MenuItem key={platform.id}>{platform.name}</MenuItem>;
          })}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PlatformSelector;
