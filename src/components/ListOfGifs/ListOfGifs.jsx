import Gif from "../Gif/Gif"
import "./styles.css"

export default function ListOfGif({ gifs }){

    return (
    <section className="gifs-container">
       {
        gifs.map(gif => <Gif title={gif.title} url={gif.url} key={gif.id} id={gif.id}/>)        
        }
    </section>
    )
}