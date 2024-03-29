import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { CgChevronDown } from 'react-icons/cg';
import { Platform } from '../hooks/useFetchGames';
import { useFetchPlatforms } from '../hooks/useFetchPlatforms';

type PlatformSelectorProps = {
  onFilterPlatform: (platform: Platform) => void;
  selectedPlatform?: string;
};

const PlatformSelector = ({
  onFilterPlatform,
  selectedPlatform,
}: PlatformSelectorProps) => {
  const { platforms, isError } = useFetchPlatforms();

  if (isError) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<CgChevronDown />}>
        {selectedPlatform ? selectedPlatform : 'Platforms'}
      </MenuButton>
      <MenuList maxH="350px" overflowY="scroll">
        {platforms.map(platform => {
          return (
            <MenuItem
              key={platform.id}
              onClick={() => {
                onFilterPlatform(platform);
              }}
            >
              {platform.name}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
