import React, { useState } from 'react';

const Users = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [email, setEmail] = useState('');
  const [fileMessage, setFileMessage] = useState(''); 
  const [emailMessage, setEmailMessage] = useState('');  

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      setFileMessage('Please select a file to upload.');
      setFileMessageClass('text-red-600');
    } else {
      console.log('Uploading:', selectedFile.name);
      setFileMessage('File uploaded successfully.');
      setFileMessageClass('text-green-600'); 
    }
  };

  const handleFindUser = () => {
    const validEmails = ['meghana200303@gmail.com', 'siddu324@gmail.com'];

    setEmailMessage('');

    if (!email.trim()) {
      setEmailMessage('Please enter an email address.');
      setEmailMessageClass('text-red-600');
      return;
    }

    if (validEmails.includes(email.trim())) {
      setEmailMessage('User found');
      setEmailMessageClass('text-green-600'); 
    } else {
      setEmailMessage('User not found');
      setEmailMessageClass('text-red-600'); 
    }
  };

  const [fileMessageClass, setFileMessageClass] = useState('text-black'); 
  const [emailMessageClass, setEmailMessageClass] = useState('text-black'); 
  return (
    <div className="min-h-1/2 flex flex-col items-center justify-start px-4 bg-white overflow-x-hidden">
      <h1 className="text-2xl font-bold mb-6 text-center w-full">Import Users</h1>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-md text-left">
  
          <label className="block mb-1 text-sm font-medium text-gray-800">
            Upload user file
          </label>
          <p className="text-sm text-gray-500 mb-2">Sample-user.csv</p>

          <div>
          
            <div className="p-2 border border-violet-300 inline-flex items-center overflow-hidden">
              <label className="bg-gray-300 text-sm px-2 cursor-pointer border hhein h-8 flex items-center">
                Choose Files
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              <span className="px-3 py-1 text-sm w-40 truncate">
                {selectedFile ? selectedFile.name : 'No file chosen'}
              </span>
            </div>

            <div className="mt-4 mb-4">
              <button
                onClick={handleUpload}
                className="bg-sky-600 text-white py-2 w-1/4 cursor-pointer hover:bg-blue-800"
              >
                Upload
              </button>
            </div>

            <div className={`mt-2 text-sm font-medium ${fileMessageClass}`}>
              {fileMessage}
            </div>
          </div>

          <div className="mt-10"></div>

          <h2 className="text-xl font-bold mb-4 text-center w-full">Find Users Information</h2>

          <label className="block mb-1 text-sm font-medium text-gray-800">
            Enter user email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-90 border border-violet-500 h-10 px-3 mb-4 rounded outline-none"
          />
          <div className="mt-2 mb-2">
            <button
              onClick={handleFindUser}
              className="bg-sky-600 text-white py-2 hover:bg-blue-800 cursor-pointer w-1/4"
            >
              Find User
            </button>
          </div>
          <div className={`mt-2 text-sm font-medium ${emailMessageClass}`}>
            {emailMessage}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
