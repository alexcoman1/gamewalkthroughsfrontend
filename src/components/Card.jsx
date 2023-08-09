import {Link} from 'react-router-dom'


export default function Card({title, link}) {
  return (
    <Link to={link} className='card'>
      <h2 className='card-text'>{title}</h2>
    </Link>
  )
}
