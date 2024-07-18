import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";
function App() {
  const [selectGenre, setSelectGenre] = useState<Genre | null>(null);
  const [selectPlatgorm, setSelectPlatgorm] = useState<Platform | null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //1024
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
        <PlatformSelector
          seletedPlatform={selectPlatgorm}
          onSelectedPlatform={(platform) => setSelectPlatgorm(platform)}
        />
        <GameGrid
          selectedGenre={selectGenre}
          selectedPlatform={selectPlatgorm}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
