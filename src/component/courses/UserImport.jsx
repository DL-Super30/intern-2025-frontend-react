import React, { useState } from "react";

function UserImport() {
  const [file, setFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState("");
  const [email, setEmail] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [userNotFound, setUserNotFound] = useState(false);

  const users = [
    { email: "user1@example.com", name: "John Doe", age: 25 },
    { email: "user2@example.com", name: "Jane Smith", age: 28 },
    { email: "user3@example.com", name: "Michael Johnson", age: 30 },
  ];

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (file) {
      console.log("Uploading:", file.name);
      setUploadMessage("File uploaded successfully!");


      setTimeout(() => {
        setUploadMessage("");
      }, 3000);
    } else {
      setUploadMessage("No file selected!");
    }
  };

  const handleFindUser = () => {

    const user = users.find((user) => user.email === email);

    if (user) {
      setUserInfo(user);
      setUserNotFound(false);
    } else {
      setUserInfo(null);
      setUserNotFound(true);
    }
  };

  return (
    <div className="p-10 flex flex-col items-center space-y-20">
      {/* Import Users */}
      <div className="text-center space-y-6">
        <h2 className="text-2xl font-semibold ms-2">Import Users</h2>
        <div className="space-y-2">
          <label className="block text-left text-sm font-medium text-gray-700">
            Upload user file
          </label>
          <p className="text-xs text-gray-500 me-60">Sample-user.csv</p>

          <div className="flex items-center space-x-4">

            <div className="flex h-11 w-80 border border-gray-400 p-2">
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
                  <span className="text-sm text-gray-500 ms-2 mt-1">No file chosen</span>
                )}
              </label>
            </div>
          </div>

          <button
            type="submit"
            onClick={handleUpload}
            className="mt-2 me-55 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Upload
          </button>

          {uploadMessage && (
            <p className="mt-4 text-green-600">{uploadMessage}</p>
          )}
        </div>
      </div>


      <div className="text-center space-y-6">
        <h2 className="text-2xl font-semibold ms-10">Find Users Information</h2>
        <div className="space-y-2">
          <label className="block text-left text-sm font-medium text-gray-700">
            Enter user email
          </label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
            className="w-80 border border-purple-300 rounded px-3 py-2"
          />
          <div>
            <button
              onClick={handleFindUser}
              className="mt-2 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 me-53"
            >
              Find User
            </button>
          </div>
        </div>

        {/* Display found user info or not found message */}
        {userInfo && !userNotFound && (
          <div className="mt-4">
            <p className="text-lg font-medium">User Info:</p>
            <p>Name: {userInfo.name}</p>
            <p>Email: {userInfo.email}</p>
            <p>Age: {userInfo.age}</p>
          </div>
        )}

        {userNotFound && (
          <p className="mt-4 text-red-600">User not found!</p>
        )}
      </div>
    </div>
  );
}

export default UserImport;
