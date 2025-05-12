import React, { useState, useEffect } from "react";

const CoursesInfo = ({ courseInfo }) => {
  const [liveLinkInput, setLiveLinkInput] = useState("");
  const [updatedCourseInfo, setUpdatedCourseInfo] = useState(courseInfo);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editForm, setEditForm] = useState({
    name: "",
    trainer: "",
    ModulesPage: "",
    liveClassName: "",
  });

  useEffect(() => {
    setUpdatedCourseInfo(courseInfo);
  }, [courseInfo]);

  const handleSaveLiveLink = () => {
    setUpdatedCourseInfo((prev) => ({
      ...prev,
      liveClassName: liveLinkInput,
    }));
    setLiveLinkInput("");
  };

  const handleEditClick = () => {
    setEditForm(updatedCourseInfo);
    setShowEditForm(true);
  };

  const handleCancelEdit = () => {
    setShowEditForm(false);
  };

  const handleUpdateCourse = () => {
    setUpdatedCourseInfo(editForm);
    setShowEditForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="p-6 text-sm space-y-4 text-gray-800">
      {!showEditForm ? (
        <>
          <p><strong>Name:</strong> {updatedCourseInfo.name}</p>
          <p><strong>Trainer Name:</strong> {updatedCourseInfo.trainer}</p>
          <p><strong>ModulesPage:</strong> {updatedCourseInfo.ModulesPage}</p>
          <p><strong>Live class Name:</strong> {updatedCourseInfo.liveClassName}</p>

          <div className="flex gap-2 mt-4">
            <input
              type="text"
              value={liveLinkInput}
              onChange={(e) => setLiveLinkInput(e.target.value)}
              placeholder="Enter Live Class Name Link"
              className="border border-gray-300 px-3 py-2 rounded w-1/2"
            />
            <button
              onClick={handleSaveLiveLink}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
            >
              Save Live Class Name Link
            </button>
          </div>

          <button className="flex items-center gap-2 bg-yellow-400 text-sm px-4 py-2 rounded shadow-sm mt-4">
            🗑️ Archive
          </button>

          <p
            onClick={handleEditClick}
            className="text-blue-600 cursor-pointer text-sm mt-2"
          >
            Edit ✏️
          </p>
        </>
      ) : (
        <div className="border border-gray-300 p-4 rounded bg-gray-50 max-w-md">
          <h3 className="text-base font-semibold mb-4">Update Information</h3>

          <div className="space-y-3">
            <div>
              <label className="block text-xs mb-1">Name</label>
              <input
                name="name"
                value={editForm.name}
                onChange={handleInputChange}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block text-xs mb-1">Trainer Name</label>
              <input
                name="trainer"
                value={editForm.trainer}
                onChange={handleInputChange}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block text-xs mb-1">ModulesPage</label>
              <input
                name="ModulesPage"
                value={editForm.ModulesPage}
                onChange={handleInputChange}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block text-xs mb-1">Live Class Name</label>
              <input
                name="liveClassName"
                value={editForm.liveClassName}
                onChange={handleInputChange}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div className="flex gap-4 mt-4">
              <button
                onClick={handleCancelEdit}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateCourse}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesInfo;
