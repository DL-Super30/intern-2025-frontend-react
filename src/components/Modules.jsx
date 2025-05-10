import React, { useState } from 'react';

const Modules = ({ selectedCourse }) => {
  const [modules, setModules] = useState([
    {
      title: 'fs fundamentals 1',
      videos: [
        { name: 'video', link: 'https://www.youtube.com/embed/v1' },
        { name: 'scrum', link: 'https://www.youtube.com/embed/v2' },
        { name: 'agile', link: 'https://www.youtube.com/embed/v3' },
      ],
    },
    {
      title: 'fs fundamentals 2',
      videos: [{ name: 'video', link: 'https://www.youtube.com/embed/v1' }],
    },
  ]);

  const handleAddModule = () => {
    setModules([
      ...modules,
      {
        title: `New Module ${modules.length + 1}`,
        videos: [{ name: '', link: '' }],
      },
    ]);
  };

  const handleAddVideo = (moduleIndex) => {
    const newModules = [...modules];
    newModules[moduleIndex].videos.push({ name: '', link: '' });
    setModules(newModules);
  };

  const handleDeleteVideo = (moduleIndex, videoIndex) => {
    const newModules = [...modules];
    newModules[moduleIndex].videos.splice(videoIndex, 1);
    setModules(newModules);
  };

  const handleDeleteModule = (moduleIndex) => {
    const newModules = [...modules];
    newModules.splice(moduleIndex, 1);
    setModules(newModules);
  };

  const handleInputChange = (moduleIndex, videoIndex, field, value) => {
    const newModules = [...modules];
    newModules[moduleIndex].videos[videoIndex][field] = value;
    setModules(newModules);
  };

  const handleTitleChange = (moduleIndex, value) => {
    const newModules = [...modules];
    newModules[moduleIndex].title = value;
    setModules(newModules);
  };

  return (
    <div className="p-6">
      <header className="mb-6 -mt-12">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-semibold text-gray-600">
            {selectedCourse || 'fsbasis2030'}
          </h2>
          <button
            onClick={handleAddModule}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            All Module
          </button>
        </div>
      </header>

      {modules.map((module, moduleIndex) => (
        <div
          key={moduleIndex}
          className="border border-gray-300 p-4 mb-6 rounded shadow-sm"
        >
          <div className="flex justify-between items-center mb-4">
            <input
              type="text"
              value={module.title}
              onChange={(e) => handleTitleChange(moduleIndex, e.target.value)}
              className="text-lg font-semibold px-2 w-2/3 focus:outline-none"
            />
            <div className="space-x-2">
              <button
                onClick={() => handleAddVideo(moduleIndex)}
                className="bg-blue-600 text-white px-3 py-1 rounded"
              >
                Add Video
              </button>
              <button
                onClick={() => handleDeleteModule(moduleIndex)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete Module
              </button>
            </div>
          </div>

          <div className="flex font-semibold mb-2 text-sm">
            <div className="w-1/3 pl-1">Video Name</div>
            <div className="w-1/3 pl-1 ml-4">Video Link</div>
            <div className="w-1/12"></div>
          </div>

          {module.videos.map((video, videoIndex) => (
            <div key={videoIndex} className="flex items-center gap-x-4 mb-2">
              <input
                type="text"
                placeholder="Video Name"
                value={video.name}
                onChange={(e) =>
                  handleInputChange(moduleIndex, videoIndex, 'name', e.target.value)
                }
                className="border px-2 py-1 w-1/3 rounded"
              />
              <input
                type="text"
                placeholder="Video Link"
                value={video.link}
                onChange={(e) =>
                  handleInputChange(moduleIndex, videoIndex, 'link', e.target.value)
                }
                className="border px-2 py-1 w-1/3 rounded"
              />
              <button
                onClick={() => handleDeleteVideo(moduleIndex, videoIndex)}
                className="text-red-600 hover:text-red-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 3v1H4v2h1v14a2 2 0 002 2h10a2 2 0 002-2V6h1V4h-5V3H9zm8 4v13H7V7h10zM9 9v9h2V9H9zm4 0v9h2V9h-2z" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Modules;
