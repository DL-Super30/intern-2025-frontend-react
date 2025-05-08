import React, { useState } from 'react';

const ProjectUpload = () => {
    const [file, setFile] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setSuccessMessage(''); // Clear message when a new file is chosen
    };

    const handleUpload = (e) => {
        e.preventDefault();
        if (file) {
            console.log('Uploading:', file.name);
            // Simulate successful upload
            setSuccessMessage('Project successfully uploaded!');
            setFile(null); // Optionally clear file input
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center pt-8">
            <div className="w-full max-w-md">

                <div className="bg-sky-400 text-black w-150 text-sm p-3 mb-6 rounded">
                    No Projects found. You can add projects by uploading them using the form below.
                </div>

                {successMessage && (
                    <div className="bg-green-200 text-green-800 text-sm p-2 mb-4 rounded">
                        {successMessage}
                    </div>
                )}

                <form onSubmit={handleUpload} className="space-y-6">
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm text-black">Upload new Project</label>
                        <div className="flex h-11 border border-gray-400 p-2">
                            <label className="flex w-full cursor-pointer">
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                                <span className="block w-20 h-7 ms-1 p-1 border border-black bg-gray-200 text-sm text-gray-700 cursor-pointer flex justify-between">
                                    <span>{file ? file.name : "Choose file"}</span>
                                </span>
                                {!file && (
                                    <span className="text-sm text-gray-500 ms-2 mt-1">
                                        No file chosen
                                    </span>
                                )}
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-2"
                    >
                        Upload
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProjectUpload;
