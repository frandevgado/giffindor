import Gif from './Gif'
import { XAlignDiv } from './styled/Containers'
import GifsContainer from './styled/GifsContainer'
import { Subtitle } from './styled/Headings'


const ListOfGifs = ({ gifs, loading }) =>{

  loading ? <i style={{color: 'white'}}>Cargando...</i> 
  : <ListOfGifs gifs={gifs} />
    return (
        <GifsContainer>
          {
          gifs.map(({title,id,url}) => <Gif title={title} id={id} key={id} url={url} />)
          } 
        </GifsContainer>
    )
}

export default ListOfGifs