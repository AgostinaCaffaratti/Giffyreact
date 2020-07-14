import React, { useEffect, useState } from "react"
import Gifs from "../components/Gifs"
import getGifs from "./../services/getGif"

const ListOfGifs = ({ params }) => {
  const [gifs, setGifs] = useState([])
  const { keyword } = params

  useEffect(() => {
    getGifs({ keyword }).then((gifs) => setGifs(gifs))
  }, [keyword])

  return (
    <div>
      {gifs.map((gif) => (
        <Gifs id={gif.id} key={gif.id} title={gif.title} url={gif.images.downsized_medium.url} />
      ))}
    </div>
  )
}

export default ListOfGifs
