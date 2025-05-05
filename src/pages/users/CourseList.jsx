import React, { useState } from "react";
import UserNavbar from "./UserNavbar";
import CourseModules from "./CourseModules";
import CourseProjects from "./CourseProjects";
import CourseResources from "./CourseResources";
import CourseEnrolled from "./CourseEnrolled";
import Resume from "./Resume";
import EditInfo from "./EditInfo";
import AddCourse from "./AddCourse";
import Users from "./Users"

function CourseList() {

    const [selectedCourse, setSelectedCourse] = useState(null);
    const [activeTab, setActivetab] = useState('info');
    const [isEditInfoVisible, setisEditInfoVisible] = useState(false);
    const [showAddForm, setShowAddForm] = useState(false);
    const [UsersData, setUsersData] = useState(false);
    const [showCourses, setShowCourses] = useState('');
    const [courseData, setCourseData] = useState('');

    const [courseList, setCourseList] = useState([
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
            CourseName: "azuredevops2308",
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
    ]);

    const courseVideos = {
        fsreact2304: [
            { name: 'React Intro', Link: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8' },
            { name: 'React Hooks', Link: 'https://www.youtube.com/watch?v=f687hBjwFcM' },
            { name: '', Link: '' }
        ],
        pythonfullstack: [
            { name: 'Python', Link: ' https://www.youtube.com/watch?v=rfscVS0vtbw' },
            { name: 'Django - Python Framework', Link: ' https://www.youtube.com/watch?v=F5mRW0jo-U4' },
            { name: '', Link: '' }
        ],
        javafullstack: [
            { name: 'Java', Link: ' https://www.youtube.com/watch?v=RRubcjpTkks' },
            { name: 'Sprng Boot - JavaFullStack', Link: ' https://www.youtube.com/watch?v=Gx4iBLKLVHk' },
            { name: '', Link: '' },
        ],
        mernstack: [
            { name: 'MERN Stack', Link: ' https://www.youtube.com/watch?v=4yqu8YF29cU' },
            { name: 'MERN FullStack', Link: ' https://www.youtube.com/watch?v=1nVUfZg2dSA' },
            { name: '', Link: '' },
        ],
        fullstack: [
            { name: 'FullStack Web Development', Link: 'https://www.youtube.com/watch?v=4yqu8YF29cU' },
            { name: 'FullStack Developer RoadMap', Link: 'https://www.youtube.com/watch?v=nu_pCVPKzTk' },
            { name: '', Link: '' }
        ],
        fspython2301: [
            { name: 'Python Full Stack Web Development', Link: 'https://www.youtube.com/watch?v=fgTGADljAeg' },
            { name: 'Python and Django', Link: 'https://www.youtube.com/watch?v=JxzZxdht-XY' },
            { name: '', Link: '' },
        ],
        powerbi2304: [
            { name: 'Poweri in 4 hours', Link: 'https://www.youtube.com/watch?v=AGrl-H87pRU' },
            { name: 'PowerBi Tutorial For Brginners', Link: 'https://www.youtube.com/watch?v=LKzGQeRL-qo' },
            { name: '', Link: '' }
        ],
        awsdevops2307: [
            { name: 'AWS Devops', Link: 'https://www.youtube.com/watch?v=8lI1pP3nC7E' },
            { name: 'AWS and Devops Training', Link: 'https://www.youtube.com/watch?v=1npzK96IczE' },
            { name: '', Link: '' }
        ],
        azuredevops2308: [
            { name: 'Azure Devops', Link: 'https://www.youtube.com/watch?v=Gjmz9E5Nn1Y' },
            { name: 'Devops on Azure', Link: 'https://www.youtube.com/watch?v=RR5VvGv7wCk' },
            { name: '', Link: '' }
        ],
        salesforce2401: [
            { name: 'Salesforce Training for Beginners', Link: 'https://www.youtube.com/watch?v=3HHoKTjD-U4' },
            { name: 'Salesforce Training Videos', Link: 'https://www.youtube.com/watch?v=yiUWXVZ69vU' },
            { name: '', Link: '' }
        ],
        fscorejava2302: [
            { name: 'Java Full Stack Development', Link: 'https://www.youtube.com/watch?v=IYvD9oBCuJI' },
            { name: 'Full Stack Java in 8 Hours', Link: '' },
            { name: '', Link: '' }
        ]
    };

    const addCourse = (newCourse) => {
        setCourseList((prevList) => {
            const updatedList = [...prevList, newCourse];
            localStorage.setItem("courses", JSON.stringify(updatedList));
            alert("Course added successfully!");
            return updatedList;
        });
    };


    const handleUpdate = (updatedCourse) => {
        const updatedList = courseList.map((course) =>
            course.name === updatedCourse.name ? updatedCourse : course
        );
        setCourseList(updatedList);
        setSelectedCourse(updatedCourse);
        setisEditInfoVisible(false);
    };


    return (

        <div className="min-h-screen">
            <UserNavbar />
            <div className="flex">
                <div className="flex space-x-4 border-t border-slate-400 w-52">
                    <div className="flex w-full text-white">
                        <div className={`text-xl font-semibold cursor-pointer hover:bg-blue-500 hover:text-white px-4 py-2 w-[65%] ${activeTab === 'courses' ? 'bg-blue-600 text-white' : 'text-black'}`}
                            onClick={() => { setSelectedCourse(null); setShowAddForm(false); setUsersData(false); setShowCourses(true); setActivetab('courses'); }} >
                            Courses
                        </div>

                        <span className={`text-xl font-semibold py-2 text-center cursor-pointer w-[35%] ${activeTab === 'add' ? 'bg-black text-white' : 'bg-slate-700 hover:bg-slate-800 text-white'}`}
                            onClick={() => {
                                if (activeTab === 'courses') { setSelectedCourse(null); setShowCourses(true); setShowAddForm(true); setUsersData(false); setActivetab('add');}}} >
                            +ADD
                        </span>
                    </div>

                </div>
                <input type="text" name="" id="" className="border border-gray-400 p-1 w-64 text-xl px-15 focus:outline-none focus-within:border-blue-600" placeholder="Search Courses" />
            </div>

            <div className="flex">
                <div>
                    <h2 className={`text-xl font-semibold border border-slate-400 px-4 py-2 w-52  cursor-pointer ${activeTab === 'users' ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'}`} onClick={() => { setSelectedCourse(null); setUsersData(true); setShowAddForm(false); setShowCourses(false); setActivetab('users'); }} >
                        Users
                    </h2>

                </div>

                {showCourses && (
                    <div>
                        {[...courseList].map((course) => (
                            <div key={course.name} className={`text-lg border border-slate-400 text-gray-700 hover:bg-blue-500 hover:text-white p-2 w-64 text-center cursor-pointer ${selectedCourse?.name === course.name ? 'bg-blue-500 font-semibold text-white' : ''}`}
                                onClick={() => { setSelectedCourse(course); setShowAddForm(false); setActivetab('info'); setUsersData(false); setCourseData(courseVideos[course.name] || []); }} >
                                {course.name}
                            </div>
                        ))}
                    </div>
                )}

                {showAddForm && (
                    <div>
                        <AddCourse CourseCreation={addCourse} />
                    </div>
                )}

                {UsersData && (
                    <div>
                        < Users />
                    </div>
                )}

                {selectedCourse && (
                    <div className="p-10 pt-6">
                        <div className="flex space-x-10 border-b border-gray-300 ml-2">
                            <button className={`text-xl  font-semibold pb-10 cursor-pointer ${activeTab === 'info' ? 'text-black border-b-2' : 'text-gray-600'}`} onClick={() => setActivetab('info')}>Courses <br /> Info</button>
                            <button className={`text-xl font-semibold relative pb-14 cursor-pointer ${activeTab === 'modules' ? 'text-black border-b-2' : 'text-gray-600'}`} onClick={() => setActivetab('modules')}>Modules</button>
                            <button className={`text-xl font-semibold relative pb-14 cursor-pointer ${activeTab === 'projects' ? 'text-black border-b-2' : 'text-gray-600'}`} onClick={() => setActivetab('projects')}>Projects</button>
                            <button className={`text-xl font-semibold relative pb-14 cursor-pointer ${activeTab === 'resources' ? 'text-black border-b-2' : 'text-gray-600'}`} onClick={() => setActivetab('resources')}>Resources</button>
                            <button className={`text-xl font-semibold relative pb-14 cursor-pointer ${activeTab === 'enrolled' ? 'text-black border-b-2' : 'text-gray-600'}`} onClick={() => setActivetab('enrolled')}>Enrolled</button>
                            <button className={`text-xl font-semibold relative pb-14 cursor-pointer ${activeTab === 'resume' ? 'text-black border-b-2' : 'text-gray-600'}`} onClick={() => setActivetab('resume')}>Resume</button>
                        </div>

                        {activeTab === 'info' && (
                            <>
                                <p className="ml-2 text-xl mt-4"><span className="font-semibold">Name:</span> <span className="ml-2">{selectedCourse.CourseName}</span></p>
                                <p className="ml-2 mt-3 text-xl"><span className="font-semibold">Trainer Name:</span> <span className="ml-2">{selectedCourse.TrainerName}</span></p>
                                <p className="ml-2 mt-3 text-xl"><span className="font-semibold">Modules:</span> <span className="ml-2">{selectedCourse.Modules}</span></p>
                                <p className="ml-2 mt-3 text-xl"><span className="font-semibold">Live Class Name:</span> <span className="ml-2">{selectedCourse.LiveClass}</span></p>

                                <div className="flex space-x-4">
                                    <input type="text" className="border border-black w-76 px-4 py-2 mt-8 ml-2" placeholder="Enter Live Name Class Link" />
                                    <button className="bg-blue-500 text-white hover:bg-blue-700 mt-8 px-4 py-4 font-normal cursor-pointer">Save Live Classes Name Link</button>
                                </div>

                                <div>
                                    <button className="bg-yellow-500 text-black hover:bg-yellow-600 p-3 mt-4 ml-2 font-bold cursor-pointer">
                                        <i className="fas fa-box-archive ml-1"></i><span className="ml-2">Archive</span>
                                    </button>
                                    <button className="flex" onClick={() => setisEditInfoVisible(true)}>
                                        <h2 className="mt-4 ml-3 text-sm hover:text-gray-900 cursor-pointer"><span>Edit</span><i className="fas fa-pen-to-square ml-2 font-light"></i></h2>
                                    </button>
                                </div>
                            </>
                        )}

                        {activeTab === 'modules' && (

                            <div>
                                <CourseModules CourseName={selectedCourse.name} Videos={courseData} />
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
                                <CourseEnrolled CourseName={selectedCourse.name} />
                            </div>
                        )}

                        {activeTab === 'resume' && (
                            <div>
                                <Resume />
                            </div>
                        )}

                        {activeTab === 'add-course' && (
                            <div>
                                <AddCourse CourseCreation={addCourse} />
                            </div>
                        )}
                    </div>
                )}
            </div>

            {isEditInfoVisible && <EditInfo setisEditInfoVisible={setisEditInfoVisible} course={selectedCourse} update={handleUpdate}
            />}
        </div>
    )
}

export default CourseList;