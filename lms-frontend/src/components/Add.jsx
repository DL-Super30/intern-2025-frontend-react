import React, { useState } from "react";

const AddPage = () => {
  const [form, setForm] = useState({
    title: "",
    trainer: "",
    description: "",
    picture: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "picture") {
      setForm({ ...form, picture: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Course created successfully!");
    console.log(form);
    
    setForm({
      title: "",
      trainer: "",
      description: "",
      picture: null,
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-md border border-gray-200 ">
      <h2 className="text-xl font-semibold mb-6">Create Course</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full px-3 py-2 border-2 border-purple-400 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Trainer</label>
          <input
            type="text"
            name="trainer"
            value={form.trainer}
            onChange={handleChange}
            placeholder="Trainer"
            className="w-full px-3 py-2 border-2 border-purple-400 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            rows={6}
            className="w-full px-3 py-2 border-2 border-blue-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Picture</label>
          <input
            type="file"
            name="picture"
            onChange={handleChange}
            className="w-full border-2 border-purple-400 rounded py-1 px-2"
          />
        </div>

        {form.picture && (
          <p className="text-sm text-gray-600">Current Picture: {form.picture.name}</p>
        )}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-2 rounded hover:from-purple-700 hover:to-indigo-700"
        >
          CREATE
        </button>
      </form>
    </div>
  );
};

export default AddPage;
