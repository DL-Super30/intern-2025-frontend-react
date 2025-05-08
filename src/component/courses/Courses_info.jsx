import React, { useState, useMemo } from "react";
import { Trash2, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Edit from "./meg";

const Info = ({ course }) => {
  const [liveClassLink, setLiveClassLink] = useState('');
  const [error, setError] = useState('');
  const [showEditForm, setShowEditForm] = useState(false);
  const [courseData, setCourseData] = useState(course);

  
  const memoizedCourseData = useMemo(() => courseData, [courseData]);

  const handleSave = () => {
    if (!liveClassLink.trim()) {
      setError("Link is required.");
      return;
    }

    try {
      new URL(liveClassLink);
    } catch {
      setError("Invalid URL format.");
      return;
    }

    setError('');
    // Handle save logic here
    console.log("Saved:", liveClassLink);
  };

  const openEditForm = () => {
    setShowEditForm(true);
  };

  const cancelForm = () => {
    setShowEditForm(false);
  };

  const updateCourseData = (updatedData) => {
    setCourseData(updatedData);
    setShowEditForm(false);
  };

  return (
    <div className="w-full ms-5 me-45 rounded-lg space-y-4 text-sm">
      {!showEditForm ? (
        <>
          <div>
            <p className="flex gap">
              <strong>Name :</strong> <span className="ms-5">{courseData.name}</span>
            </p>
            <p className="flex gap mt-4">
              <strong>Trainer Name :</strong> <span className="ms-4">{courseData.trainer}</span>
            </p>
            <p className="flex gap mt-4">
              <strong>Modules :</strong> <span className="ms-4">{courseData.modules}</span>
            </p>
            <p className="flex gap mt-4">
              <strong>Live Class Name :</strong> <span className="ms-4">{courseData.liveClassName || "NA"}</span>
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter Live Class Link"
                value={liveClassLink}
                onChange={(e) => setLiveClassLink(e.target.value)}
                className="border border-gray-300 h-10 w-[350px] rounded px-2 py-1 text-sm"
              />
              <button
                onClick={handleSave}
                className="bg-blue-600 text-white h-10 px-4 py-1 rounded hover:bg-blue-700 transition text-sm whitespace-nowrap"
              >
                Save Live Classes Link
              </button>
            </div>
            {error && <span className="text-red-500 text-xs ms-1">{error}</span>}
          </div>

          <div className="items-center gap-4">
            <button className="flex items-center gap-1 bg-yellow-400 text-black h-10 px-3 py-1 rounded hover:bg-yellow-500 transition text-sm">
              <Trash2 size={16} />
              Archive
            </button>
          </div>

          <button
            onClick={openEditForm}
            className="flex items-center text-purple-600 cursor-pointer text-lg mt-2 gap-1 hover-blue-500"
          >
            Edit
            <ExternalLink size={14} />
          </button>

        </>
      ) : (
        <Edit
          initialData={memoizedCourseData}
          onSave={updateCourseData}
          onCancel={cancelForm}
        />
      )}
    </div>
  );
};

export default Info;
