import {
  Button, Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "./OptimizedImage";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenresList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading } = useGenres();

  if (isLoading) return <Spinner />;
  return (
      <>
        <Heading fontSize='2xl' marginBottom={3}>Genre</Heading>
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={1}>
          <HStack>
            <Image
              boxSize="32px"
              src={getCroppedImageUrl(genre.image_background)}
              borderRadius={8}
              objectFit='cover'
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              variant="link"
              fontSize="lg"
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              textAlign='left'
              whiteSpace='normal'
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
      </>

  );
};

export default GenresList;
