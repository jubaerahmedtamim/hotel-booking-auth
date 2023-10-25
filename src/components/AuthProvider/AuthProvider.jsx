import React, {createContext} from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth"
import app from '../../../firebase.config'

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();


    // createUserWithEmailAndPassword
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // singup with google popup with firebase sdK
    const signupWithGooglePopup = () => {
        return signInWithPopup(auth, googleProvider);
    }


    const authInfo = {
        
        signup,
        signupWithGooglePopup,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;