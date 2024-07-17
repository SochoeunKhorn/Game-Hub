import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import CardGame from "./CardGame";
import CardGameSkeleton from "./CardGameSkeleton";
import CardGameContainer from "./CardGameContainer";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10} padding={10}>
        {/* Skeleton Card */}
        {isLoading &&
          skeletons.map((skeleton) => (
            <CardGameContainer key={skeleton}>
              <CardGameSkeleton />
            </CardGameContainer>
          ))}
        {/* Game Card */}
        {data.map((game) => (
          <CardGameContainer key={game.id}>
            <CardGame game={game} />
          </CardGameContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
