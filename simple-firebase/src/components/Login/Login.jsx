import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import auth from "../../firebase/firebase.init";

const Login = () => {
    const handleGoogleSignIn =()=>{
        const provider = new GoogleAuthProvider();
        // console.log('Google coming soon');
        signInWithPopup(auth, provider)
        .then((result)=>{
            console.log(result)
        })
        .catch(error =>{
            console.log('ERROR',error);
        })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Login with Google</button>
        </div>
    );
};

export default Login;