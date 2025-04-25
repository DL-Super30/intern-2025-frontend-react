import { useForm } from "react-hook-form";
import AdminNavbar from "./admin/AdminNavbar";
import React, { useState , useRef } from "react";

const Popup = ({message}) => {

    return(

        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 px-2 py-2 text-white rounded-sm shadow-md z-50">
            {message}
        </div>
    )
}

function UpdateProfile() {

    const { register , handleSubmit , formState:{isDirty}, reset , setValue , watch } = useForm({
        defaultValues:{
            name:'',
            email:'',
            profile: null,
        }
    });

    const [ popupMessage , setpopupMessage ] = useState('');
    const fileInputRef = useRef();
    const selectedFile = watch('profile');

    const showPopup = (message) => {
        setpopupMessage(message);
        setTimeout(() => setpopupMessage(''), 800);
    }

    const submit = (data) => {

        const fileInput = data.profile?.[0];
        const fileName = fileInput ? fileInput.name : '';

        console.log("Submitting Form Data:" , data );
        

        const userDetails = {
            name:'',
            email:'',
            profileFile: fileName
        };

        localStorage.setItem('userDetails', JSON.stringify(userDetails));
        console.log("Saved to local storage:", userDetails);
        showPopup('Details Saved Successfully');
    }

    const fileClick = () => {
        fileInputRef.current.click();
    }

    const fileChange = (e) => {

        setValue('profile', e.target.files);
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
                    
                    <div className="w-[700px] ml-44 mt-2 border border-gray-400 rounded px-3 py-4 cursor-pointer text-gray-600 focus:outline-none focus:ring focus:border-blue-500" onClick={fileClick}>
                        {selectedFile?.[0]?.name}
                    </div>
                    <input type="file" name="" id="" accept="image/*"
                    {...register('profile')} ref={fileInputRef} className="hidden" onChange={fileChange}
                    />
                </div>

                <div className="mt-10 text-center">
                    <button type="submit" disabled={!isDirty} className={`border border-gray-200 focus:outline-none text-gray-300 w-[700px] px-2 py-2 rounded-sm text-center mr-9 cursor-pointer ${isDirty ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-400' }`}>Save</button>
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