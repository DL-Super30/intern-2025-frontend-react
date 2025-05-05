import React from "react";
import { Link , useNavigate } from "react-router-dom";
import Logo from '../../assets/Digital_Lync.jpg';

function AdminNavbar() {

    const navigate = useNavigate('');

    const update = () => {
        navigate('/admin-dashboard/update-profile');
    }

    const logout = () => {
        navigate('/login');
    }

    return (
        <div>
            <nav className="flex items-center justify-between px-6 py-2 bg-white shadow w-full">
                <div className="flex items-center space-x-2">
                    <img src={Logo} alt="Digital Lync Logo" className="cursor-pointer" />
                </div>

                <div className="flex space-x-10">
                    <Link to="/admin-dashboard/course-list" className="text-blue-500 font-medium flex items-center gap-2 hover:underline text-lg">
                        <span>Admin Portal</span>
                        <span className="text-blue-500">
                            <i className="fas fa-arrow-up-right-from-square text-blue-600 transform transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"></i>
                        </span>
                    </Link>

                    <div className="relative group mr-6">
                        <div>
                        <Link to=""> <h2 className="bg-blue-500 hover:bg-blue-800  flex items-center justify-center text-white rounded-full font-semibold w-9 h-9 px-2 py-2 mr-6">B</h2></Link>
                        </div>
                        
                        <div className="absolute right-0 mt-4 w-48 bg-white border border-gray-200 rounded-md focus:outline-none shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <button type="submit" className="flex items-center w-full px-4 py-4 hover:bg-gray-200 text-md cursor-pointer" onClick={() => update()}> 
                                <i className="fas fa-user text-xl ml-1 mr-3"></i> Update Profile
                             </button>
                            <button type="submit" className="flex items-center w-full px-4 py-4 hover:bg-gray-200 text-md cursor-pointer" onClick={() => logout()}>
                                <i className="fas fa-sign-out-alt text-xl ml-1 mr-3"></i> Logout
                            </button>
                        </div>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default AdminNavbar;