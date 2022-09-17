import Gif from "../../components/Gif"
import useGlobalGifs from "../../hooks/useGlobalGif"

const Detail = ({ params }) => {

  const gifs = useGlobalGifs()
  
  const gif = gifs.find(singleGif => singleGif.id === params.id)


    return <Gif {...gif} />
}

export default Detail