import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { CgChevronDown } from 'react-icons/cg';

type SortSelectorProps = {
  onSelectOrderBy: (order: string) => void;
  selectedOrder: string | '';
};

const sortByOrders = [
  {
    value: '',
    label: 'Relevance',
  },
  {
    value: '-added',
    label: 'Date added',
  },
  {
    value: '-released',
    label: 'Release date',
  },
  {
    value: '-metacritic',
    label: 'Popularity',
  },
  {
    value: '-rating',
    label: 'Average rating',
  },
];

const SortSelector = ({
  selectedOrder,
  onSelectOrderBy,
}: SortSelectorProps) => {
  const currentOrderBy = sortByOrders.find(o => {
    return o.value == selectedOrder;
  });

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<CgChevronDown />}>
        Order By : {currentOrderBy ? currentOrderBy.label : 'Relevance'}
      </MenuButton>
      <MenuList maxH="350px" overflowY="scroll">
        {sortByOrders.map((order, index) => {
          return (
            <MenuItem
              key={index}
              onClick={() => {
                onSelectOrderBy(order.value);
              }}
            >
              {order.label}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
