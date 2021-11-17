import { useState } from 'react';
// import Hashnode from '../API/Hashnode'
import Post from './Post'


  


function Blog() {
    


    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(false)
    
    const query = `
    {
      user(username: "ChrisBenjamin") {
        publication {
          posts(page: 0) {
            slug
            title
            brief
            coverImage
            replyCount
            totalReactions
          }
        }
      }
    }
  `;
  
  const fetchPosts = async () => {
      const resp = await fetch('https://api.hashnode.com', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ query })
      });
      const hashnodeResponse = await resp.json();
      setBlogs(hashnodeResponse.data.user.publication.posts)
    };

    fetchPosts()

    return (
        <div className="blog-div">
            <h2>A collection of my recent blog articles</h2>
            {!loading ? <div class="blog-container">
                {blogs.map((post, index) => (
                    <a key={index} href={`https://chrisbenjamin.hashnode.dev/${post.slug}`} >
                        <Post post={post} />
                    </a>
                ))}
            </div> : <h1>Loading...</h1>}
        </div>
    )
}


export default Blog



