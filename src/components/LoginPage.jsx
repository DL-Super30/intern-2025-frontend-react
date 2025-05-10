import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/auth/authSlice";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleValidations = () => {
    let isValid = true;
    if (!email.includes("@") || email.length < 5) {
      setEmailError("Invalid email");
      isValid = false;
    } else {
      setEmailError("");
    }
    if (password.length <= 2) {
      setPasswordError("Invalid password");
      isValid = false;
    } else {
      setPasswordError("");
    }
    return isValid;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!handleValidations()) return;

    const result = await dispatch(loginUser({ email, password }));
    if (result.meta.requestStatus === "fulfilled") {
      navigate("/dashboard");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-white px-6 py-6 rounded-lg shadow-xl w-full max-w-sm">
        <div className="text-center mb-6">
          <img
            src="/src/assets/digital_lync_logo.png"
            alt="Digital Lync Logo"
            className="mx-auto h-18 w-auto mb-4 mt-2"
          />
          <h2 className="text-[34px] text-gray-500 text-center -mt-4 mb-1">Welcome</h2>
          <p className="text-[15px] text-gray-600 mt-4">
            Log in to Kona LMS to continue to DigitalLync
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
            {emailError && <p className="text-red-600 text-sm mt-1">{emailError}</p>}
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
            />
            {passwordError && <p className="text-red-600 text-sm mt-1">{passwordError}</p>}
          </div>
          <div className="flex justify-end text-xs">
            <Link to="/forgotPassword" className="text-blue-600 hover:underline">
              Forgot Password?
            </Link>
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 text-sm rounded hover:bg-blue-700 transition duration-200">Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;