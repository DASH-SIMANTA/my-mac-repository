import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {

    const {postId} = useParams();
    console.log(postId);
    // The useParams hook is used to access the dynamic parameters from the URL
    // In this case, it retrieves the postId from the URL, which is used to fetch
    // the specific post details from the API based on the post ID provided in the URL
    // This allows us to display the details of the post with the corresponding ID in the component     
    const post = useLoaderData();
    // The useLoaderData hook is used to access the data loaded by the route's loader
    // In this case, it retrieves the post data fetched from the API based on the post ID
    // This data will be used to display the post details in the component      
    const { id,title, body } = post;
    const navigate = useNavigate();
    // The useNavigate hook is used to programmatically navigate to a different route
    // In this case, it will be used to navigate back to the previous page when the
    // "Go Back" button is clicked      
    const handleGoBack = () => {
        navigate(-1);
        // This will navigate back to the previous page in the browser history
        // The `-1` argument indicates to go back one step in the history stack
        // This is useful for providing a "Go Back" button functionality
        // It allows users to return to the previous page they were on before viewing the post details      
    }
    return (
        <div>
            <h3>Post details about: {id}</h3>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;