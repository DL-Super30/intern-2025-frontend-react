import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa"; 

const Enrolled = () => {
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([
    { name: "meghana", email: "meghana200303@gmail.com" },
    { name: "divya", email: "divyasai@gmail.com" },
    { name: "bhavya", email: "fbhavyahasini@gmail.com" },
  ]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleEnroll = () => {
    setError("");
    setSuccess("");

    if (!email.trim()) {
      setError("Please enter an email address.");
      return;
    }

    if (users.some((user) => user.email === email.trim())) {
      setError("User is already enrolled.");
      return;
    }

    const newUser = {
      name: email.split("@")[0],
      email: email,
    };

    setUsers([...users, newUser]);
    setSuccess(`User "${newUser.name}" enrolled successfully.`);
    setEmail("");
  };

  const handleRemove = (emailToRemove) => {
    setUsers(users.filter((user) => user.email !== emailToRemove));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 text-gray-800">
      <h2 className="text-2xl font-bold mb-6">
        Add user to <span className="text-blue-600">fsbasics2303</span>
      </h2>

      <div className="flex items-center gap-4 mb-2">
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded w-72 focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          onClick={handleEnroll}
          className="cursor-pointer bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Enroll
        </button>
      </div>

      {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
      {success && <p className="text-green-600 text-sm mb-4">{success}</p>}

      <table className="w-full border border-gray-300 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left px-4 py-2 border">Username</th>
            <th className="text-left px-4 py-2 border">Email</th>
            <th className="text-left px-4 py-2 border">Remove Access</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.email} className="hover:bg-gray-50">
              <td className="px-4 py-2 border">{user.name}</td>
              <td className="px-4 py-2 border">{user.email}</td>
              <td className="px-4 py-2 border">
                <button
                  onClick={() => handleRemove(user.email)}
                  className="text-red-500 hover:underline flex items-center gap-2"
                >
                  <FaTrashAlt className="text-red-500" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Enrolled;

