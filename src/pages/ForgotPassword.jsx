import React from "react";
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { useState , useEffect } from "react";

function ForgotPassword() {

    const { register, handleSubmit, formState: { errors }, setError , setValue } = useForm();

    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const reset = (formData) => {
        const matchedEmployee = studentEmails.find(emp => emp.email === formData.email);

        if (matchedEmployee) {
            navigate('/forgot-password/confirm-email' , { state:{email:formData.email}});
        } else {
            setError('email', {
                type: 'manual',
                message: 'Incorrect Email',
            });
        }
    };

    const studentEmails = [

        { "email": "y.saiharshith@gmail.com", "password": "Harshith@123" },
        { "email": "alice.jhonson@gmail.com", "password": "test@123" }

    ];

    return (

        <div className=" flex items-center justify-center min-h-screen bg-gray-400">
            <div className="bg-white rounded-lg shadow-md px-10 py-20 w-full max-w-md">
                <div className="flex justify-center">
                    <img src="/Digital Lync Logo 2.jpg" alt="Digital Lync" className="cursor-pointer" />
                </div>

                <div className="text-center mt-8">
                    <h2 className=" text-gray-900 text-3xl font-normal">Forgot Your Password?</h2>
                </div>

                <div className="mt-6">
                    <h2 className="text-gray-900 ml-4">Enter your Email Address and we will send you</h2>
                    <h2 className="ml-12">instructions to reset your password.</h2>
                </div>

                <form className="relative mt-6 w-80 ml-4" onSubmit={handleSubmit(reset)}>
                    <fieldset className="border-2 border-gray-400 rounded-md px-2 pt-1  text-gray-600 focus-within:text-blue-600 focus-within:border-blue-500 focus-within:bg-blue-50 "
                    onClick={() => document.getElementById('emailInput').focus()}
                    >
                        <legend className="text-sm px-1 ">Email address</legend>
                        <input type="email" id="emailInput" placeholder="" className=" w-full bg-transparent  py-1 focus:outline-none text-black"
                            {...register('email', {
                                required: { value: true, message: "Email is required" },
                                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Incorrect Email Format" }
                            })}
                        />
                    </fieldset>
                    <p className='text-red-500 text-sm ml-1 mt-1'>{errors.email?.message}</p>
                    {errorMessage && (<p className="text-red-500 text-sm text-center mt-2">{errorMessage}</p>)}

                    <div className="">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700  text-white text-center rounded-sm font-normal w-80 py-2 mt-6 cursor-pointer">Continue</button>
                    </div>
                </form>

                <div className="mr-4">
                    <Link to="/login"><h2 className="text-blue-500 hover:text-blue-700 font-bold text-center mt-4 ">Back to Kona LMS</h2> </Link>
                </div>
            </div>

        </div>
    )
}

export default ForgotPassword;