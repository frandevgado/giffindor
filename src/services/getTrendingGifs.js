import { API_KEY, API_URL } from "./settings"

const fromApiResponseToGifs = apiResponse => {
    const { data = [] } = apiResponse
    if (Array.isArray(data)){
      return data
    }
}

export default function getTrendingGifs(){
    const getTrendingURL = `${API_URL}/trending/searches?api_key=${API_KEY}`

    return fetch(getTrendingURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}