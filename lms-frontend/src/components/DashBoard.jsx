import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    navigate('/LoginPage'); 
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 overflow-x-hidden">
      <div className="flex justify-between items-center px-8 py-3 bg-white shadow-md w-full relative">
        <img src="src\assets\logo.png" alt="Logo" className="h-12 w-auto -mt-2" />
        <div className="flex items-center gap-4 relative">
          <Link to="/adminPortal" className="text-blue-600 font-semibold hover:underline text-sm">
            Admin Portal →
          </Link>
          <div
            className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold cursor-pointer"
            onClick={toggleDropdown}
          >
            B
          </div>
          {dropdownOpen && (
            <div className="absolute right-0 mt-12 w-44 bg-white rounded shadow-md z-10">
              <Link
                to="/profilePage"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                👤 Update Profile
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="w-full -mt-2">
        <img
          src="src\assets\dash.png"
          alt="Dashboard Banner"
          className="w-full h-[380px] object-cover"
        />
      </div>

      <div className="flex flex-col py-6 px-4 -mt-6 max-w-screen-xl mx-auto">
        <div className="w-full max-w-[1100px] mx-auto">
          <h2 className="text-[20px] font-semibold mb-2 text-left text-gray-600 ml-4">Your Courses</h2>

          <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center w-full">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <img src="src\assets\react.svg" alt="React Logo" className="w-20 h-20" />
                <span className="text-sm text-gray-500">Thumbnail</span>
              </div>
              <div className="space-y-1">
                <h3 className="text-[26px] text-gray-600 font-semibold -mt-16 ml-14">fsreact2304</h3>
                <p className="text-sm text-gray-600 ml-14">manideep</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-end">
              <Link to="/coursedetails">
                <button className="bg-blue-600 cursor-pointer text-white px-5 py-2 rounded hover:bg-blue-700 text-sm shadow">
                  Continue →
                </button>
              </Link>
              <button className="border border-black px-5 py-2 rounded text-sm hover:bg-gray-100">
                Live class ■
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;