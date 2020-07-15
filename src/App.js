import React from "react"
import { Link, Route } from "wouter"
import ListOfGifs from "./components/ListOfGifs"

import "./App.css"

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <img className="App-logo" src="./logo.png" alt="logo giffy" />
        </Link>
        <h1>APP</h1>
        <Link to="/gif/marvel">Gifs de Marvel</Link>
        <Link to="/gif/thor">Gifs de Thor</Link>
        <Link to="/gif/ironman">Gifs de ironman</Link>
        <Route component={ListOfGifs} path="/gif/:keyword" />
      </section>
    </div>
  )
}

export default App
