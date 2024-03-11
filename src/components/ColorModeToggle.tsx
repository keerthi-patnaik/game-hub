import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch isChecked={colorMode == 'dark'} onChange={toggleColorMode} />
      <Text whiteSpace={'nowrap'}>
        {colorMode == 'dark' ? 'Dark mode' : 'Light mode'}
      </Text>
    </HStack>
  );
};

export default ColorModeToggle;
