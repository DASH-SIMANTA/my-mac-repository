import { Link } from "react-router-dom";


const Post = ({post}) => {
    const { id,title, body } = post;
     const postStyle = {
        border: '1px solid gray',
        margin: '10px',
        padding: '10px',
        borderRadius: '5px',
        backgroundColor: '#f9f9',
    };



    return (
        <div style={postStyle}>
            <h4>Post of id: {id}</h4>
            <p>{title}</p>
            <p>{body}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <br />
            <Link to={`/post/${id}`}><button>Click Me</button></Link>
            
        </div>
    );
};

export default Post;