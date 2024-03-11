import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import { useState } from 'react';
import GameGrid from './components/GameGrid';
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

  return (
    <Grid
      templateAreas={{
        base: `'nav'
            'main'`,
        lg: `'nav nav'
          'side-nav main'`,
      }}
      gridTemplateRows={'70px 1fr'}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area="nav">
        <NavBar />
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
        <HStack spacing={5} padding="10px" marginBottom={5}>
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
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
          selectedOrder={selectedOrder}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
