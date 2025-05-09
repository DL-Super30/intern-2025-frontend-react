import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Popup = ({ message }) => (
  <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 px-4 py-2 text-white rounded shadow-md z-50">
    {message}
  </div>
);

function UpdateProfile() {
  const {
    register,
    handleSubmit,
    formState: { isDirty },
    reset,
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      profile: null,
    },
  });

  const navigate = useNavigate();
  const [popupMessage, setPopupMessage] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const fileInputRef = useRef();
  const selectedFile = watch("profile");

  const showPopup = (msg) => {
    setPopupMessage(msg);
    setTimeout(() => {
      setPopupMessage("");
    }, 3000);
  };

  const submit = (data) => {
    const fileInput = data.profile?.[0];
    const fileName = fileInput ? fileInput.name : "";

    const userDetails = {
      name: data.name,
      email: data.email,
      profileFile: fileName,
    };

    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    console.log("Saved to local storage:", userDetails);
    showPopup("Details saved Successfully");
    reset();
    setIsVerified(true);
  };

  const fileClick = () => fileInputRef.current.click();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setValue("profile", e.target.files);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setIsVerified(false);
    reset(); 
    showPopup("Reset password link sent");
  };

  const logoutHandler = () => {
    localStorage.removeItem("userDetails");
    showPopup("Logged out");
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative flex items-center justify-between px-4 py-2 border-b border-gray-200 shadow-md">
        <div className="flex items-center">
          <img
            src="src\assets\logo.png"
            alt="Logo"
            className="h-12 w-auto -mt-2"
          />
        </div>
        <div className="relative">
          <div
            className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            B
          </div>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-white rounded shadow-md z-10">
              <Link
                to="/updateprofile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                👤 Update Profile
              </Link>
              <button
                onClick={logoutHandler}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {popupMessage && <Popup message={popupMessage} />}

      <div className="flex items-center justify-center mt-12">
        <div className="bg-white p-8 rounded-md shadow-md w-full max-w-2xl">
          <h1 className="text-2xl font-bold text-center mb-6">
            Update Profile Information
          </h1>
          <form onSubmit={handleSubmit(submit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                {...register("name")}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                {...register("email")}
                className="w-full border border-gray-300 p-2 rounded"
              />
              {isVerified && (
                <p className="text-green-600 text-sm mt-1 flex items-center gap-1">
                  <span>✔</span> Email Verified
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Profile picture
              </label>
              <input
                type="file"
                {...register("profile")}
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
                accept="image/*"
              />
              <div
                onClick={fileClick}
                className="w-full border border-gray-300 p-2 rounded cursor-pointer text-gray-500 text-sm"
              >
                {selectedFile?.[0]?.name || "Upload your profile picture"}
              </div>
            </div>
            <button
              type="submit"
              disabled={!isDirty}
              className="w-full bg-gray-400 hover:bg-blue-600 transition-colors text-white py-2 rounded disabled:opacity-50"
            >
              Save
            </button>
          </form>
          <div className="mt-4">
            <button
              onClick={handleReset}
              className="w-full text-blue-600 border border-blue-600 py-2 rounded hover:bg-blue-50 transition"
            >
              Reset password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile;