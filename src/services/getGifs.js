import { API_KEY, API_URL } from "./settings"

const fromApiResponseToGifs = apiResponse => {
     const {data = []} = apiResponse
     if (Array.isArray(data)){
      const gifs = data.map(image => {
        const { images, title, id } = image
        const { url } = images.original
        return { title, id, url }
      })
      return gifs
    }
    return []
}

const getGifs = ({limit = 25, keyword = null, page = 0}) => {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${limit * page}&rating=g&lang=en`

  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
  }

export default getGifs