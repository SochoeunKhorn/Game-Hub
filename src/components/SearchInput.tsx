import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/all";
import {useRef} from "react";
interface Props{
    onSearch: (search:string)=>void;
}
const SearchInput = ({onSearch}:Props) =>{
    const ref = useRef<HTMLInputElement>(null);
    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            if (ref.current) onSearch(ref.current.value)
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />}/>
                <Input ref={ref} borderRadius={20} variant='filled' placeholder='search...'/>
            </InputGroup>
        </form>
    )
}
export default SearchInput;