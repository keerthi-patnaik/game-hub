import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import { useState } from 'react';
import GameGrid from './components/GameGrid';
import GameHeading from './components/GameHeading';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import { Genre, Platform } from './hooks/useFetchGames';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | undefined>();
  const [selectedPlatform, setSelectedPlatform] = useState<
    Platform | undefined
  >();
  const [selectedOrder, setSelectedOrder] = useState<string>('');
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <Grid
      templateAreas={{
        base: `'nav'
            'main'`,
        lg: `'nav nav'
          'side-nav main'`,
      }}
      templateRows={'70px 1fr'}
      templateColumns={{
        base: '1fr',
        lg: '220px 1fr',
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={value => {
            setSelectedValue(value);
          }}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="side-nav" paddingX={5}>
          <GenreList
            onFilterGenre={genre => {
              setSelectedGenre(genre);
            }}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box padding="10px" marginBottom={5}>
          <GameHeading
            platformTitle={selectedPlatform?.name}
            genreTitle={selectedGenre?.name}
          />
          <HStack spacing={5}>
            <PlatformSelector
              onFilterPlatform={platform => {
                setSelectedPlatform(platform);
              }}
              selectedPlatform={selectedPlatform?.name}
            />
            <SortSelector
              selectedOrder={selectedOrder}
              onSelectOrderBy={order => setSelectedOrder(order)}
            />
          </HStack>
        </Box>
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
          selectedOrder={selectedOrder}
          selectedValue={selectedValue}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
