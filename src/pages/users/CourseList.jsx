import React, { useState } from "react";
import UserNavbar from "./UserNavbar";
import { Link } from "react-router-dom";
import CourseModules from "./CourseModules";
import CourseProjects from "./CourseProjects";
import CourseResources from "./CourseResources";
import CourseEnrolled from "./CourseEnrolled";
import Resume from "./Resume";

function CourseList() {

    const [selectedCourse, setSelectedCourse] = useState(null);
    const [activeTab, setActivetab] = useState('info');

    const courses = [
        {
            name: "fsreact2304",
            CourseName: "fsreact2304",
            TrainerName: "deepak",
            Modules: 2,
            LiveClass: "NA"
        },
        {
            name: "pythonfullstack",
            CourseName: "pythonfullstack",
            TrainerName: "Shoubik",
            Modules: 5,
            LiveClass: "NA"

        },
        {
            name: "javafullstack",
            CourseName: "javafullstack",
            TrainerName: "Shoubik",
            Modules: 6,
            LiveClass: "NA"

        },
        {
            name: "mernstack",
            CourseName: "mernstack",
            TrainerName: "Manideep",
            Modules: 4,
            LiveClass: "NA"

        },
        {
            name: "fullstack",
            CourseName: "fullstack",
            TrainerName: "Arjun",
            Modules: 6,
            LiveClass: "NA"
        },
        {
            name: "fspython2301",
            CourseName: "fspython2301",
            TrainerName: "Maheshwaran",
            Modules: 4,
            LiveClass: "NA"
        },
        {
            name: "powerbi2304",
            CourseName: "powerbi2304",
            TrainerName: "Maheshwaran",
            Modules: 5,
            LiveClass: "NA"
        },
        {
            name: "awsdevops2307",
            CourseName: "awsdevops2307",
            TrainerName: "Murali",
            Modules: 6,
            LiveClass: "NA"
        },
        {
            name: "azuredevops2308",
            CourseName: "awsdevops2307",
            TrainerName: "Murali",
            Modules: 4,
            LiveClass: "NA"
        },
        {
            name: "salesforce2401",
            CourseName: "salesforce2401",
            TrainerName: "Deepak",
            Modules: 4,
            LiveClass: "NA"
        },
        {
            name: "fscorejava2302",
            CourseName: "fscorejava2302",
            TrainerName: "Shoubik",
            Modules: 4,
            LiveClass: "NA"
        }
    ]

    return (

        <div className="min-h-screen">
            <UserNavbar />
            <div className="flex">
                <h2 className="text-2xl font-semibold border-t border-slate-400 p-2 w-52">
                    <span>Courses</span>
                    <Link to="">
                        <span className="bg-slate-700 text-white font-normal ml-6 px-3 py-2">+ADD</span>
                    </Link>
                </h2>
                <input type="text" name="" id="" className="border border-gray-400 p-1 w-64 text-2xl px-4 focus:outline-none focus-within:border-blue-600" placeholder="Search Courses" />
            </div>

            <div className="flex">
                <div>
                    <h2 className="text-2xl font-normal border border-slate-400 p-2 w-52 cursor-pointer">Users</h2>
                </div>
                <div>
                    {courses.map((course) => (
                        <div key={course.name} className={`text-2xl font-normal border border-slate-400 text-gray-700 hover:bg-blue-500 hover:text-white p-2 w-64 text-center cursor-pointer ${selectedCourse?.name === course.name ? 'bg-blue-500 text-white' : ''}`} onClick={() => setSelectedCourse(course)}>{course.name}</div>
                    ))}
                </div>

                {selectedCourse && (
                    <div className="p-10 pt-6">
                        <div className="flex space-x-14 border-b border-gray-300 ml-2">
                            <button className={`text-2xl  font-semibold pb-10 cursor-pointer ${activeTab === 'info' ? 'text-black border-b-2' : 'text-gray-600'}`} onClick={() => setActivetab('info')}>Courses <br /> Info</button>
                            <button className={`text-2xl font-semibold relative pb-14 cursor-pointer ${activeTab === 'modules' ? 'text-black border-b-2' : 'text-gray-600'}`} onClick={() => setActivetab('modules')}>Modules</button>
                            <button className={`text-2xl font-semibold relative pb-14 cursor-pointer ${activeTab === 'projects' ? 'text-black border-b-2' : 'text-gray-600'}`} onClick={() => setActivetab('projects')}>Projects</button>
                            <button className={`text-2xl font-semibold relative pb-14 cursor-pointer ${activeTab === 'resources' ? 'text-black border-b-2' : 'text-gray-600'}`} onClick={() => setActivetab('resources')}>Resources</button>
                            <button className={`text-2xl font-semibold relative pb-14 cursor-pointer ${activeTab === 'enrolled' ? 'text-black border-b-2' : 'text-gray-600'}`} onClick={() => setActivetab('enrolled')}>Enrolled</button>
                            <button className={`text-2xl font-semibold relative pb-14 cursor-pointer ${activeTab === 'resume' ? 'text-black border-b-2' : 'text-gray-600'}`} onClick={() => setActivetab('resume')}>Resume</button>
                        </div>

                        {activeTab === "info" && (
                            <p className="ml-2 text-xl mt-4"> <span className="text-xl font-semibold">Name:</span><span className="ml-2">{selectedCourse.CourseName}</span></p>
                        )}

                        {activeTab === "info" && (
                            <p className="ml-2 mt-3 text-xl"> <span className="text-xl font-semibold"> Trainer Name:</span><span className="ml-2">{selectedCourse.TrainerName}</span></p>
                        )}

                        {activeTab === "info" && (
                            <p className="ml-2 mt-3 text-xl"> <span className="text-xl font-semibold"> Modules:</span><span className="ml-2">{selectedCourse.Modules}</span></p>
                        )}

                        {activeTab === "info" && (
                            <p className="ml-2 mt-3 text-xl"> <span className="text-xl font-semibold"> Live Class Name:</span><span className="ml-2">{selectedCourse.LiveClass}</span></p>
                        )}

                        {activeTab === "info" && (

                            <div className="flex space-x-4">
                                <input type="text" name="" id="" className="border border-black w-76 px-4 py-2 mt-8 ml-2" placeholder="Enter Live Name Class Link" />
                                <button className="bg-blue-500 text-white hover:bg-blue-700  text-center mt-8 px-4 py-4 font-normal cursor-pointer">Save Live Classes Name Link</button>

                            </div>
                        )}


                        {activeTab === 'info' && (

                            <div>
                                <button className="bg-yellow-500 text-black hover:bg-yellow-600 p-3 text-center mt-4 ml-2 font-bold cursor-pointer">
                                    <i className="fas fa-box-archive ml-1"></i>
                                    <span className="ml-2">Archive</span>
                                </button>

                                <h2 className="mt-4 ml-3 text-sm cursor-pointer"><span>Edit</span><i className="fas fa-pen-to-square ml-2 font-light"></i></h2>

                            </div>
                        )}

                        {activeTab === 'modules' && (

                            <div>
                                <CourseModules />
                            </div>
                        )}

                        {activeTab === 'projects' && (
                            <div>
                                <CourseProjects />
                            </div>
                        )}

                        {activeTab === 'resources' && (
                            <div>
                                <CourseResources />
                            </div>
                        )}

                        {activeTab === 'enrolled' && (
                            <div>
                                <CourseEnrolled />
                            </div>  
                        )}

                        {activeTab === 'resume' && (
                            <div>
                                <Resume />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default CourseList;