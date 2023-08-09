import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/userContext';

export default function Dashboard() {
    const { user, setUser } = useContext(UserContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const tokenRow = document.cookie.split(';').find(row => row.startsWith('token'))
                const token = tokenRow ? tokenRow.split('=')[1] : null;
                if (!token) {
                    console.error('Token not found');
                    setLoading(false);
                    return;
            }
                const response = await axios.get('/profile', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setUser(response.data); // Set user data in context
                setLoading(false);
            } catch (error) {
                console.error('An error occurred while fetching the profile:', error);
                setLoading(false);
            }
        };

        fetchProfile();
    }, [setUser]);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h1>Profile</h1>
            {!!user && (<h2>Hi {user.name}</h2>)}
        </div>
    );
}
