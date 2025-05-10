import React from "react";
import { useNavigate } from "react-router-dom";
function HomePage() {
    const navigate = useNavigate();

    const signIn = () => {
        navigate("/login");
    };

    return (
        <div className="flex bg-white">
            <div className="w-1/2 mt-18">
                <div className="ml-36">
                    <img
                        src="src\assets\logo.png"
                        alt="logo"
                        className="cursor-pointer "
                    />
                </div>

                <div className="mt-12">
                    <h2 className="text-black text-3xl ml-68">Welcome</h2>
                    <h2 className="text-lg text-gray-400 font-normal mt-2 ml-50">
                        Please sign into your account below
                    </h2>
                    <div className="mt-20 ml-30">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 rounded-sm text-white w-[430px] py-2 cursor-pointer"
                            onClick={() => signIn()}
                        >
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-1/2 h-screen overflow-hidden cursor-pointer">
                <img src="src\assets\image.png" alt="image" />
            </div>
        </div>
    );
}

export default HomePage;
