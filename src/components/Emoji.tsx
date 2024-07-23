import bull from "../assets/bulls-eye.webp"
import meh from '../assets/meh.webp'
import thumbs from '../assets/thumbs-up.webp'
import {Image, ImageProps} from "@chakra-ui/react";

interface Props{
    rating: number;
}
const Emoji = ({rating}:Props) =>{
    // rating_to: 1,2,3,4,5

    if (rating < 3) return null;

    const emojiMap:{ [key:number]:ImageProps} = {
        3: {src:meh,alt:'meh',boxSize:'25px'},
        4: {src:thumbs,alt:'thumbs',boxSize:'25px'},
        5: {src:bull,alt:'bull',boxSize:'25px'},
    }
    return (
        <Image {...emojiMap[rating]} marginTop={2}/>
    )
}
export default Emoji;