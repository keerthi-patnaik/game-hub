import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

type SearchInputProps = {
  onSearch: (value: string) => void;
};

const SearchInput = ({ onSearch }: SearchInputProps) => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <BsSearch color="gray.300" />
      </InputLeftElement>
      <Input
        onChange={e => {
          onSearch(e.target.value);
        }}
        borderRadius={20}
        variant="filled"
        size="md"
        placeholder="Search games..."
      />
    </InputGroup>
  );
};

export default SearchInput;
