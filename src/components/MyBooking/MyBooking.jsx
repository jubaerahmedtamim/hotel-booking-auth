import React,{useContext} from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const MyBooking = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h1>MyBooking Component</h1>
            <p>{user}</p>
        </div>
    );
};

export default MyBooking;