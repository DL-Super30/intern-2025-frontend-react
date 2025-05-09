import React, { useState } from 'react';

const Projects = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setErrorMessage('');
    setSuccessMessage('');
  };

  const handleUpload = () => {
    if (!selectedFile) {
      setErrorMessage('Please select a file ');
      setSuccessMessage('');
      return;
    }

    console.log('Submitting file:', selectedFile.name);


    setSuccessMessage('Project uploaded successfully!');
    setErrorMessage('');
    setSelectedFile(null);
  };

  return (
    <div className="text-gray-800">

      <div className="bg-blue-300 text-black px-4 py-4 mb-8 text-sm font-medium max-w-2xl">
        No Projects found. You can add projects by uploading them using the form below.
      </div>

      <div className="mb-5">
        <label className="block mb-2 font-medium text-sm">Upload new Project</label>

        <div className="border border-gray-300 h-12 inline-flex items-center overflow-hidden">
          <label className="bg-gray-300 text-sm px-2 py-1 cursor-pointer border ml-2 h-6 flex items-center">
            Choose File
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
          <span className="px-3 py-1 text-sm w-60 truncate">
            {selectedFile ? selectedFile.name : 'No file chosen'}
          </span>
        </div>

        {errorMessage && (
          <div className="text-red-600 text-sm mt-2">{errorMessage}</div>
        )}

        {successMessage && (
          <div className="text-green-600 text-sm mt-2">{successMessage}</div>
        )}
      </div>

      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 hover:bg-gray-700"
      >
        Upload
      </button>
    </div>
  );
};

export default Projects;