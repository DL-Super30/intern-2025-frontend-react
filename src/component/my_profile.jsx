import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);

  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();
    alert('Profile saved!');

    // Reset the form fields
    setName('');
    setEmail('');
    setIsEmailVerified(false);
    setProfilePicture(null);
  };

  const handleResendEmail = () => {
    alert('Verification email has been sent!');
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file)); // Create a local URL for the selected image
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center h-18 shadow-lg justify-between">
        <img src={logo} alt="Logo" className="h-16 w-auto mt-2 ms-3" />
        <div className="flex items-center space-x-4 mt-10 ms-60">
          <h1 className="flex items-center justify-center text-white bg-blue-500 text-2xl font-semibold h-10 w-10 rounded-full border border-black mb-6 me-5">
            N
          </h1>
        </div>
      </div>

      {/* Profile Update Form */}
      <div className="flex items-center justify-center min-h-screen bg-gray-100 pt-0">
        <div className="w-full max-w-md mt-[-80px]">
          <h2 className="text-2xl font-bold mb-6 text-center">Update Profile Information</h2>
          <form onSubmit={handleSave}>
            {/* Name Field */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Field */}
            <div className="mb-2">
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />
            </div>

            {/* Email Verified Toggle */}
            <div className="mb-6 flex items-center space-x-3">
              <div
                onClick={() => setIsEmailVerified(!isEmailVerified)}
                className={`w-6 h-6 border-2 rounded-full flex items-center justify-center cursor-pointer ${isEmailVerified ? 'border-green-500 bg-green-500' : 'border-gray-400'
                  }`}
              >
                {isEmailVerified && <span className="text-white text-sm font-bold">✔</span>}
              </div>
              <label
                className="text-gray-700 cursor-pointer"
                onClick={() => setIsEmailVerified(!isEmailVerified)}
              >
                Email Verified
              </label>
            </div>

            {/* Profile Picture Upload */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Profile Picture</label>
              <p className="text-center text-gray-500 me-70 text-sm">Upload your profile picture</p>

              {/* Profile Picture Preview */}
              <div className="w-full px-4 py-5 border border-gray-300 rounded-md cursor-pointer relative bg-gray-100">
                {profilePicture ? (
                  <img
                    src={profilePicture}
                    alt="Profile Preview"
                    className="w-full h-40 object-cover rounded-md"
                  />
                ) : (
                  <div className="text-center text-gray-500 text-sm">
                    {/* Placeholder for image */}
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={handleProfilePictureChange}
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col items-center space-y-3">
              <button
                type="submit"
                className="w-full px-4 py-2 border border-gray-300 bg-gray-200 text-lg text-gray-500 rounded-md transition"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleResendEmail}
                className="w-full px-4 py-2 border border-gray-300 text-blue-600 rounded-md hover:bg-blue-50 transition"
              >
                Resend Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
