import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Confirm(){

    const location = useLocation();
    const email = location.state?.email;


    return(

        <div className="flex items-center justify-center bg-gray-300 min-h-screen">
            <div className="bg-white rounded-md p-16">
            <h2 className="text-green-500"><i className="fa-regular fa-envelope ml-36 text-7xl"></i></h2>
            <div className="text-center mt-6">
                <h2 className="text-black text-3xl font-normal">Check Your Email</h2>
                <h2 className="mt-6 text-slate-900">Please check the email address</h2>
                <h2 className="text-slate-900"><span className="text-blue-500">{email}</span> for instructions to reset</h2>
                <h2 className="text-slate-900">your password.</h2>
            </div>

            <div className="mt-6">
                <Link to="/forgot-password"><button type="submit" className="border border-gray-700 hover:bg-gray-200 ml-8 px-4 py-4 text-center rounded-md text-black text-xl w-70 cursor-pointer">Resend Email</button></Link>
            </div>
            </div>
        </div>
    )
}

export default Confirm;