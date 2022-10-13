import ListOfGifs from "components/ListOfGifs"
import { Subtitle } from "components/styled/Headings"
import useGifs from 'hooks/useGifs'

const SearchResults = ({ params }) => {
    const { keyword } = params
    const {loading, gifs} = useGifs({ keyword })

    const title = gifs ? `${gifs.length} resultados de ${keyword}` : ""


    return (
        <>
            <Subtitle>{decodeURI(title)}</Subtitle>
            {loading ? <i style={{color: 'white'}}>Cargando...</i> 
            : <ListOfGifs gifs={gifs} />}
        </>
        )
}

export default SearchResults