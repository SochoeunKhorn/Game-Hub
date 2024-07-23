import {Heading} from "@chakra-ui/react";
import {GameQuery} from "../App";

interface Props {
    gameQuery:GameQuery;
}
const HeadingGame = ({gameQuery}:Props) =>{
    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`
    return(
        <Heading marginY={5} as='h1' fontSize='5xl'>{heading}</Heading>
    )
}
export default HeadingGame;