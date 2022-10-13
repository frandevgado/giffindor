import Gif from "components/Gif"
import useGlobalGifs from "hooks/useGlobalGif"
import { XAlignDiv } from "components/styled/Containers"

const Detail = ({ params }) => {

  const gifs = useGlobalGifs()
  
  const gif = gifs.find(singleGif => singleGif.id === params.id)


    return(
      <XAlignDiv detailSize>
        <Gif {...gif} />
      </XAlignDiv>
    )
}

export default Detail