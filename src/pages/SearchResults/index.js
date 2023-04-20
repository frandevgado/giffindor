import './styles.css';
import ListOfGif from "components/ListOfGifs/ListOfGifs";
import useGetGifs from "hooks/useGifs";
import SearchBar from "components/SearchBar/SearchBar";
import LazyTrending from "components/TrendingSearches";
import { Link } from "wouter";
import { useEffect, useRef, useCallback } from 'react';
import { NewtonsCradle } from "@uiball/loaders";
import useNearScreen from 'hooks/useNearScreen';
import debounce from 'just-debounce-it';

export default function SearchResults({ params }){
    const { keyword } = params
    const { loading, gifs, setPage }  = useGetGifs({ keyword })
    const externalRef = useRef()
    const { NearScreen } = useNearScreen({ externalRef: loading ? null : externalRef, once: false })

    const handleWDebounceMoreGifs = useCallback(
        debounce(() => setPage(prevPage => prevPage + 1),1000)
        ,[])
    
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
                
                <main>
                    <h3 className="your-search">Your search</h3>
                    <ListOfGif gifs={gifs}/>
                    <div id='visor' ref={externalRef}></div>
                    <button onClick={handleWDebounceMoreGifs}>More gifs</button>
                    <LazyTrending/>
                </main>
              </div>
        }
    </>
}