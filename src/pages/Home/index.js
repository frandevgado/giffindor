import { useLocation } from 'wouter'
import { XAlignDiv, MainContainer } from 'components/styled/Containers' 
import { useState } from 'react'
import useGifs from 'hooks/useGifs'
import ListOfGifs from 'components/ListOfGifs'
import { StyledButton, StyledInput, StyledForm } from 'components/styled/Inputs'
import TrendingSearches from 'components/TrendingSearches'
import { Subtitle } from 'components/styled/Headings'
import Spinner from 'components/Spinner'

const Home = () => {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const { loading, gifs } = useGifs()
    const lastSearchTitle = localStorage.getItem('lastKeyword')

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
                  <Subtitle left topMargin>↓ Tu última búsqueda: {decodeURI(lastSearchTitle)} </Subtitle>
                <MainContainer>
                  {loading ? <Spinner/>
                  : <ListOfGifs gifs={gifs} />}
                  <TrendingSearches />
                </MainContainer>
          </XAlignDiv>
        </>
    )
}

export default Home