import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa'; 

const UserManagement = () => {
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([
    { username: 'mubeen', email: 'mubeen@gmail.com' },
    { username: 'nithin', email: 'nithin@gmail.com' },
    { username: 'farhath', email: 'farhath@gmail.com' },
  ]);

  const handleEnroll = (e) => {
    e.preventDefault();
    if (email.trim() !== '') {
      const username = email.split('@')[0];
      setUsers([...users, { username, email }]);
      setEmail('');
    }
  };

  const handleRemove = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-10">
      <div className="w-full max-w-3xl px-4">

        {/* Title */}
        <h1 className="text-xl font-semibold mb-6">Add user to fsbasics2303</h1>

        {/* Form */}
        <form onSubmit={handleEnroll} className="flex space-x-2 mb-8">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-400 p-2 flex-1 text-sm outline-none"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 text-sm"
          >
            Enroll
          </button>
        </form>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-left text-sm">
                <th className="border-b border-r border-gray-300 p-2">Username</th>
                <th className="border-b border-r border-gray-300 p-2">Email</th>
                <th className="border-b border-gray-300 p-2">Remove Access</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="text-sm">
                  <td className="border-b border-r border-gray-300 p-2">{user.username}</td>
                  <td className="border-b border-r border-gray-300 p-2">{user.email}</td>
                  <td className="border-b border-gray-300 p-2">
                    <button onClick={() => handleRemove(index)} className="text-red-500">
                      <FaTrash size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default UserManagement;
