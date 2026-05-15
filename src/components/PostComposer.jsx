import { useState } from 'react'

function PostComposer({ onCreatePost }) {
    const [content, setContent] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [videoUrl, setVideoUrl] = useState('')

    function handleSubmit(event) {
        event.preventDefault()

        if (!content.trim() && !imageUrl.trim() && !videoUrl.trim()) {
            return
        }

        onCreatePost({
            content: content.trim(),
            imageUrl: imageUrl.trim(),
            videoUrl: videoUrl.trim()
        })
        
        setContent('')
        setImageUrl('')
        setVideoUrl('')
    }

    return (
        <form className="post-composer" onSubmit={handleSubmit}>
            <textarea
                value={content}
                onChange={(event) => setContent(event.target.value)}
                placeholder="What's on your mind?"
                rows="4"
            />

            <div className="media-inputs">
                <input
                    type="text"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="Image URL (optional)"
                />
                <input
                    type="text"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    placeholder="Video URL (optional)"
                />
            </div>

            <div className="composer-actions">
                <span>{content.length}/500</span>
                <button type="submit">Share Post</button>
            </div>
        </form>
    )
}

export default PostComposer