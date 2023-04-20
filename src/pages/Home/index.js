<<<<<<< HEAD
import './styles.css'
import { Link } from 'wouter'
import SearchBar from 'components/SearchBar/SearchBar'
import ListOfGif from 'components/ListOfGifs/ListOfGifs'
import TrendingSearches from 'components/TrendingSearches/TrendingSearches'
import useGifs from 'hooks/useGifs'
import { useLocation } from "wouter"
import { useCallback } from 'react'

export default function Home(){
    const { gifs } = useGifs()
    const [ path, pushLocation ] = useLocation()

    const submitHandler = useCallback(({ keyword }) => {
        pushLocation(`/gifs/${keyword}`)
    },[pushLocation])
    
    return(
        <main className='home-container'>
            <Link to="/">
              <h1 className="logo">Giffindor</h1>
            </Link>   
            <p className="slogan">easy to find, as if by magic</p>
            <SearchBar onSubmit={submitHandler}/>
            <h2 className='trending-title'>Today's trending</h2>
            <TrendingSearches/>
            <ListOfGif gifs={gifs} />
        </main>
    )
}
=======
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
>>>>>>> 385d19605c32d7398ce4edc2573bb03b74ac926a
