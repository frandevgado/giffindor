import { useState, useEffect, useContext } from 'react'
import GifsContext from 'context/GifsContext'
import getGifs from 'services/getGifs'

const INITIAL_PAGE = 0

export function useGifs({ keyword } = { keyword: null}){
    const [ loading, setLoading ] = useState(false)
    const [ page, setPage] = useState(INITIAL_PAGE)
    const { gifs, setGifs } = useContext(GifsContext)

    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

    useEffect(() =>{
        setLoading(true)
        getGifs({keyword: keywordToUse}).then(searchedGifs =>{
             setGifs(searchedGifs)
             setLoading(false)
             if(keyword !== null) localStorage.setItem('lastKeyword', keyword)
            })
        },[keyword, setGifs, keywordToUse])

    useEffect(() =>{
        if (page === INITIAL_PAGE) return

        getGifs({keyword: keywordToUse, page})
        .then(nextGifs =>{
            setGifs(prevGifs => prevGifs.concat(nextGifs))
        })
    },[page, keywordToUse, setGifs])

        return { loading, gifs, setPage }
}