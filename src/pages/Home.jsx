import React from 'react';
import { useNavigate } from 'react-router-dom'

function HomePage(){

  const navigate = useNavigate();

    return(

        <div className="flex bg-white">
          <div className="w-1/2 mt-20">
          <div className="flex justify-center items-center mr-14">
            <img src="/Digital Lync Logo.jpg" alt="Digital Lync" className="cursor-pointer " />
            </div>

            <div className="mt-16">
                <h2 className="text-black text-3xl ml-76">Welcome</h2>
                <h2 className="text-lg text-gray-400 font-normal mt-2 ml-60">Please sign into your account below</h2>
            <div className="mt-20 ml-40">
                <button className="bg-blue-500 hover:bg-blue-700 rounded-sm text-white w-[430px] py-2 cursor-pointer" onClick={() => navigate('/login')}>Sign In</button>
            </div>
          </div>
            </div>
            <div className="w-1/2 h-screen overflow-hidden cursor-pointer">
            <img src="src\assets\logo.jpg" alt="computer" />
          </div>
    
        </div>
    )
}

export default HomePage;