
import useInputState from '../../hooks/useInputState';

const HookForm = () => {
    // const [name, handleNameChange]= useInputState('Default Name');
    const nameState= useInputState('Default Name');
    // const [email, handleEmailChange]= useInputState(null);
    // const [password, handlePasswordChange]= useInputState(null); 
    const handleSubmit = e => {
        // console.log('form data',name);
        console.log('form data',nameState.value);
        e.preventDefault();
       
        // console.log(e.target.name.value);
        // console.log(e.target.email.value);
        // console.log(e.target.phone.value);
        // console.log("Form submitted");
    };  
    return (
        <div>
              <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
                <input {...nameState} type="text" name="name" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;