import { useEffect, useRef } from "react";


const RefFrom = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(() => {
        nameRef.current.focus(); // Focus on the name input field when the component mounts
        // You can also set default values if needed
        // nameRef.current.value = "Default Name";
        // emailRef.current.value = "Default Email";
        // passwordRef.current.value = "Default Password";
        // Note: This is an uncontrolled form example, so we are not using state to manage the input values
        // Instead, we are using refs to directly access the DOM elements
        // This is useful for scenarios where you want to avoid re-rendering the component on every input change
        // or when you want to access the input values directly without managing state.     
    }, []);
        
    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
        // Accessing the input values using e.target
        // const name = e.target.name.value;
        // const email = e.target.email.value;
        // const phone = e.target.phone.value;         
    }

    return (
        <div>
            <h2>Ref Form</h2>
            {/* This is an uncontrolled form example */}
            {/* You can use refs to access the input values directly */}
            {/* For demonstration, we will not use state here */}
            {/* In a real application, you might want to handle form submission differently */}
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" />
                <br />
                <input ref={emailRef} type="email" name="email" id="" />
                <br />
                <input ref={passwordRef} type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefFrom;