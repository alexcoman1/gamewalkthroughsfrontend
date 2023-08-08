import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    
    <nav>
        <Link className='button' to="/">Home</Link>
        <Link className='button' to="/register">Register</Link>
        <Link className='button' to="/login">Login</Link>
        <Link className='button' to="/profile">Profile</Link>
        
    </nav>
  )
}
