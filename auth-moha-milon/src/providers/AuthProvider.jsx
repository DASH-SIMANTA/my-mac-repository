import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] =useState(true);
    // const name ='alu mia';

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser =(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    // onAuthStateChanged(auth, currentUser=>{
    //     if(currentUser){
    //         console.log('currently logged user', currentUser);
    //         setUser(currentUser);
    //     }
    //     else{
    //         console.log('No user logged in');
    //         setUser(null);
    //     }
    // })

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('Current User',currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return()=>{
            unSubscribe();
        }

    },[])


    const authInfo ={
        // name,
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>

    );
};

export default AuthProvider;

/**
 * 1.create context with null as default
 * 2. Create Provider
 * 3. set a  value with something
 * 4. [attention please]
 * 5. use the auth provider in the main.jsx
 * 6. access the children inside the authProvider in the main.jsx
 */