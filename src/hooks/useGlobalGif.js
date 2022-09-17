import GifsContext from '../context/GifsContext'
import { useContext } from 'react'

const useGlobalGifs = () => {
    const {gifs} = useContext(GifsContext)

    return gifs
}

export default useGlobalGifs