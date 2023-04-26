import "./styles.css"
import { Link } from "wouter"
import { memo } from 'react'

function Gif({title, id, url}){

    return(
        <div className="gifImg">
          <Link to={`/detail/${id}`}>
            <img src={url} alt={title} key={id}/>
          </Link>
        </div>
    )
}

export default memo(Gif, (prevProps, nextProps) => { return prevProps.id === nextProps.id })