import { Link } from "react-router-dom"
import { useContext, useEffect } from "react"
import { UserContext } from "../../context/userContext"

export default function Navbar() {
  const { user } = useContext(UserContext)

  useEffect(() => {
    // This callback will be triggered when the user state changes
    // You can use it to force a component re-render
  }, [user]);

  return (
    
    <nav>
        <Link className='button' to="/">Home</Link>
        <Link className='button' to="/register">Register</Link>
        {!user && <Link className='button' to="/login">Login</Link>}
        {user && <Link className='button' to="/logout">Logout</Link>}
        <Link className='button' to="/profile">Profile</Link>
        
        
    </nav>
  )
}
