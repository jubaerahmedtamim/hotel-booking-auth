import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-primary text-primary-content flex justify-around ">
                <div>
                    <Link className="btn btn-ghost normal-case text-xl" to='/'>Hotel Booking</Link>
                </div>
                <div className=" normal-case text-xl">
                    <Link className='mx-3 text-center' to='/mybooking'>My Booking</Link>
                    <Link className='mx-3 text-center' to='/hotels'>Hotels</Link>
                    <Link className='mx-3 text-center' to='/login'>Login</Link>
                    <Link className='mx-3 text-center' to='/register'>Register</Link>
                    <Link className='mx-3 text-center' to='/profile'>Profile</Link>
                </div>
            </div>

        </div>
    );
};

export default Header;