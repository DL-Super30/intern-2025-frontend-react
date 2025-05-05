import React, { useState, useEffect } from "react";

function CourseModules({ CourseName, Videos }) {
  const [modules, setModules] = useState([]);

  // Initialize modules using props (only on first render)
  useEffect(() => {
    setModules([
      {
        id: Date.now(),
        title: "Module 1",
        videos: Videos && Array.isArray(Videos) ? Videos : [],
      },
    ]);
  }, [Videos]);

  const addModule = () => {
    setModules((prevModules) => [
      ...prevModules,
      {
        id: Date.now(),
        title: `Module ${prevModules.length + 1}`,
        videos: [{ name: "", Link: "" }],
      },
    ]);
  };

  const addVideo = (moduleId) => {
    setModules((prevModules) =>
      prevModules.map((module) =>
        module.id === moduleId
          ? {
              ...module,
              videos: [...module.videos, { name: "", Link: "" }],
            }
          : module
      )
    );
  };

  const deleteModule = (moduleId) => {
    setModules((prevModules) =>
      prevModules.filter((module) => module.id !== moduleId)
    );
  };

  const deleteVideo = (moduleId, videoIndex) => {
    setModules((prevModules) =>
      prevModules.map((module) =>
        module.id === moduleId
          ? {
              ...module,
              videos: module.videos.filter((_, idx) => idx !== videoIndex),
            }
          : module
      )
    );
  };

  const handleChange = (moduleId, videoIndex, field, value) => {
    setModules((prevModules) =>
      prevModules.map((module) =>
        module.id === moduleId
          ? {
              ...module,
              videos: module.videos.map((video, idx) =>
                idx === videoIndex ? { ...video, [field]: value } : video
              ),
            }
          : module
      )
    );
  };

  return (
    <div>
      <div className="mt-4 ml-3 flex items-center justify-between">
        <h2 className="text-3xl text-black font-semibold">{CourseName}</h2>
        <button
          className="bg-blue-500 text-white hover:bg-blue-700 rounded-md cursor-pointer p-2 mr-1"
          onClick={addModule}
        >
          Add Module
        </button>
      </div>

      {modules.map((module, moduleIndex) => (
        <div
          key={module.id}
          className="border p-6 w-[660px] rounded-md shadow-md mt-5 ml-2 pb-12 relative"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">{module.title}</h2>
            <div className="space-x-4 text-end">
              <button
                className="bg-blue-500 text-white hover:bg-blue-700 rounded-md p-2 cursor-pointer"
                onClick={() => addVideo(module.id)}
              >
                Add Video
              </button>
              <button
                className="bg-red-500 text-white hover:bg-red-700 rounded-md p-2 cursor-pointer"
                onClick={() => deleteModule(module.id)}
              >
                Delete Module
              </button>
            </div>
          </div>

          <div className="flex space-x-56 items-start font-medium">
            <div className="ml-2">Video Name</div>
            <div>Video Link</div>
          </div>

          {module.videos.map((video, idx) => (
            <div key={idx} className="flex gap-4 items-center mb-2 mt-2">
              <input
                type="text"
                value={video.name}
                placeholder="Video Name"
                className="border border-gray-400 px-2 py-1 w-52"
                onChange={(e) =>
                  handleChange(module.id, idx, "name", e.target.value)
                }
              />
              <input
                type="text"
                value={video.Link}
                placeholder="Video Link"
                className="border border-gray-400 px-2 py-1 ml-24 w-52"
                onChange={(e) =>
                  handleChange(module.id, idx, "Link", e.target.value)
                }
              />
              <button
                className="cursor-pointer"
                onClick={() => deleteVideo(module.id, idx)}
              >
                <i className="fa-solid fa-trash text-red-500 mt-2 ml-4 text-xl cursor-pointer"></i>
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default CourseModules;
