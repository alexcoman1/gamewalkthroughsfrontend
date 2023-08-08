import CommentPost from './CommentPost';
import { useState, useEffect } from 'react';
import axios from 'axios'


export default function CommentSection() {
    const [comments, setComments] = useState([]);
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(true)

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
        try {
            const response = await axios.post('/comments', {text})
            setComments([...comments, response.data.comment])
            
            setText('')
        } catch (error) {
            console.error('An error occurred while posting a comment:', error)
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
                    <p className="author-name">{comment.author ? comment.author.name : 'Anonymous'}</p>
                    <CommentPost {...comment} />
                </div>
            ))}
        </div>


    )
}