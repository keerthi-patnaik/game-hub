import { Grid, GridItem, Show } from '@chakra-ui/react';
import GameGrid from './components/GameGrid';
import NavBar from './components/NavBar';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `'nav'
            'main'`,
        lg: `'nav nav nav'
          'side-nav main main'`,
      }}
      gridTemplateRows={'70px 1fr'}
      gridTemplateColumns={'250px 1fr 1fr'}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="side-nav">Side Nav</GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
