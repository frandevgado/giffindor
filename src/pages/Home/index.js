import './styles.css'
import { Link, useLocation } from 'wouter'
import SearchBar from 'components/SearchBar/SearchBar'
import ListOfGif from 'components/ListOfGifs/ListOfGifs'
import TrendingSearches from 'components/TrendingSearches/index.js';
import { useGifs } from 'hooks/useGifs'

import { useCallback } from 'react'

export default function Home(){
    const { gifs } = useGifs()
    const [ path, pushLocation ] = useLocation()

    const submitHandler = useCallback(({ keyword }) => {
        pushLocation(`/search/${keyword}`)
    },[pushLocation])
    
    return(
        <main className='home-container'>
            <Link to="/">
              <h1 className="logo">Giffindor</h1>
            </Link>   
            <p className="slogan">easy to find, as if by magic</p>
            <SearchBar onSubmit={submitHandler}/>
            <h2 className='today-trending'>Today's trending</h2>
            <TrendingSearches/>
            <h2 className='last-search'>Your last search</h2>
            <ListOfGif gifs={gifs} />
        </main>
    )
}