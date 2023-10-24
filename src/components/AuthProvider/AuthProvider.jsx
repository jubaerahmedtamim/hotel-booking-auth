import React, {createContext} from 'react';
import {createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import app from '../../../firebase.config'

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const auth = getAuth(app);

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const authInfo = {
        
        signup,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;