import { API_URL, API_KEY } from "./settings"

const fromApiResponseToGifs = apiResponse => {
    const { data = [] } = apiResponse
    if (Array.isArray(data)) {
        const gifs = data.map(singleGifData => {
          const { images, title, id } = singleGifData
          const { url } = images.downsized_medium
          return { title, id, url }
        })
      return gifs
    }
    return []
}

export default function getGifs ({keyword = 'franco', limit = 10, page = 0} = {}){

    const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`

    return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}
