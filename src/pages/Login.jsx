import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useState, useEffect } from "react";

function Login() {

    const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm();

    const [student, setStudent] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const password = watch("password");
    const [showPassword, setShowPassword] = useState('');
    const navigate = useNavigate();

    const login = (FormData) => {
        const filteredEmployee = student.find(student => student.email === FormData.email && student.password === FormData.password);

        if (filteredEmployee) {
            localStorage.setItem('userDetails', JSON.stringify(filteredEmployee));
            navigate('/admin-dashboard');
        } else {
            setErrorMessage('Incorrect Email or Password')
        }
    }

    useEffect(() => {
        const stored = localStorage.getItem('userDetails');
        if (stored) {
            const user = JSON.parse(stored);
            setValue('email', user.email);
            setValue('password', user.password);
        }
    }, [setValue]);

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === 'email' || name === 'password') {
                setErrorMessage('');
            }
        });
        return () => subscription.unsubscribe();
    }, [watch]);


    useEffect(() => {
        getStudents();
    }, [])

    const getStudents = () => {

        const studentsData = [

            { "email": "y.saiharshith@gmail.com", "password": "Harshith@123" },
            { "email": "alice.jhonson@gmail.com", "password": "test@123" },

        ];
        setStudent(studentsData);
    }

    return (

        <div className='flex items-center justify-center min-h-screen bg-gray-400'>
            <div className=" bg-white rounded-lg shadow-md px-8 py-10 mx-auto w-100 max-w-md">
                <div className="flex justify-center">
                    <img src="/Digital Lync Logo 2.jpg" alt="Digital Lync" className="cursor-pointer" />
                </div>

                <div className="text-center mt-8 mr-4">
                    <h2 className="text-4xl text-gray-600 font-normal">Welcome</h2>
                    <h2 className="text-gray-500 font-semibold mt-4">Log in to Kona LMS to continue to DigiLync</h2>
                </div>

                <form action="" className="mt-8" onSubmit={handleSubmit(login)}>
                    <div>
                        <div className="relative ml-2 w-76 mb-6">
                            <span className="absolute text-sm text-gray-400 font-semibold top-2 left-3">
                                Email address
                            </span>
                            <input type="email" className="w-full pt-7 pb-2 px-3 border border-gray-400 rounded-lg text-black placeholder-gray-400  focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder='Enter your Email'
                                {...register('email', {
                                    required: { value: true, message: "Email is required" },
                                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Incorrect Email Format" }
                                })}
                            />
                            <p className='text-red-500 text-sm ml-1 mt-1'>{errors.email?.message}</p>
                        </div>

                        <div className="relative ml-2">
                            <span className="absolute text-sm text-gray-400 font-semibold top-2 left-3">
                                Password
                            </span>
                            <input type={showPassword ? 'text' : 'password'} className="w-76 pt-7 pb-2 px-3 border border-gray-400 rounded-lg text-black placeholder-gray-400  focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder='Enter your Password'
                                {...register('password', {
                                    required: { value: true, message: "Password is required" },
                                    minLength: { value: 5, message: "Minimum 4 characters required" },
                                    maxLength: { value: 15, message: "Maximum 15 characters allowed" },
                                    pattern: {
                                        value: /^(?=.*[0-9])(?=.*[@$!%*?&]).{4,}$/,
                                        message: "Must start with capital letter, contain at least one number and one special character"
                                    }
                                })}
                            />

                            <span className="absolute top-[27px] right-10 cursor-pointer text-gray-500 group" onClick={() => setShowPassword(!showPassword)}>
                                <i className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye text-black'}`} />

                                <span className='pointer-events-none absolute bottom-full mb-1 right-1/2 translate-x-1/2 bg-black text-white text-xs rounded-sm px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap'>{showPassword ? 'Hide Password' : 'Show Password'}</span>
                            </span>
                            <p className='text-red-500 text-sm ml-1'>{errors.password?.message}</p>
                        </div>
                        {errorMessage && (<p className="text-red-500 text-sm text-center mt-2">{errorMessage}</p>)}
                        <div className="mt-2 ml-24">
                            <Link to="/forgot-password" className="text-blue-500 text-lg font-medium hover:underline ml-18">Forgot Password?</Link>
                        </div>

                        <div className="mt-4 text-center">
                            <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white w-76 mr-4  py-2 rounded-sm font-medium cursor-pointer">Continue</button>
                        </div>
                    </div>
                </form>
                <div>
                </div>
            </div>

        </div>
    )
}

export default Login;