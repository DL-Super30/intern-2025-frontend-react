import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

function EditInfo({ setisEditInfoVisible, course, update }) {
  const { register,handleSubmit,formState: { errors },reset } = useForm();

  useEffect(() => {
    reset({
      name: course.name,
      CourseName: course.CourseName,
      TrainerName: course.TrainerName,
      Modules: course.Modules,
      LiveClass: course.LiveClass
    });
  }, [course, reset]);

  const submit = (data) => {
    const updatedCourse = {
      ...course,
      name: data.name,
      CourseName: data.CourseName,
      TrainerName: data.TrainerName,
      Modules: parseInt(data.Modules),
      LiveClass: data.LiveClass
    };
    update(updatedCourse);
    setisEditInfoVisible(false);

  };

  return (
    <div className="fixed inset-0 bg-gray-400 bg-opacity-60 flex items-center justify-center">

      <form onSubmit={handleSubmit(submit)} className="bg-white px-6 py-10 rounded-lg shadow-xl w-full max-w-lg">

        <h2 className="text-3xl font-bold text-center text-black mb-6">Update Information</h2>

        <div className="mb-4">

          <label className="text-black font-medium">Name</label>
          <input type="text" className="w-full border border-gray-400 mt-2 p-2 rounded-sm"
            {...register("name", { required: "Course name is required" })} />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label className="text-black font-medium">Trainer Name</label>
          <input type="text" className="w-full border border-gray-400 mt-2 p-2 rounded-sm"
            {...register("TrainerName", { required: "Trainer name is required" })} />
          {errors.TrainerName && <p className="text-red-500 text-sm">{errors.TrainerName.message}</p>}
        </div>

        <div className="mb-4">
          <label className="text-black font-medium">Modules</label>
          <input
            type="number"
            {...register("Modules", {
              required: "Modules count is required",
              min: { value: 1, message: "At least 1 module required" }
            })}
            className="w-full border border-gray-400 mt-2 p-2 rounded-sm"
          />
          {errors.Modules && <p className="text-red-500 text-sm">{errors.Modules.message}</p>}
        </div>

        <div className="mb-6">
          <label className="text-black font-medium">Live Class Name</label>
          <input
            type="text"
            {...register("LiveClass")}
            className="w-full border border-gray-400 mt-2 p-2 rounded-sm"
          />
        </div>

        <div className="flex justify-center space-x-4">
          <button type="button" className="border border-red-500 text-red-500 px-4 py-2 rounded-sm hover:bg-red-500 hover:text-white"
            onClick={() => setisEditInfoVisible(false)} >
            Cancel
          </button>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600" >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditInfo;
