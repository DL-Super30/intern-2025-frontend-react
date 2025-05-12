import React, { useState } from "react";

const Resume = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setError("");
    setSuccess("");
  };

  const handleUpload = () => {
    if (selectedFile) {
      setSuccess(`Resume uploaded successfully.`);
      setError("");
      setSelectedFile(null);
    } else {
      setError("Please choose a file to upload.");
      setSuccess("");
    }
  };

  return (
    <div className="text-gray-800">
      <div className="bg-blue-300 text-black px-4 py-4 mb-8 text-sm font-medium max-w-2xl">
        No Resume templates are updated for this course.
      </div>

      <div className="mb-5">
        <label className="block mb-2 font-medium text-sm">Upload Resume</label>

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

        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
        {success && <p className="text-green-600 text-sm mt-2">{success}</p>}
      </div>

      <button
        onClick={handleUpload}
        className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        Upload
      </button>
    </div>
  );
};

export default Resume;
