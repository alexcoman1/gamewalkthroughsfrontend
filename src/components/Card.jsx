import {Link} from 'react-router-dom'
import { useState } from 'react'


export default function Card({title, link, backgroundImage}) {
  const [hovered, setHovered] = useState(false)

  const defaultStyle = {
    backgroundImage: `url(${backgroundImage})`
  }

  const hoverStyle = {
    backgroundImage: `linear-gradient(rgba(112, 112, 112, 0.733), rgba(151, 151, 151, 0.226)), url(${backgroundImage})`
  }

  return (
    <Link to={link} className='card' style={hovered ? hoverStyle:defaultStyle} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <h2 className='card-text'>{title}</h2>
    </Link>
  )
}
