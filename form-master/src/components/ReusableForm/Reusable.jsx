

const Reusable = ( {fromTitle,handleSubmit, submitBtnText ='Submit', children}) => {
    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value
        };
        console.log(data);
        handleSubmit && handleSubmit(data); // Call the parent handler if provided
        // You can also handle the form submission here, e.g., send data to a server
        // For demonstration, we'll just log the values to the console
        // You can also reset the form fields if needed
        e.target.reset(); // Reset the form fields after submission
        // Log the values
        console.log("Local form submitted");
    };

    return (
        <div>
            {/* {<h2>{fromTitle}</h2>} */}
            {children}
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="text" name="phone" />
                <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default Reusable;