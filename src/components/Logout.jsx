import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const { data } = await axios.get('/logout', { withCredentials: true });
      if (data.message === 'Logged out successfully') {
        navigate('/login'); // Redirect to the login page
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}