import CommentPost from './CommentPost';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios'
import { UserContext } from '../../context/userContext';



export default function CommentSection(props) {
    const [comments, setComments] = useState([]);
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(true)
    const { user } = useContext(UserContext)
    

    useEffect(() => {
        const fetchComments = async () => {
            
            try {
                const response = await axios.get(`/comments?page=${props.pageIdentifier}`)
                setComments(response.data)
                setLoading(false)
            } catch (error) {
                console.error('An error occurred while fetching comments:', error)
                setLoading(false)
            }
        }

        fetchComments()
    }, [props.pageIdentifier])

    
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
                const response = await axios.post('/comments', {text, page: props.pageIdentifier}, {
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
            
            <form onSubmit={handleSubmit} className='comment-input-container'>
                <textarea placeholder="Comment" value={text} onChange={handleTextChange} required />
                <button type="submit" className='post-comment-btn'>Post Comment</button>
            </form>
            {comments.slice().reverse().map((comment, index) => (
                <div key={comment._id} className="comment-post">

                    
                    <p className="author-name">{comment.author ? comment.author.name : 'Anonymous'}</p>
                    <CommentPost {...comment} />
                    {comment.author && user && comment.author._id === user.id && (
                        <button className="delete-btn" onClick={() => handleDelete(comment._id)}>Delete</button>
                    )}
                </div>
                
            ))}
        </div>


    )

    
}