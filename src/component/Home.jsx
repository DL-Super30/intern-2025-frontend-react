import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import man from '../assets/man.png';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
   
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="flex flex-col items-center text-center w-96 p-6">
   
          <img src={logo} alt="Logo" className="h-20 mb-20" />

   
          <h1 className="text-3xl font-semibold text-gray-500 mb-3">Welcome</h1>
          <p className="text-sm text-gray-600 mb-9">Please sign in to your account below</p>

    
          <button
            onClick={() => navigate('/login')}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </div>
      </div>


      <div className="w-1/2 h-full">
        <img
          src={man}
          alt="Man working"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Home;
