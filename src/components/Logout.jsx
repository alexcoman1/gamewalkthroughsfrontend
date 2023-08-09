import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';

export default function Logout() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      const { data } = await axios.get('/logout', { withCredentials: true });
      if (data.message === 'Logged out successfully') {
        setUser(null)
        navigate('/login'); // Redirect to the login page
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={handleLogout}>Confirm Logout</button>
  );
}