import React, { useState } from 'react';

const ImportUsers = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [email, setEmail] = useState('');
  const [userInfo, setUserInfo] = useState(null);

  const [uploadMessage, setUploadMessage] = useState('');
  const [uploadMessageType, setUploadMessageType] = useState('');

  const [searchMessage, setSearchMessage] = useState('');
  const [searchMessageType, setSearchMessageType] = useState('');

  const mockUsers = [
    { email: 'kuldeepsinghgmail.com', name: 'kuldeep', role: 'Student' },
    { email: 'rahul2304@gmail.com', name: 'rahul', role: 'Trainer' },
  ];

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log('Uploading:', selectedFile.name);
      setUploadMessage("File uploaded successfully.");
      setUploadMessageType('success');
    } else {
      setUploadMessage('Please select a file before uploading.');
      setUploadMessageType('error');
    }
  };

  const handleFindUser = () => {
    if (!email) {
      setSearchMessage('Please enter an email');
      setSearchMessageType('error');
      setUserInfo(null);
      return;
    }

    const foundUser = mockUsers.find((user) => user.email === email);
    if (foundUser) {
      setUserInfo(foundUser);
      setSearchMessage('User found successfully');
      setSearchMessageType('success');
    } else {
      setUserInfo(null);
      setSearchMessage('User not found');
      setSearchMessageType('error');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 bg-white">
      <h1 className="text-2xl font-bold mb-6 text-center w-full">Import Users</h1>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-md text-left">
          <label className="block mb-1 text-sm font-medium text-gray-800">
            Upload user file
          </label>
          <p className="text-sm text-gray-500 mb-2">Sample-user.csv</p>

          <div className="p-2 border border-violet-300 inline-flex items-center overflow-hidden">
            <label className="bg-gray-300 text-sm px-2 cursor-pointer border h-8 flex items-center">
              Choose File
              <input type="file" onChange={handleFileChange} className="hidden" />
            </label>
            <span className="px-3 py-1 text-sm w-40">
              {selectedFile ? selectedFile.name : 'No file chosen'}
            </span>
          </div>

          <div className="mt-4">
            <button
              onClick={handleUpload}
              className="bg-sky-600 text-white py-2 w-1/4 cursor-pointer hover:bg-blue-800"
            >
              Upload
            </button>
            {uploadMessage && (
              <div className={`mt-2 text-sm ${uploadMessageType === 'error' ? 'text-red-600' : 'text-green-600'}`}>
                {uploadMessage}
              </div>
            )}
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4 text-center w-full">Find Users Information</h2>

          <label className="block mb-1 text-sm font-medium text-gray-800">Enter user email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-90 border border-gray-400 h-10 px-3 mb-4 rounded outline-none"
          />

          <button
            onClick={handleFindUser}
            className="bg-sky-600 text-white py-2 hover:bg-blue-800 cursor-pointer w-1/4"
          >
            Find User
          </button>
          {searchMessage && (
            <div className={`mt-2 text-sm ${searchMessageType === 'error' ? 'text-red-600' : 'text-green-600'}`}>
              {searchMessage}
            </div>
          )}

          {userInfo && (
            <div className="mt-4 text-sm bg-gray-100 p-3 rounded">
              <h3 className="font-semibold mb-2">User Info:</h3>
              <p><strong>Name:</strong> {userInfo.name}</p>
              <p><strong>Email:</strong> {userInfo.email}</p>
              <p><strong>Role:</strong> {userInfo.role}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImportUsers;
