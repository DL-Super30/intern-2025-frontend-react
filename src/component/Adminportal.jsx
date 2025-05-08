import React from 'react';
import { useNavigate } from 'react-router-dom';
import laptop from '../assets/laptop.png';
import logo from '../assets/logo.png';
import video from '../assets/video.png';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import image from '../assets/react.svg';

const AdminPortal = () => {
    const navigate = useNavigate();

    return (
        <div className="p-2">

            <div className="flex  items-center  h-18 shadow-lg justify-between">
                <img src={logo} alt="Logo" className="h-16 w-auto mt-2" />
                <div className="flex items-center  mt-10 ms-60 me-5">

                    <div onClick={()=>navigate('/courses')} className="text-blue-500 text-xl font-semibold mb-6">Admin Portal</div>
                    <span onClick={()=>navigate('/courses')} className="text-3xl text-blue-400 mb-7 me-">↗</span>

                    <h1 onClick={() => navigate('/screen')} className="flex items-center justify-center text-white bg-blue-500 text-2xl font-semibold h-10 w-10 rounded-full border border-black mb-7 ms-5">
                        N

                    </h1>
                </div>
            </div>


            <div className="">
                <img
                    src={laptop}
                    alt="Laptop"
                    className="w-full h-100 object-cover shadow-lg"
                />
                <h1 className="text-3xl ms-40 font-semibold mt-4">Your Courses</h1>
            </div>


            <div className="w-full max-w-7xl mx-auto bg-white rounded-lg p-2 mb-5 shadow-[0_4px_20px_0_rgba(0,0,0,0.2)]">

                <div className="text-center mb-2">
                    <h2 className="text-2xl font-bold">fsreact2304</h2>
                    <p className="text-sm text-gray-500">manideep</p>
                </div>

                <div className="flex items-center justify-between flex-wrap gap-4">

                    <div className="flex items-center gap-4">
                        <img src={image} alt="Course" className="h-28 w-30 ms-10 object-cover rounded-lg" />
                        <h1 className="text-xl font-semibold">REACT</h1>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                        <button
                            onClick={() => navigate('/video')}
                            className="flex items-center gap-2 bg-blue-500 text-white  me-3 px-4 py-1.5 rounded hover:bg-blue-600 transition"
                        >
                            Continue <ArrowRightIcon className="h-5 w-5" />
                        </button>
                        <button
                            className="flex items-center bg-gray-100 border border-gray-300  me-3 px-3 py-1.5 rounded hover:bg-gray-200 transition"
                        >
                            Live Video
                            <img src={video} alt="Live" className="h-5 w-5 ml-2" />
                        </button>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default AdminPortal;
