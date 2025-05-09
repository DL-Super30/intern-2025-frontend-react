import React, { useState } from "react";

const Resources = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setErrorMessage('');
    setSuccessMessage('');
  };

  const handleUpload = () => {
    if (!selectedFile) {
      setErrorMessage('Please choose a file before uploading.');
      setSuccessMessage('');
      return;
    }

    // Simulate upload
    console.log(`Uploading resource: ${selectedFile.name}`);

    setSuccessMessage('Resource uploaded successfully.');
    setErrorMessage('');
    setSelectedFile(null);
  };

  return (
    <div className="text-gray-800">
      <div className="bg-blue-300 text-black px-4 py-4 mb-8 text-sm font-medium max-w-2xl">
        No Resources found. You can add resources by uploading them using the form below.
      </div>

      <div className="mb-5">
        <label className="block mb-2 font-medium text-sm">Upload Resource</label>

        <div className="border border-gray-300 h-12 inline-flex items-center rounded overflow-hidden">
          <label className="bg-gray-300 text-sm px-2 py-1 cursor-pointer border ml-2 h-6 flex items-center">
            Choose File
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
          <span className="px-3 py-1 text-sm w-60 truncate">
            {selectedFile ? selectedFile.name : "No file chosen"}
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
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Upload
      </button>
    </div>
  );
};

export default Resources;
