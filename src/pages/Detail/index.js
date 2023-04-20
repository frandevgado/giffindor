import useReadGifs from "hooks/useReadGifs"
import Gif from "components/Gif/Gif"

export default function Detail({ params }){
    const gifs = useReadGifs()
    const gif = gifs.find(gif => gif.id === params.id)

    return <div>
        <Gif {...gif}/>
    </div>
}