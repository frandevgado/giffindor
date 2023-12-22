import './styles.css'
import ListOfGif from "components/ListOfGifs/ListOfGifs"
import SearchBar from "components/SearchBar/SearchBar"
import { useGifs } from "hooks/useGifs"
import { useEffect, useRef, useCallback } from 'react'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'
import { Link } from "wouter"
import { NewtonsCradle } from "@uiball/loaders"
import useLocation from 'wouter/use-location'
import {Helmet} from 'react-helmet'

export default function SearchResults({ params }){
    const { keyword } = params
    const { loading, gifs, setPage }  = useGifs({ keyword })
    const externalRef = useRef()
    const { NearScreen } = useNearScreen({ externalRef: loading ? null : externalRef, once: false })
    const [ path, pushLocation ] = useLocation()

    const gifsSearch = decodeURI(keyword)
    const title = `${gifs.length} results for '${gifsSearch}'`
    const description = `List of '${gifsSearch}' search results`

    const handleWDebounceMoreGifs = useCallback(
        debounce(() => setPage(prevPage => prevPage + 1),300)
        , [setPage])
    
    useEffect(() =>{
        if(NearScreen) handleWDebounceMoreGifs()
    },[handleWDebounceMoreGifs, NearScreen])

    const submitHandler = useCallback(({ keyword }) => {
        pushLocation(`/search/${keyword}`)
    },[pushLocation])

    return <>
        {
            loading
            ? <div className="loading-container">
                <Helmet>
                    <title>Loading...</title>
                </Helmet>
                <h1 className="logo ">Giffindor</h1>
                <NewtonsCradle size={40} speed={1.4} color="white"/>
              </div>
            : <div className="body-searchresults">
                <Helmet>
                    <title>{title}</title>
                    <meta name='description' content={description}/>
                </Helmet>
                <header className="body-searchresults__header">
                    <Link to="/">
                      <h1 className="logo">Giffindor</h1>
                    </Link>   
                    <SearchBar onSubmit={submitHandler}/>
                </header>
                <main className='main-container'>
                    <h3 className="your-search">Your search</h3>
                    <ListOfGif gifs={gifs}/>
                    <div id='visor' ref={externalRef}></div>
                </main>
              </div>
        }
    </>
}
