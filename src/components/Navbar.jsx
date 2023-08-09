import { Link } from "react-router-dom"
import Logout from "./Logout"

export default function Navbar() {
  return (
    
    <nav>
        <Link className='button' to="/">Home</Link>
        <Link className='button' to="/register">Register</Link>
        <Link className='button' to="/login">Login</Link>
        <Link className='button' to="/profile">Profile</Link>
        <Link className='button' to="/logout">Logout</Link>
        
    </nav>
  )
}
