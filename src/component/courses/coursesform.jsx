import React, { useState } from 'react';

function CreateCourseForm() {
  const [formData, setFormData] = useState({
    title: '',
    trainer: '',
    description: '',
    picture: null,
  });

  const [courseList, setCourseList] = useState([]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);


    const newCourse = {
      ...formData,
      id: new Date().toISOString(), 
    };
    setCourseList([...courseList, newCourse]);

    alert('Course Created Successfully!');


    setFormData({
      title: '',
      trainer: '',
      description: '',
      picture: null,
    });
  };

  return (
    <div className="max-w-xl mx-auto px-4 mt-2 mb-6">
      <h2 className="text-xl font-bold mb-6">Create Course</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block font-medium mb-2">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-purple-500 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Trainer</label>
          <input
            type="text"
            name="trainer"
            placeholder="Trainer"
            value={formData.trainer}
            onChange={handleChange}
            className="w-full border border-purple-500 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            rows={6}
            className="w-full border border-purple-500 px-3 py-2 resize-none outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Picture</label>
          <input
            type="file"
            name="picture"
            onChange={handleChange}
            className="w-full border border-purple-500 px-3 py-2 outline-none"
          />
          <p className="text-sm text-gray-600 mt-1">Current Picture</p>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 font-semibold transition duration-200"
        >
          CREATE
        </button>
      </form>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">Course List</h3>
        <ul className="mt-4 space-y-3">
          {courseList.map((course) => (
            <li key={course.id} className="border border-gray-300 p-4 rounded-md">
              <h4 className="font-bold">{course.title}</h4>
              <p>{course.trainer}</p>
              <p>{course.description}</p>
              {course.picture && <img src={URL.createObjectURL(course.picture)} alt="Course" className="mt-2 w-20 h-20 object-cover" />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CreateCourseForm;
