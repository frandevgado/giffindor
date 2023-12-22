import Gif from "components/Gif/Gif"
import useSingleGif from "hooks/useSingleGif"
import { Ring } from "@uiball/loaders"
import { Redirect, Link } from "wouter"
import {Helmet} from 'react-helmet'
import './styles.css'

export default function Detail({ params }){
    const {gif, isLoading, isError} = useSingleGif({id: params.id})
    const description = 'picked gif detail'
    const pageTitle = gif.title

    if (isLoading) return(
        <>
        <Helmet>
            <title>Loading...</title>
        </Helmet>
        <Ring />
        </>
    ) 
    if (isError) return <Redirect to="/404"/>
    if (!gif) return null

    return <div className="detail-container">
        <Helmet>
            <title>{pageTitle}</title>
            <meta name="description" content={description} />
        </Helmet>
        <Link to="/">
            <h1 className="logo">Giffindor</h1>
        </Link>
        <Gif {...gif}/>
    </div>
}
