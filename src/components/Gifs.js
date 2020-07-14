import React from "react"
import "./gifs.css"
import { Link } from "wouter"

const Gifs = ({ id, title, url }) => {
  return (
    <>
      <Link className="gifs" to={`/gif/${id}`}>
        <h4>{title}</h4>
        <img src={url} alt={title} />
      </Link>
    </>
  )
}

export default Gifs
