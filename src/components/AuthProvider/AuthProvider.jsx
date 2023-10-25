import React, {createContext} from 'react';
import {FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth"
import app from '../../../firebase.config'

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();


    // createUserWithEmailAndPassword
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // singup with google popup with firebase sdK
    const signupWithGooglePopup = () => {
        return signInWithPopup(auth, googleProvider);
    }

    //signup with facebook firebase adk
    const signupWithFacebook = () => {
        return signInWithPopup(auth, facebookProvider);
    }

    const authInfo = {
        
        signup,
        signupWithGooglePopup,
        signupWithFacebook,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;