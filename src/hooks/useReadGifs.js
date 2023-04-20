import { useContext } from "react";
import GifsContext from "context/GifsContext";

export default function useReadGifs(){
    const {gifs} = useContext(GifsContext)
    return gifs
}