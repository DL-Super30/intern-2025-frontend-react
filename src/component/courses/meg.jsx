import React, { useState, useEffect } from "react";

const Edit = ({ initialData, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    trainer: "",
    modules: "",
    liveClassName: ""
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || "",
        trainer: initialData.trainer || "",
        modules: String(initialData.modules || ""), 
        liveClassName: initialData.liveClassName || ""
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    
    if (!formData.name.trim()) {
      alert("Course name is required.");
      return;
    }
    onSave(formData);
  };
  const Edit = ({ initialData, onSave, onCancel }) => {
   
  };
  

  

  return (
    <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
      <div>
        <label className="block text-sm font-medium">Course Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded px-2 py-1 w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Trainer</label>
        <input
          name="trainer"
          value={formData.trainer}
          onChange={handleChange}
          className="border rounded px-2 py-1 w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Modules</label>
        <input
          name="modules"
          value={formData.modules}
          onChange={handleChange}
          className="border rounded px-2 py-1 w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Live Class Name</label>
        <input
          name="liveClassName"
          value={formData.liveClassName}
          onChange={handleChange}
          className="border rounded px-2 py-1 w-full"
        />
      </div>

      <div className="flex gap-2 mt-4">
        <button
          onClick={handleSave}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Save
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Edit;
