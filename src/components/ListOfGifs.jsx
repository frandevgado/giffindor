import Gif from './Gif'
import GifsContainer from './styled/GifsContainer'



const ListOfGifs = ({ gifs}) =>{
    return (
        <GifsContainer>
          {
          gifs.map(({title,id,url}) => <Gif title={title} id={id} key={id} url={url} />)
          } 
        </GifsContainer>
    )
}

export default ListOfGifs