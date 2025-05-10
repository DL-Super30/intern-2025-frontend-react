import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-white px-6 py-6 rounded-lg shadow-xl w-full max-w-sm">
        <div className="text-center mb-6">
          <img
            src="/src/assets/digital_lync_logo.png"
            alt="Digital Lync"
            className="mx-auto h-18 w-auto mb-4 mt-2"
          />
          <h2 className="text-[34px] text-gray-500 text-center -mt-4 mb-1">Welcome</h2>
          <p className="text-[15px] text-gray-600 mt-4">
            Reset your password to continue to DigitalLync
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Email address</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <div className="flex justify-end text-xs">
            <a href="/login" className="text-blue-600 hover:underline">
              Back to Login
            </a>
          </div>

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 text-sm rounded hover:bg-blue-700 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;