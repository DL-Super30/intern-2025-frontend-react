import AdminNavbar from "../admin/AdminNavbar";
import React from "react";
import { useNavigate } from "react-router-dom";
import CoursePage from "./CoursePage";

function Videos() {

    const navigate = useNavigate('');

    const greater = () => {
        navigate('/admin-dashboard')
    }


    return (

        <div>
            <AdminNavbar />
            <div className=" flex items-center mt-8">
                <i className="fa-solid fa-arrow-left text-4xl ml-10 cursor-pointer text-black hover:text-gray-900" onClick={() => greater()}></i>
                <h2 className="text-black text-4xl font-semibold mx-auto">fsreact2304</h2>
            </div>

            <div>
                <CoursePage />
            </div>
        </div>
    )
}

export default Videos;