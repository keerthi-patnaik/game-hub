import { Grid, GridItem, Show } from '@chakra-ui/react';
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
    >
      <GridItem bg="coral" area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem bg="pink" area="side-nav">
          Side Nav
        </GridItem>
      </Show>
      <GridItem bg="green" area="main">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
