import { useLocation } from 'wouter'
import XAlignDiv from '../../components/styled/XAlignDiv' 
import {Subtitle} from '../../components/styled/Headings'
import {UList, StyledTrendLink} from '../../components/styled/UList'
import { useState } from 'react'
import useGifs from '../../hooks/useGifs'
import ListOfGifs from '../../components/ListOfGifs'
import { StyledButton, StyledInput, StyledForm } from '../../components/styled/Inputs'
import TrendingSearches from '../../components/TrendingSearches'

const Home = () => {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const { loading, gifs } = useGifs()

    const handleSubmit = (evt) => {
        evt.preventDefault()
        if(keyword !== ''){
            pushLocation(`/search/${keyword}`)
        }
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return (
        <>
            <XAlignDiv>
                <StyledForm onSubmit={handleSubmit} >
                    <StyledInput search placeholder="Busca tus gifs aquí" onChange={handleChange} type="text" value={keyword} />
                    <StyledButton>Buscar</StyledButton>
                </StyledForm>
                <Subtitle>Tu última búsqueda ↓</Subtitle>
                {loading ? <i style={{color: 'white'}}>Cargando...</i> 
            : <ListOfGifs gifs={gifs} />}
                <UList>
                <TrendingSearches />
                </UList>
            </XAlignDiv>
        </>
    )
}

export default Home