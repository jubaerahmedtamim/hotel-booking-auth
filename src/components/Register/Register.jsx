import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const [showEye, setShowEye] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const { signup, signupWithGooglePopup } = useContext(AuthContext);

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(email, password, confirmPassword);

        if (password !== confirmPassword) {
            setError("Password didn't matched.");
            return;
        }
        else if (password.length < 6) {
            setError("Password should at least 6 or more.")
            return;
        }
        else if (!/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(password)) {
            setError("Implement a special character in your password.")
            return;
        }
        else {
            setError('');
            form.reset();
        }
        // firebse createUserWithEmailAndPassword here
        signup(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                setError(error.message)
                console.error(error);
            })
    }

    // handle singup with google popup 
    const handleGooglePopup = () => {
        signupWithGooglePopup()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);

        })
        .catch(error => {
            setError(error.message);
        })
    }

    // handle showPassword and eye

    const handleShowPassAndEyebtn = () => {
        setShowEye(!showEye);
        setShowPassword(!showPassword);

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-3xl text-center mt-5 font-bold">Signup</h1>
                <form onSubmit={handleSignIn} className="card-body">
                    <div className="form-control">
                        <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <input type={showPassword ? "text" : "password"} name='password' placeholder="Password" className="input input-bordered" required />
                        <div className='absolute inset-y-4 right-4 '>
                            <button type="button" onClick={handleShowPassAndEyebtn}>
                                {showEye ? <FaRegEyeSlash /> : <FaRegEye />}
                            </button>
                        </div>
                    </div>
                    <div className="form-control relative">
                        <input type={showPassword ? "text" : "password"} name='confirmPassword' placeholder="Confirm Password" className="input input-bordered" required />
                        <div className='absolute inset-y-4 right-4 '>
                            <button type="button" onClick={handleShowPassAndEyebtn}>
                                {showEye ? <FaRegEyeSlash /> : <FaRegEye />}
                            </button>

                        </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        <p className='text-center text-red-600'><small>{error}</small></p>
                    </div>

                    <div className="form-control mt-2">
                        <button className="btn btn-primary">Signup</button>
                        <p className='text-center my-3'>Already have an account? <Link className='text-sky-600 ' to='/login'>Login</Link></p>
                    </div>
                    <div class="flex items-center">
                        <div class="border-t border-gray-400 flex-1 mr-2"></div>
                        <div class="text-gray-500">Or</div>
                        <div class="border-t border-gray-400 flex-1 ml-2"></div>
                    </div>
                    <div>
                        <div className=' bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg text-center w-full flex items-center my-4'>
                            <FaFacebook></FaFacebook> <button  type='button' className='block flex-1'>  Login with Facebook</button>
                        </div>
                        <div className=' bg-white text-slate-700 hover:bg-slate-200  p-2 rounded-lg text-center w-full flex items-center '>
                            <FaGoogle></FaGoogle> <button onClick={handleGooglePopup} type='button' className='block flex-1'>  Login with Google</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;