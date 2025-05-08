import React from 'react';
import { useNavigate } from 'react-router-dom';

const Page = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    
    alert('Signed out!');

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded shadow-md w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold mb-8">Profile</h1>

        <button
          onClick={() => navigate('/profile')}
          className="w-full mb-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
        >
          Update Profile
        </button>

        <button
          onClick={handleSignOut}
          className="w-full px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Page;
