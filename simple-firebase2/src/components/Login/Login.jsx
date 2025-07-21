import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase.init";
import { useState } from "react";


const Login = () => {
    const [user, setUser] = useState(null);


    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);
                setUser(result.user)

            })
            .catch(error => {
                console.log('ERROR', error);
                setUser(null);
            })
    }
    const handleGoogleOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('sign out successful');
            setUser(null);
        }).catch((error) => {
            console.log('ERROR', error);
        });
    }
    // if user exist ? signout : sign in
    return (
        <div>
            
            
            {
                user ? 
                <button onClick={handleGoogleOut}>Sign Out</button> 
                :
                <button onClick={handleGoogleSignIn}>Login with Google</button>

            }
            {
                user &&
                <div>
                    <h4>{user.displayName}</h4>
                    <p>{user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>

            }

        </div>
    );
};

export default Login;