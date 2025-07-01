import { useLoaderData } from "react-router-dom";
import Post from "./Post";


const Posts = () => {
    const posts = useLoaderData();
    // The useLoaderData hook is used to access the data loaded by the route's loader
    // In this case, it retrieves the posts data fetched from the API
    // This data will be used to display the posts in the component 
    return (
        <div>
            <h2>Posts: {posts.length}</h2>
            <div className="users">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>
                    )
                }
            </div>
            
        </div>
    );
};

export default Posts;