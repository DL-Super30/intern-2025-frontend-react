
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../feature/auth/authSlice'; 
import logo from '../assets/logo.png'; 

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const result = await dispatch(loginUser({ email, password }));
      console.log('login result:', result);

      if (result.meta.requestStatus === 'fulfilled') {
        navigate('/dashboard');
      } else {
        console.warn('Login failed:', result);
        setErrorMessage('Login failed. Please check your credentials.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96 relative">
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Logo" className="h-20 w-40" />
        </div>
        <h1 className="text-center text-2xl text-gray-500 mb-2">Welcome</h1>
        <p className="text-center text-gray-500 mb-6">
          Log in to Kona LMS to continue to DigiLunc
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
          <div className="relative w-full">
            <input
              type="email"
              id="email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-18 border border-gray-300 p-2 pt-5 rounded-md placeholder-transparent focus:outline-none focus:border-blue-500"
              required
            />
            <label
              htmlFor="email"
              className="absolute left-2 top-2 text-gray-500 text-sm"
            >
              Email Address
            </label>
          </div>

          <div className="relative w-full">
            <input
              type="password"
              id="password"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-18 border border-gray-300 p-2 pt-5 rounded-md placeholder-transparent focus:outline-none focus:border-blue-500"
              required
            />
            <label
              htmlFor="password"
              className="absolute left-2 top-2 text-gray-500 text-sm"
            >
              Password
            </label>
          </div>

          <a href="/password" className="text-sm text-blue-500 underline mt-2">
            Forgot Password?
          </a>

          {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md w-full mt-4"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
