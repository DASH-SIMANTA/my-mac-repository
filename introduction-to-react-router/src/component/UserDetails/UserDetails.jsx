import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    // The useLoaderData hook is used to access the data loaded by the route's loader
    // In this case, it retrieves the user data fetched from the API based on the user ID
    // This data will be used to display the user's details in the component  
    const { name, email, phone, website } = user;  
    return (
        <div>
            <h2>Details about user: {name}</h2>
            <p>Website: {website}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default UserDetails;