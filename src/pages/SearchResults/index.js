import './styles.css';
import ListOfGif from "components/ListOfGifs/ListOfGifs";
import SearchBar from "components/SearchBar/SearchBar";
import { useGifs } from "hooks/useGifs";
import { useEffect, useRef, useCallback } from 'react';
import useNearScreen from 'hooks/useNearScreen';
import debounce from 'just-debounce-it';
import { Link } from "wouter";
import { NewtonsCradle } from "@uiball/loaders";

export default function SearchResults({ params }){
    const { keyword } = params
    const { loading, gifs, setPage }  = useGifs({ keyword })
    const externalRef = useRef()
    const { NearScreen } = useNearScreen({ externalRef: loading ? null : externalRef, once: false })

    const handleWDebounceMoreGifs = useCallback(
        debounce(() => setPage(prevPage => prevPage + 1),300)
        , [setPage])
    
    useEffect(() =>{
        if(NearScreen) handleWDebounceMoreGifs()
    },[handleWDebounceMoreGifs, NearScreen])

    return <>
        {
            loading
            ? <div className="loading-container">
                <h1 className="logo ">Giffindor</h1>
                <NewtonsCradle size={40} speed={1.4} color="white"/>
              </div>
            : <div className="body-searchresults">
                <header className="body-searchresults__header">
                    <Link to="/">
                      <h1 className="logo">Giffindor</h1>
                    </Link>   
                    <SearchBar/>
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
