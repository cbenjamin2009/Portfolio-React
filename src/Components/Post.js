const Post = ({ post }) => {
    return (
        <div className="blogPost">
            <img src={post.coverImage} alt={post.title} />
            <h2>{post.title}</h2>
            <p>{post.brief}</p>
        </div>
    )
}

export default Post;