import { useForm } from "react-hook-form";
import AdminNavbar from "./admin/AdminNavbar";
import React, { useState, useRef } from "react";

const Popup = ({ message }) => {

    return (

        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 px-2 py-2 text-white rounded-sm shadow-md z-50">
            {message}
        </div>
    )
}

function UpdateProfile() {

    const { register, handleSubmit, formState: { isDirty }, reset, watch } = useForm({
        defaultValues: {
            name: '',
            email: '',
            profile: null,
        }
    });

    const [popupMessage, setpopupMessage] = useState('');
    const fileInputRef = useRef();
    const selectedFile = watch('profile');
    const [fileName, setFileName] = useState('No File Chosen');

    const handleChange = (e) => {
        const file = e.target.files[0];
        setFileName(file ? file.name : 'No File Chosen');
    }

    const showPopup = (message) => {
        setpopupMessage(message);
        setTimeout(() => setpopupMessage(''), 1000);
    }

    const submit = (data) => {

        const fileInput = data.profile?.[0];
        const fileName = fileInput ? fileInput.name : '';

        console.log("Submitting Form Data:", data);


        const userDetails = {
            name: '',
            email: '',
            profileFile: fileName
        };

        localStorage.setItem('userDetails', JSON.stringify(userDetails));
        console.log("Saved to local storage:", userDetails);
        showPopup('Details Saved Successfully');
    }

    const resetPassword = (e) => {
        e.preventDefault();
        showPopup('Reset password link sent');
    };


    return (

        <div className="min-h-screen bg-gray-100">

            <AdminNavbar />

            {popupMessage && <Popup message={popupMessage} />}
            <form action="" onSubmit={handleSubmit(submit)}>
                <div className="mt-10">
                    <h2 className="text-4xl text-center font-bold">Update Profile Information</h2>

                    <div className="mt-10 ml-56">
                        <h2 className="ml-44 text-slate-800">Name</h2>
                        <input type="text" name="" id="" className="border border-gray-400 focus:outline-none focus:border-blue-400 mt-1 ml-44 py-1 w-[700px] rounded-sm"
                            {...register('name')}
                        />
                    </div>

                    <div className="mt-6 ml-56">
                        <h2 className="ml-44 text-slate-800">Email</h2>
                        <input type="email" name="" id="" className="border border-gray-400 focus:outline-none focus:border-blue-400 mt-1 ml-44 py-1 w-[700px] rounded-sm"
                            {...register('email')}
                        />
                    </div>

                    <div className=" mt-6 ml-56">
                        <h2 className="ml-44 text-slate-800">Profile</h2>
                        <h2 className="text-xs text-gray-500 ml-44">Upload your profile picture</h2>

                        <div className="mt-2 ml-44">
                            <div className="border border-gray-400 px-3 py-1 inline-flex items-center space-x-3 w-[700px] rounded-sm">
                                <label htmlFor="upload" className="bg-gray-400 hover:bg-gray-600 hover:text-white p-2  text-center rounded-sm cursor-pointer">Choose File
                                    <input type="file" onChange={handleChange} name="" id="upload" className="hidden" 
                                    {...register('profile')}
                                    />
                                </label>
                                <span className="text-gray-800 truncate w-40 text-sm">{fileName}</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 text-center">
                        <button type="submit" disabled={!isDirty} className={`border border-gray-200 focus:outline-none text-gray-300 w-[700px] px-2 py-2 rounded-sm text-center mr-9 cursor-pointer ${isDirty ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-400'}`}>Save</button>
                    </div>

                    <div className="mt-5 text-center">
                        <button type="submit" className="border border-blue-300 hover:bg-gray-200 rounded-sm focus:outline-none text-blue-500 text-center font-medium w-[700px] px-2 py-1 cursor-pointer mr-9" onClick={resetPassword}>Reset Password</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UpdateProfile;