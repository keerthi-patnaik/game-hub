import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <BsSearch color="gray.300" />
      </InputLeftElement>
      <Input
        borderRadius={20}
        variant="filled"
        size="md"
        placeholder="Search games..."
      />
    </InputGroup>
  );
};

export default SearchInput;
