import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase.init";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";



const SignUp = () => {
    const [success, setSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSignUp = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        const name = e.target.name.value;
        const photo = e.target.photo.value;


        // reset error and status
        setErrorMessage('');
        setSuccess(false);
        if (!terms) {
            setErrorMessage('Please accept our terms and condition.');
            return;
        }

        if (password.length < 6) {
            setErrorMessage('Password should be 6 character or longer');
            return;
        }
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#^()\-_=+{}[\]|;:'",.<>\/?\\])[A-Za-z\d@$!%*?&#^()\-_=+{}[\]|;:'",.<>\/?\\]{8,}$/;
        if (!passwordRegex.test(password)) {
            setErrorMessage('At least one uppercase, one lowercase, one number, one special character');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                // console.log(result.user);
                setSuccess(true);
                // send verification email address
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        console.log('verification email sent');
                    });
                //update profile information
                const profile = {
                    displayName: name,
                    photoURL: photo
                };
                updateProfile(auth.currentUser, profile)
                    .then(() => {
                        console.log('user profile updated');

                    })
                    .catch((error) => {
                        console.log('User profile update ', error);
                    })

            })
            .catch(error => {
                // console.log('ERROR', error.message);
                setErrorMessage(error.message);
                setSuccess(false);
            })

    }



return (
    <div className='max-w-lg mx-auto'>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
            <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
                <div className="card-body  mx-auto">
                    <fieldset className="fieldset">

                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="name" />

                        <label className="label">Photo URL</label>
                        <input type="img" name='photo' className="input" placeholder="photo url" />

                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />

                        <div className="relative">
                            <label className="label">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name='password'
                                className="input"
                                placeholder="Password" required />
                            <button
                                onClick={() => setShowPassword(!showPassword)}
                                className="btn btn-xs absolute right-2 top-6">
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <div>
                                <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">

                                    <label className="label">
                                        <input type="checkbox" className="checkbox" name='terms' />
                                        Accept Terms and Conditions.
                                    </label>
                                </fieldset>
                            </div>

                            <button className="btn btn-neutral mt-4">Sign Up</button>
                        </div>
                    </fieldset>
                </div>
            </div>
        </form>
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        {
            success && <p className="text-green-600">Sign up is successful.</p>
        }
        {<p className="m-2">
            Already have an account? Please <Link to='/login'>Login</Link>
        </p>}
    </div>
);
};


export default SignUp;