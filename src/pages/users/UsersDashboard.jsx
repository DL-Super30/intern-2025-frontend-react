import React from "react";
import UserNavbar from "./UserNavbar";
import { Link } from "react-router-dom";

function User() {

    return (

        <div className="bg-gray-100 min-h-screen">
            < UserNavbar />
            <div>
                <img src="src\assets\Kona LMS.jpg" alt="Kona LMS" className="h-96 w-full cursor-pointer" />
            </div>

            <div className="mt-3 ml-66">
                <h2 className="text-gray-600 text-4xl font-semibold">Your Courses</h2>
            </div>

            <div className=" flex bg-white shadow-lg rounded-sm mt-4 ml-58 w-6xl">
                <div className="bg-white rounded ">
                    <img src="src\assets\Thumbnail.jpg" alt="thumbnail" className="cursor-pointer h-40" />
                </div>

                <div className="flex flex-col">
                    <h2 className="text-slate-600 text-3xl font-semibold mt-2 ml-6">fsreact2304</h2>
                    <div>
                        <h2 className="text-neutral-600 font-normal mt-1 ml-6">manideep</h2>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="justify-end ml-50">
                        <Link to=""><button className="bg-blue-500 hover:bg-blue-700 text-white rounded-md mt-8 ml-96 space-x-4 px-2 py-2 w-30 cursor-pointer">
                            <span>Continue</span>
                            <span><i className="fa-solid fa-arrow-right"></i> </span>
                        </button>
                        </Link>
                    </div>
                    <div className="justify-end ml-50 mb-6">
                        <button className="text-black border border-black hover:bg-gray-200 rounded-md mt-4 ml-96 space-x-4 p-2 w-30 cursor-pointer">
                            <span>Live class</span>
                            <i className="fas fa-video text-md"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;