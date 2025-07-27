import { useRef, useState } from 'react';
import { auth } from '../../firebase.init';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Login = () => {
    const [success, setSuccess] = useState(false);
    const [loginError, setLoginError] = useState('');
    const emailRef = useRef();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setSuccess(false);
        setLoginError('')
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                if (!result.user.emailVerified) {
                    setLoginError('Please verify your email address')
                }
                else {

                    setSuccess(true);
                }
            })
            .catch(error => {
                console.log('ERROR', error);
                setLoginError(error.message);
            })

    }
    const handleForgetPassword=()=>{
        const email =emailRef.current.value;
        console.log('get me email address', emailRef.current.value);
        if(!email){
            console.log('Please provide a valid email address')
        }
        else{
            sendPasswordResetEmail(auth, email)
            .then(()=>{
                alert('Password Reset email sent, Please check your email');
            })
        }
    }

    return (
        <div className="hero bg-base-200 min-h-screen">

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' ref={emailRef}className="input" placeholder="Password" />

                        <div onClick={handleForgetPassword}><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </form>
                {
                    success && <p className='text-green-600'>User login successful</p>
                }
                {
                    loginError && <p className='text-red-500'>{loginError}</p>
                }
                <p className='text-center'>New to this website please <Link to='/signUp'>Sign Up</Link></p>

            </div>

        </div>

    );
};

export default Login;