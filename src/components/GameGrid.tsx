import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import CardGame from "./CardGame";
import CardGameSkeleton from "./CardGameSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={10}
      >
        {isLoading && skeletons.map((skeleton) => <CardGameSkeleton />)}
        {games.map((game) => (
          <CardGame game={game} key={game.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
