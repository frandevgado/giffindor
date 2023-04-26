import getTrendingGifs from 'services/getTrendingGifs'
import { useState, useEffect} from 'react'
import { Link } from 'wouter'
import './styles.css'

export default function TrendingSearches(){
    const [ trends, setTrends ] = useState([])

    useEffect(() => {
        getTrendingGifs().then(setTrends)
    },[])

    return <ul className='trends-list'>
        {trends.map(trend => 
        <Link key={`${trend}`} to= {`search/${trend}`}>
        <li>{trend}</li>
        </Link>
        )}
    </ul>
}
