
import React from "react";
import logo from "../assets/logo.png"
function navbar() {
    return (
        <div className="flex  items-center shadow-lg justify-between">
            <img src={logo} alt="Logo" className="h-16 w-auto mt-2" />
            <div className="flex items-center space-x-4 mt-10 ms-60">
                <div className="text-blue-500 text-xl font-semibold">Admin Portal</div>
                <span className="text-3xl text-blue-400">↗</span>
                <h1 className="flex items-center justify-center text-white bg-blue-500 text-2xl font-semibold h-10 w-10 rounded-full border border-black">
                    B
                </h1>
            </div>
        </div>
    )
}
export default navbar;