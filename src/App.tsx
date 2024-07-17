import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import { Genre } from "./hooks/useGenres";
function App() {
  const [selectGenre, setSelectGenre] = useState<Genre | null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" padding={5}>
          <GenresList
            onSelectGenre={(genre) => setSelectGenre(genre)}
            selectedGenre={selectGenre}
          />
        </GridItem>
      </Show>
      <GridItem area="main" padding={10}>
        <PlatformSelector />
        <GameGrid selectedGenre={selectGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
