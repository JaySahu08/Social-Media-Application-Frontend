import { useState } from 'react'

function PostCard({ post, onLikePost, onAddComment }) {
    const [comment, setComment] = useState('')

    function handleSubmitComment(event) {
        event.preventDefault()

        if (!comment.trim()) {
            return
        }

        onAddComment(post.id, comment.trim())
        setComment('')
    }

    return (
        <article className="post-card">
            <header className="post-header">
                <div className="avatar">
                    {post.authorName?.charAt(0)?.toUpperCase() || 'U'}
                </div>

                <div>
                    <h3>{post.authorName || post.userName || 'Unknown User'}</h3>
                    <p>{post.createdAt || 'Just now'}</p>
                </div>
            </header>

            <p className="post-content">{post.content}</p>

            {post.imageUrl && (
                <div className="post-media">
                    <img src={post.imageUrl} alt="Post media" />
                </div>
            )}

            {post.videoUrl && (
                <div className="post-media">
                    <video controls>
                        <source src={post.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}

            <div className="post-actions">
                <button type="button" onClick={() => onLikePost(post.id)}>
                    Like {post.likeCount ? `(${post.likeCount})` : ''}
                </button>

                <span>{post.comments?.length || 0} comments</span>
            </div>

            <div className="comments">
                {post.comments?.map((commentItem) => (
                    <div className="comment" key={commentItem.id}>
                        <strong>{commentItem.authorName || commentItem.userName || 'Friend'}</strong>
                        <span>{commentItem.text || commentItem.content}</span>
                    </div>
                ))}
            </div>

            <form className="comment-form" onSubmit={handleSubmitComment}>
                <input
                    type="text"
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                    placeholder="Write a comment..."
                />
                <button type="submit">Comment</button>
            </form>
        </article>
    )
}

export default PostCard