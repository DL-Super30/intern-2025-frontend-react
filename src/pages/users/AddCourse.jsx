import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";

function AddCourse({ CourseCreation }) {

    const [fileName, setFileName] = useState("");
    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
    const fileInputRef = useRef();
    const selectedFile = watch("pic");

    const fileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };

    const submit = (formValues) => {
        console.log("New Course Successfully Created", formValues);

        const newCourse = {
            name: formValues.title,
            trainer: formValues.trainer,
            description: formValues.desc,
            pic: formValues.pic[0],
        };

        CourseCreation(newCourse);

        reset();

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
        setFileName("");
    };



    return (

        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div className="ml-24">
                    <h2 className="text-3xl text-black font-semibold mt-2 ">Create Course</h2>
                    <div>
                        <h2 className="text-xl text-black font-semibold mt-1">Title</h2>
                        <input type="text" name="" id="" className="px-4 py-2 w-[700px] mt-2 border border-blue-500 focus:outline-none focus:border-blue-500 rounded-sm" placeholder="Enter your Title name"
                            {...register('title', {
                                required: 'Field is Mandatory',
                                minLength: { value: 8, message: 'Minimum 8 characters required' },
                                maxLength: { value: 16, message: 'Minimum 16 characters allowed' }
                            })}
                        />
                        <p className="text-red-500 ml-1">{errors['title']?.message}</p>
                    </div>
                    <div>
                        <h2 className="text-xl text-black font-semibold mt-2">Trainer</h2>
                        <input type="text" name="" id="" className="px-4 py-2 w-[700px] mt-2 border border-blue-500 focus:outline-none focus:border-blue-500 rounded-sm" placeholder="Enter your Trainer name"
                            {...register('trainer', {
                                required: 'Field is Mandatory',
                                minLength: { value: 7, message: 'Minimum 7 characters required' },
                                maxLength: { value: 16, message: 'Minimum 16 characters allowed' }
                            })}
                        />
                        <p className="text-red-500 ml-1">{errors['trainer']?.message}</p>
                    </div>
                    <div>
                        <h2 className="mt-2 text-xl text-black font-semibold">Description</h2>
                        <textarea name="" id="" rows={6} cols={8} className="border border-blue-500 w-[700px] focus:outline-none focus:border-blue-500 rounded-sm mt-2 px-4 py-2" placeholder="Enter your Message"
                            {...register('desc', {
                                required: 'Field is Mandatory',
                                minLength: { value: 20, message: 'Minimum 20 characters required' },
                                maxLength: { value: 40, message: 'Minimum 40 characters allowed' }
                            })}
                        >
                        </textarea>
                        <p className="text-red-500 ml-1">{errors['desc']?.message}</p>
                    </div>
                    <div>
                        <h2 className="text-xl text-black font-semibold mt-1">Picture</h2>
                        <div className="mt-2">
                            <div className="flex items-center space-x-4 border border-gray-400 rounded-md p-2">
                                <label
                                    htmlFor="file-upload"
                                    className="bg-gray-700 hover:bg-gray-900 text-white font-medium px-4 py-2 rounded-md cursor-pointer transition duration-200"
                                >
                                    Choose File
                                </label>

                                <input
                                    id="file-upload"
                                    type="file"
                                    className="hidden"
                                    onChange={fileChange}
                                    {...register("pic", {
                                        required: "Please Insert a picture",
                                        validate: {
                                            acceptedFormats: (files) =>
                                                files.length && ["image/png", "image/jpeg", "image/jpg"].includes(files[0]?.type)
                                                    ? true
                                                    : "Only PNG, JPG, or JPEG formats allowed",
                                            fileSize: (files) =>
                                                files.length && files[0]?.size < 2 * 1024 * 1024
                                                    ? true
                                                    : "File size must be less than 2MB",
                                        },
                                    })}
                                />

                                <span className="text-gray-700 text-sm truncate max-w-xs">
                                    {selectedFile?.length > 0 ? selectedFile[0]?.name : "No file chosen"}
                                </span>
                            </div>
                            <p className="text-red-500 ml-1">{errors.pic?.message}</p>
                        </div>
                    </div>

                    <div className="mt-2">
                        <button type="submit" className="border border-gray-200 bg-blue-400 hover:bg-blue-600 hover:text-white text-center cursor-pointer rounded-sm w-[700px] py-2">Create</button>
                    </div>

                </div>
            </form>

        </div>
    )
}

export default AddCourse;