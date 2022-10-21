import ListOfGifs from "components/ListOfGifs"
import { Subtitle } from "components/styled/Headings"
import useGifs from 'hooks/useGifs'

const SearchResults = ({ params }) => {
    const { keyword } = params
    const {loading, gifs, setPage} = useGifs({ keyword })

    const title = gifs ? `${gifs.length} resultados de ${keyword}` : ""

    const handleNextPage = () => setPage(prevPage => prevPage + 1)
    
    return (
        <>
            <Subtitle>{decodeURI(title)}</Subtitle>
            {loading ? <i style={{color: 'white'}}>Cargando...</i> 
            : <ListOfGifs gifs={gifs} />}
            <button onClick={handleNextPage}>Next page</button>
        </>
        )
}

export default SearchResults