import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const { id,title, body } = post;
    const navigate = useNavigate();
    // The useNavigate hook is used to programmatically navigate to a different route
    // In this case, it will be used to navigate to the post details page when the
    // "Show Details" button is clicked 
     const postStyle = {
        border: '1px solid gray',
        margin: '10px',
        padding: '10px',
        borderRadius: '5px',
        backgroundColor: '#f9f9',
    };

    const handleShowDetail = () => {
        navigate(`/post/${id}`);
        // This will navigate to the post details page for the specific post
        // The `id` is used to construct the URL for the post details page      
    };



    return (
        <div style={postStyle}>
            <h4>Post of id: {id}</h4>
            <p>{title}</p>
            <p>{body}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <br />
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
            <br />
            <button  onClick={handleShowDetail}>Click to see details</button>
            
        </div>
    );
};

export default Post;