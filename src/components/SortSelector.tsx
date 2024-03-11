import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { CgChevronDown } from 'react-icons/cg';

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<CgChevronDown />}>
        Order By:
      </MenuButton>
      <MenuList maxH="350px" overflowY="scroll">
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average rating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
