import CommentPost from './CommentPost';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios'
import { UserContext } from '../../context/userContext';



export default function CommentSection() {
    const [comments, setComments] = useState([]);
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(true)
    const { user } = useContext(UserContext)
    

    useEffect(() => {
        const fetchComments = async () => {
            
            try {
                const response = await axios.get('/comments/')
                setComments(response.data)
                setLoading(false)
            } catch (error) {
                console.error('An error occurred while fetching comments:', error)
                setLoading(false)
            }
        }

        fetchComments()
    }, [])

    
    const handleTextChange = (e) => setText(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const getCookie = (name) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
            return null;
        }
    
        const token = getCookie('token');
        console.log('Retrieved token:', token)
    
        
            try {
                const response = await axios.post('/comments', {text}, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                    withCredentials: true
                })
                setComments([...comments, response.data.comment])
                setText('')
            } catch (error) {
                console.error('An error occurred while posting a comment:', error)
            }
        
    }

    const handleDelete = async (commentId) => {
        const getCookie = (name) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
            return null;
        }
    
        const token = getCookie('token');
        console.log('Retrieved token:', token)
        
        try {
            await axios.delete(`/comments/${commentId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                withCredentials: true
            })
            setComments(comments.filter(comment => comment._id !== commentId))
        } catch (error) {
            console.error('An error occured while deleting a comment:', error)
        }
    }

    

    if (loading) return <div>Loading...</div>

    return (
        <div className="comment-section">
            <h3>Comments</h3>
            
            <form onSubmit={handleSubmit}>
                <textarea placeholder="Comment" value={text} onChange={handleTextChange} required />
                <button type="submit">Post Comment</button>
            </form>
            {comments.slice().reverse().map((comment, index) => (
                <div key={comment._id} className="comment-post">

                    {console.log("Comment author ID:", comment.author && comment.author._id)}
                    {console.log("User ID from context:", user && user._id)}
                    {console.log("User object from context:", user)}

                    <p className="author-name">{comment.author ? comment.author.name : 'Anonymous'}</p>
                    <CommentPost {...comment} />
                    {comment.author && comment.author._id === user.id && (
                        <button onClick={() => handleDelete(comment._id)}>Delete</button>
                    )}
                </div>
                
            ))}
        </div>


    )

    
}