const APIurl =
  "https://api.giphy.com/v1/gifs/search?api_key=QD42GT9GNNLsKEo1852Enm3sXv26r9NT&q=marvel&limit=10&offset=&rating=g&lang=en"

export default function getGifs() {
  const fetchGifs = async () => {
    const response = await fetch(APIurl)
    const data = await response.json()
    const gifs = data.data
    return gifs
  }
  return fetchGifs()
}
