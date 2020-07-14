const apiKey = "QD42GT9GNNLsKEo1852Enm3sXv26r9NT"

export default function getGifs({ keyword = "marvel" } = {}) {
  const APIurl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=&rating=g&lang=en`
  const fetchGifs = async () => {
    const response = await fetch(APIurl)
    const data = await response.json()
    const gifs = data.data
    return gifs
  }
  return fetchGifs()
}
