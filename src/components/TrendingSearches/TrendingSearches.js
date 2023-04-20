import getTrendingGifs from 'services/getTrendingGifs'
import { useState, useEffect} from 'react'
import Category from 'components/Category'

export default function TrendingSearches(){
    const [trends, setTrends] = useState([])

    useEffect(() =>{
        getTrendingGifs().then(setTrends)
    },[])

    return  <Category name="Tendencias" options={trends} />
}
