import PostCard from './PostCard'

function Feed({ posts, onLikePost, onAddComment }) {
    if (!posts.length) {
        return (
            <section className="empty-state">
                <h2>No posts yet</h2>
                <p>Be the first person to share something with your friends.</p>
            </section>
        )
    }

    return (
        <section className="feed">
            {posts.map((post) => (
                <PostCard
                    key={post.id}
                    post={post}
                    onLikePost={onLikePost}
                    onAddComment={onAddComment}
                />
            ))}
        </section>
    )
}

export default Feed