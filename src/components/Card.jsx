import {Link} from 'react-router-dom'


export default function Card({title, link, backgroundImage}) {
  return (
    <Link to={link} className='card' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h2 className='card-text'>{title}</h2>
    </Link>
  )
}
