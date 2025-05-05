import React, { useState } from "react";

function Resume() {

    const [fileName, setFileName] = useState('');
    const [message, setMessage] = useState('');


    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
            setMessage('');
        }
    }

    const upload = () => {
        if (fileName) {
            setMessage('File Uploaded Successfully');
        } else {
            setMessage('Please Upload a File')
        }
    }
    return (

        <>
            <div>
                <div className="text-xl bg-blue-400 p-2 mt-4 ml-6">
                    <h2 className="ml-6">No Projects found. You can add projects by uploading them using the form below.</h2>
                </div>

                <div className="mt-6 ml-6">
                    <h2 className="text-xl mb-2">Upload new Resume</h2>
                    <div className="border border-gray-400 mt-1 px-3 py-2 inline-flex items-center space-x-3 w-[300px] rounded-sm">
                        <label htmlFor="upload" className="bg-gray-400 hover:bg-gray-600 hover:text-white p-2  text-center rounded-sm cursor-pointer">Choose File
                            <input type="file" onChange={handleChange} name="" id="upload" className="hidden" />
                        </label>
                        <span className="text-gray-800 truncate w-40 text-sm">{fileName || "No File Chosen"}</span>
                    </div>
                </div>

                <div className=" mt-6 ml-7">
                    <h2 className="bg-blue-700 text-white hover:bg-blue-900 w-24 text-center cursor-pointer p-3" onClick={upload}>Upload</h2>
                </div>
                {message && (
                    <p className="mt-2 text-green-500 text-md ml-7 font-normal">{message}</p>
                )}
            </div>
        </>
    )
}

export default Resume;