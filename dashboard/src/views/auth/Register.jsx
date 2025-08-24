import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaFacebookF, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Register = () => {

    const [state, setState] = useState({
        name: "",
        email: "",
        password: ""
    });

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        });
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(state);
    }

    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => setShowPassword(prev => !prev);

    return (
        <div className='min-w-screen min-h-screen bg-[#222831] flex justify-center items-center'>
            <div className='w-[480px] text-[#EEEEEE] p-2'>
                <div className='bg-[#393E46] p-6 rounded-md shadow-md'>

                    <div className='flex justify-center mb-4'>
                        <img src="/logo.svg" alt="Logo" className="h-14 w-14" />
                    </div>

                    <h2 className='text-xl mb-3 font-medium text-center'>Welcome to NodeMart</h2>
                    <p className='text-sm mb-5 font-medium text-center'>Register Your Account</p>

                    <form onSubmit={submit}>
                        <div className='flex flex-col gap-1 mb-4'>
                            <label htmlFor="name" className='flex items-center gap-2'>
                                <FaUser className='text-[#0171e0]' /> Name
                            </label>
                            <input
                                className='bg-transparent border-b-2 border-[#555] focus:border-[#0171e0] text-[#EEEEEE] placeholder:text-[#BBBBBB] px-1 py-2 transition-all duration-300 outline-none'
                                type="text"
                                onChange={inputHandle}
                                value={state.name}
                                name='name'
                                placeholder='Enter Name'
                                id='name'
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-1 mb-4'>
                            <label htmlFor="email" className='flex items-center gap-2'>
                                <FaEnvelope className='text-[#0171e0]' /> Email
                            </label>
                            <input
                                className='bg-transparent border-b-2 border-[#555] focus:border-[#0171e0] text-[#EEEEEE] placeholder:text-[#BBBBBB] px-1 py-2 transition-all duration-300 outline-none'
                                type="email"
                                onChange={inputHandle}
                                value={state.email}
                                name='email'
                                placeholder='Enter Email Address'
                                id='email'
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-1 mb-2'>
                            <label htmlFor="password" className='flex items-center gap-2'>
                                <FaLock className='text-[#0171e0]' /> Password
                            </label>
                            <div className='relative'>
                                <input
                                    className='w-full bg-transparent border-b-2 border-[#555] focus:border-[#0171e0] text-[#EEEEEE] placeholder:text-[#BBBBBB] px-1 py-2 pr-10 transition-all duration-300 outline-none'
                                    type={showPassword ? 'text' : 'password'}
                                    name='password'
                                    placeholder='Enter Password'
                                    id='password'
                                    value={state.password}
                                    onChange={inputHandle}
                                    required
                                />
                                <span
                                    onClick={togglePassword}
                                    className='absolute right-2 top-1/2 transform -translate-y-1/2 text-[#0171e0] cursor-pointer text-sm'
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 mb-5'>
                            <input
                                className='w-4 h-4 accent-[#0171e0]'
                                type="checkbox"
                                name='checkbox'
                                id='checkbox'
                                required
                            />
                            <label htmlFor="checkbox">I agree to privacy policy & terms.</label>
                        </div>
                        <button
                            className='bg-[#0171e0] w-full hover:brightness-110 text-white font-semibold rounded-md px-7 py-2 mb-4 transition-all duration-200'
                        >
                            Sign Up
                        </button>
                        <div className='text-center'>
                            <p>
                                Already have an account?{' '}
                                <Link to='/login' className="font-bold text-[#0171e0] hover:underline">
                                    Sign In
                                </Link>
                            </p>
                        </div>
                        <div className='w-full flex justify-center items-center my-3'>
                            <div className='w-[45%] bg-[#0171e0] h-[1px]'></div>
                            <div className='w-[10%] flex justify-center items-center'>
                                <span className='text-[#EEEEEE] text-sm px-2'>Or</span>
                            </div>
                            <div className='w-[45%] bg-[#0171e0] h-[1px]'></div>
                        </div>
                        <div className="w-full flex flex-col gap-3">
                            <button className="flex items-center justify-center gap-3 border border-[#0171e0] text-[#EEEEEE] py-2 rounded-md hover:bg-[#0171e0]/10 transition-all duration-200">
                                <FaGoogle className="text-[#0171e0]" />
                                <span>Continue with Google</span>
                            </button>
                            <button className="flex items-center justify-center gap-3 border border-[#0171e0] text-[#EEEEEE] py-2 rounded-md hover:bg-[#0171e0]/10 transition-all duration-200">
                                <FaFacebookF className="text-[#0171e0]" />
                                <span>Continue with Facebook</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;