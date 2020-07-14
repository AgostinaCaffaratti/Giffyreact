import React, { useEffect, useState } from "react"
import getGifs from "./services/getGif"

import "./App.css"

function App() {
  useEffect(() => {
    getGifs().then((gifs) => setGifs(gifs))
  }, [])

  const [gifs, setGifs] = useState([])
  return (
    <div className="App">
      <section className="App-content">
        {gifs.map((gif) => (
          <img src={gif.images.downsized_medium.url} key={gif.id} alt={gif.title} />
        ))}
      </section>
    </div>
  )
}

export default App
