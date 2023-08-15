import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from '../context/userContext'
import Dashboard from './pages/Dashboard'
import CommentSection from './components/CommentSection'
import Logout from './components/Logout'

import Kotor from './pages/kotor/Kotor'
import Chapter1 from './pages/kotor/Chapter1'

import Cyberpunk from './pages/cyberpunk/Cyberpunk'




axios.defaults.baseURL = "https://gamewalkthroughs-api.onrender.com"
axios.defaults.withCredentials = true


function App() {
  return (
    <UserContextProvider>
      <Navbar />
      <Toaster position="bottom-right" toastOptions={{duration: 2000}} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Dashboard />} />
        <Route path="/comments/" element={<CommentSection />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="/kotor" element={<Kotor />} />
        <Route path="/kotor/chapter1" element={<Chapter1 />} />

        <Route path="/cyberpunk" element={<Cyberpunk />} />
        
        
      </Routes>

    </UserContextProvider>
  )
}

export default App
