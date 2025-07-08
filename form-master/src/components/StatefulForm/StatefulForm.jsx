import { useState } from "react";


const StatefulForm = () => {

    const [name, setName]= useState('Default Name');
    const [email, setEmail]= useState(null);
    const [password, setPassword]= useState(null);
    const [error, setError]= useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(password.length < 6){
            setError('Password must be at least 6 characters long');
            return;
        }
        setError('');
        // Here you can handle the form submission, e.g., send data to a server
        // For demonstration, we'll just log the values to the console
        console.log("Form submitted");
        // You can also reset the form fields if needed
        setName('');
        setEmail('');
        setPassword('');
        // Log the values       

        console.log(name,email,password);
    }
    const handleEmailChange = e => {
        console.log(e.target.value)
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        console.log(e.target.value)
        setPassword(e.target.value);
    }
    const handleNameChange = e => {
        console.log(e.target.value)
        setName(e.target.value);
    }
    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <input
                value={name}
                onChange={handleNameChange}
                 type="text" name="name" />
                <br />
                <input
                    onChange={handleEmailChange}
                 type="email" name="email" id="" />
                <br />
                <input
                onChange={handlePasswordChange}
                 type="password" name="password" required />
                <br />
                <input type="submit" value="Submit" />
                {error && <p style={{color: 'red'}}>{error}</p>}
            </form>
        </div>
    );
};

export default StatefulForm;