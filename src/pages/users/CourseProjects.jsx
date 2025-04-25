import React from "react";

function CourseProjects(){

    return(

        <div>
            <div className="text-xl bg-blue-400 p-2 mt-4 ml-6">
                <h2 className="ml-6">No Projects found. You can add projects by uploading them using the form below.</h2>
            </div>

            <div className="mt-6 ml-6">
                <h2 className="text-xl">Upload new Project</h2>
                <input type="file" name="" id="" className="border border-gray-400 w-64 py-1 mt-2" />
            </div>

            <div className=" mt-4 ml-6">
                <h2 className="bg-blue-500 text-white hover:bg-blue-700 w-24 text-center cursor-pointer p-3">Upload</h2>
            </div>
        </div>
    )
}

export default CourseProjects;