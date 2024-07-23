
import {Box, Grid, GridItem, HStack, Show} from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import HeadingGame from "./components/HeadingGame";

// GameQuery instead
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  order: string;
  searchText:string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery); 
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // lg > 1024
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(searchText)=>setGameQuery({...gameQuery,searchText})}/>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" padding={5}>
          <GenresList
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main" padding={10}>
        <Box marginY={2}>
          <HeadingGame gameQuery={gameQuery}/>
          <Box>
            <HStack spacing={2}>
              <PlatformSelector
                  seletedPlatform={gameQuery.platform}
                  onSelectedPlatform={(platform) =>
                      setGameQuery({ ...gameQuery, platform })
                  }
              />
              <SortSelector
                  onSelectSortOrder={(order) => setGameQuery({ ...gameQuery, order })}
                  selectedOrder={gameQuery.order}
              />
            </HStack>

          </Box>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
