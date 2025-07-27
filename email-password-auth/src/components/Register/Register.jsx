import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.init';


const Register = () => {
    const handleRegister =(event)=> {
        event.preventDefault();
        const email = event.target.email.value; //to get input value
        const password = event.target.password.value;
        console.log(email,password);
        // create user with email and password 
        createUserWithEmailAndPassword(auth,email, password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log('ERROR', error);
        })

    }
    return (
        <div className='max-w-lg mx-auto'>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
                    <div className="card-body  mx-auto">
                        <fieldset className="fieldset">

                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />

                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;