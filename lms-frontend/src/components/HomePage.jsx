import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();

    const signIn = () => {
        navigate("/login");
    };

    return (
        <div className="flex h-screen">
            <div className="w-full md:w-1/2 flex justify-center items-center px-4">
                <div className="flex flex-col items-center text-center w-full max-w-sm">
                    <img
                        src="src/assets/logo.png"
                        alt="logo"
                        className="w-90 mb-6 "
                    />
                    <h2 className="p-8 text-3xl font-semibold text-black">Welcome</h2>
                    <p className="text-gray-500 text-base mt-2 mb-10">
                        Please sign into your account below
                    </p>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded w-full"
                        onClick={signIn}
                    >
                        Sign In
                    </button>
                </div>
            </div>

            <div className="hidden md:block md:w-1/2 h-full">
                <img
                    src="src/assets/laptop.png"
                    alt="laptop"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}

export default HomePage;
