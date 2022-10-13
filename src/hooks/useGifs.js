import { useState, useEffect } from 'react'
import getGifs from 'services/getGifs'
import { useContext } from 'react'
import GifsContext from 'context/GifsContext'

const useGifs = ({ keyword } = {keyword: null}) => {
    const [loading, setLoading] = useState(false)
    const {gifs, setGifs} = useContext(GifsContext)

    
    useEffect(() =>{
      setLoading(true)
      const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
    getGifs({keyword: keywordToUse})
    .then(gifs => {
      setGifs(gifs)
      setLoading(false)
      localStorage.setItem('lastKeyword', keywordToUse)
      }
    )  
    },[keyword])

    return { loading, gifs }
}

export default useGifs