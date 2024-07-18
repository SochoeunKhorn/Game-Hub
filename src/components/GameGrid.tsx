import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import CardGame from "./CardGame";
import CardGameSkeleton from "./CardGameSkeleton";
import CardGameContainer from "./CardGameContainer";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";
interface Props {
  gameQuery: GameQuery | null;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        marginTop={2}
      >
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
