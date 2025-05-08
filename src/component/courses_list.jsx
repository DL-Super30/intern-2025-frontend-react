import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import Navbar from './Navbar/Navbar';
import Info from './courses/Courses_info';
import Module from './courses/Module';
import ProjectUpload from './courses/project';
import UserManagement from './courses/enrolled';
import Resource from './courses/resources';
import Resume from './courses/Resume';
import CreateCourseForm from './courses/coursesform';
import UserImport from './courses/UserImport';

const courseDetails = {
  fsreact2301: { name: "fsreact2301", trainer: "Amit", modules: 3, liveClassName: "React Basics" },
  fsreact2304: { name: "fsreact2304", trainer: "Sneha", modules: 4, liveClassName: "React Pro" },
  fsreact2305: { name: "fsreact2305", trainer: "Ravi", modules: 5, liveClassName: "Advanced React" },
  fspython2301: { name: "fspython2301", trainer: "Priya", modules: 6, liveClassName: "Python Bootcamp" },
  powerbi2304: { name: "powerbi2304", trainer: "Nikita", modules: 2, liveClassName: "PowerBI Essentials" },
  awsdevops2307: { name: "awsdevops2307", trainer: "Deepak", modules: 3, liveClassName: "AWS DevOps Intro" },
  awsdevops2308: { name: "awsdevops2308", trainer: "Kiran", modules: 4, liveClassName: "AWS Advanced" },
  azuredevops2308: { name: "azuredevops2308", trainer: "Anita", modules: 4, liveClassName: "Azure Tools" },
  azuredevops2301: { name: "azuredevops2301", trainer: "Vikram", modules: 3, liveClassName: "Azure Basics" },
  azuredevops2303: { name: "azuredevops2303", trainer: "Pooja", modules: 3, liveClassName: "DevOps Pipeline" },
  fscorejava2302: { name: "fscorejava2302", trainer: "Rahul", modules: 4, liveClassName: "Java Intro" },
  fscorejava2307: { name: "fscorejava2307", trainer: "Neha", modules: 5, liveClassName: "Java Advanced" },
};

const Courses_list = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeTab, setActiveTab] = useState('');
  const [showCourseList, setShowCourseList] = useState(false);
  const [courseData, setCourseData] = useState(courseDetails);
 // hidden by default

  const filteredCourses = Object.keys(courseDetails).filter(course =>
    course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-screen">
      {/* Header */}
      <div className="flex items-center h-18 shadow-sm justify-between px-6 fixed w-full z-10 top-0 left-0 bg-white">
        <img src={logo} alt="Logo" className="h-16 w-auto mt-2" />
        <div className="flex items-center mt-10 ms-60">
          <h1
            onClick={() => navigate('/profile')}
            className="flex items-center justify-center text-white bg-blue-500 text-2xl font-semibold h-10 w-10 rounded-full border border-black mb-5 me-5 cursor-pointer"
          >
            N
          </h1>
        </div>
      </div>

      {/* Main Layout */}
      <div className="pt-14">
        <div className="grid grid-cols-7 gap-4 p-6">
          {/* Sidebar */}
          <div className="col-span-2 flex">
            {/* Left Buttons */}
            <div className="flex flex-col w-1/2">
              <div className="flex">
                <button
                  onClick={() => {
                    setShowCourseList(true); 
                    setSelectedCourse(null);
                    setActiveTab('');
                  }}
                  className="border border-gray-300 h-10 w-1/2 flex items-center justify-center"
                >
                  Courses
                </button>
                <button
                  onClick={() => {
                    setShowCourseList(true); 
                    setSelectedCourse('create');
                    setActiveTab('create');
                  }}
                  className="bg-gray-500 text-white h-10 w-1/2 flex items-center justify-center"
                >
                  + Add
                </button>
              </div>
              <button
                onClick={() =>{
                  setSelectedCourse('user')
                  setActiveTab('user')
                  setShowCourseList(false);
                }}
                className="border border-gray-300 h-10 w-full flex items-center justify-center"
              >
                User
              </button>
            </div>

            {/* Course List - Only if shown */}
            {showCourseList && (
              <div className="w-1/2 border border-gray-200 bg-white">
                <div className="p-2 w-50 border-b border-gray-200">
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                  />
                </div>
                {filteredCourses.map((courseKey, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setSelectedCourse(courseKey);
                      setActiveTab('info');
                    }}
                    className="border-b border-gray-200 last:border-b-0 px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                  >
                    {courseKey}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Main Content Area */}
          <div className="col-span-3 p-4 bg-white rounded-lg mt-5">
            {!selectedCourse && (
              <div className="text-center text-gray-400 mt-10">
               {/* Add any default content here if needed */}
              </div>
            )}

            {selectedCourse && selectedCourse !== 'create' && selectedCourse !== 'user' && (
              <>
                <Navbar onTabChange={setActiveTab} />
                {activeTab === 'info' && <Info course={courseDetails[selectedCourse]} />}
                {activeTab === 'Modules' && <Module />}
                {activeTab === 'project' && <ProjectUpload />}
                {activeTab === 'enoll' && <UserManagement />}
                {activeTab === 'resorces' && <Resource />}
                {activeTab === 'resume' && <Resume />}
              </>
            )}

            {selectedCourse === 'create' && <CreateCourseForm />}
            {selectedCourse === 'user' && <UserImport />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses_list;
