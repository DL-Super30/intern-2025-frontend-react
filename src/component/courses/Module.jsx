import React, { useState } from "react";

const Module = ({ chosenCourse }) => {
  const [sections, setSections] = useState([
    {
      heading: "fs fundamentals 1",
      resources: [
        { label: "Intro Video", url: "https://www.youtube.com/embed/v1" },
        { label: "Scrum Process", url: "https://www.youtube.com/embed/v2" },
        { label: "Agile Overview", url: "https://www.youtube.com/embed/v3" },
      ],
    },
    {
      heading: "fs fundamentals 2",
      resources: [{ label: "Deep Dive", url: "https://www.youtube.com/embed/v1" }],
    },
  ]);

  const addSection = () => {
    setSections([
      ...sections,
      {
        heading: `Section ${sections.length + 1}`,
        resources: [{ label: "", url: "" }],
      },
    ]);
  };

  const addResource = (secIndex) => {
    const updated = [...sections];
    updated[secIndex].resources.push({ label: "", url: "" });
    setSections(updated);
  };

  const removeResource = (secIndex, resIndex) => {
    const updated = [...sections];
    updated[secIndex].resources.splice(resIndex, 1);
    setSections(updated);
  };

  const removeSection = (index) => {
    const updated = [...sections];
    updated.splice(index, 1);
    setSections(updated);
  };

  const handleResourceChange = (secIndex, resIndex, field, val) => {
    const updated = [...sections];
    updated[secIndex].resources[resIndex][field] = val;
    setSections(updated);
  };

  const handleHeadingChange = (index, val) => {
    const updated = [...sections];
    updated[index].heading = val;
    setSections(updated);
  };

  return (
    <div className="p-6 space-y-6 ms-20 mb-20 ">
      <div className="p-4 w-150 flex items-center justify-between">
        <h1 className="text-2xl font-bold">{chosenCourse || "fsbasic2303"}</h1>
        <button
          onClick={addSection}
          className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white text-sm rounded w-32 h-10 ms-[200px]
"
        >
          Add Module
        </button>

      </div>

      {sections.map((section, secIndex) => (
        <div key={secIndex} className="border p-4 w-150 space-y-4 shadow-sm rounded">
   
          <div className="flex items-center justify-between gap-2">
            <input
              type="text"
              value={section.heading}
              onChange={(e) => handleHeadingChange(secIndex, e.target.value)}
              className="font-semibold text-lg focus:outline-none px-2 w-full sm:w-2/3"
            />

            <div className="flex items-center gap-4">
              <button
                onClick={() => addResource(secIndex)}
                className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white text-sm w-32 h-10 rounded"
              >
                Add Video
              </button>
              <button
                onClick={() => removeSection(secIndex)}
                className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white text-sm w-32 h-10 rounded"
              >
                Delete Module
              </button>
            </div>
          </div>

          {/* Resource Fields */}
          <div className="grid grid-cols-2 gap-4 font-medium text-sm border-b pb-2">
            <span>Video Name</span>
            <span>Video Link</span>
          </div>

          {section.resources.map((resource, resIndex) => (
            <div key={resIndex} className="grid grid-cols-2 gap-4 items-center">
              <input
                type="text"
                value={resource.label}
                placeholder="Video Name"
                onChange={(e) =>
                  handleResourceChange(secIndex, resIndex, "label", e.target.value)
                }
                className="border px-2 py-1 rounded w-full"
              />
              <div className="flex items-center gap-2 w-full">
                <input
                  type="text"
                  value={resource.url}
                  placeholder="https://www.youtube.com/embed/v"
                  onChange={(e) =>
                    handleResourceChange(secIndex, resIndex, "url", e.target.value)
                  }
                  className="border px-2 py-1 rounded w-full"
                />
                <button
                  onClick={() => removeResource(secIndex, resIndex)}
                  className="text-red-600 hover:text-red-800 text-xl"
                  title="Remove"
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Module;
