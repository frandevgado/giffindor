import { HashLoader} from "react-spinners";
import { XAlignDiv } from "./styled/Containers";

export default function Spinner(){
    return <XAlignDiv>
    <HashLoader
    color="hsl(360, 65%, 50%)"
    size={50}
    />
    </XAlignDiv>
}