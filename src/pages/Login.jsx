import { useState, useContext } from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import { UserContext } from '../../context/userContext'

export default function Login() {
  const navigate = useNavigate()
  const {setUser} = useContext(UserContext)
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const loginUser = async (e) => {
    e.preventDefault()
    const {email, password} = data
    try {
      const {data} = await axios.post('/login', {
        email,
        password
      } , {withCredentials: true})
      if(data.error) {
        toast.error(data.error)
      } else {
        setUser(data.user)
        setData({})
        toast.success('Login successful. Welcome.')
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>
      <form onSubmit={loginUser}>
        <label>Email</label>
          <input type="email" placeholder='enter email...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
          <label>Password</label>
          <input type="password" placeholder='enter password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
          <button type='submit'>Login</button>
      </form>

    </div>
  )
}
