import React, { useState } from 'react';
import CoursesInfo from './CoursesInfo';
import Projects from './Projects';
import Resources from './Resources';
import Resume from './Resume';
import Modules from './Modules';
import Enrolled from './Enrolled';
import Users from './Users';

const CreateCourseForm = ({ onCreateCourse }) => {
  const [title, setTitle] = useState('');
  const [trainer, setTrainer] = useState('');
  const [description, setDescription] = useState('');
  const [courseImage, setCourseImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setCourseImage(file);
  };

  const handleSubmit = () => {
    if (!title || !trainer || !description) {
      alert('Please fill all the fields');
      return;
    }

    const newCourse = {
      name: title,
      trainer,
      description,
      modules: 0,
      liveClassName: '',
      image: courseImage,
    };

    onCreateCourse(title, newCourse);
  };

  return (
    <div className="max-w-xl w-full">
      <h2 className="text-lg font-semibold mb-4">Create Course</h2>

      <div className="space-y-2">
        <div>
          <label className="block text-sm font-semibold mb-1">Title</label>
          <input
            type="text"
            placeholder="Enter course title"
            className="w-full border border-purple-600 px-3 py-1 text-sm"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Trainer</label>
          <input
            type="text"
            placeholder="Enter trainer name"
            className="w-full border border-purple-600 px-3 py-1 text-sm"
            value={trainer}
            onChange={(e) => setTrainer(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Description</label>
          <textarea
            placeholder="Enter course description"
            className="w-full border border-purple-600 px-3 py-2 text-sm"
            style={{ minHeight: '220px' }}
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Picture</label>
          <div className="w-full border border-purple-600 px-3 py-1 flex items-center gap-3 text-sm shadow-sm">
            <label className="bg-gray-300 text-sm px-2 cursor-pointer border h-7 flex items-center">
              Choose File
              <input type="file" onChange={handleFileChange} className="hidden" />
            </label>
            <span className="text-xs text-gray-500 truncate max-w-[150px]">
              {courseImage ? courseImage.name : 'No file chosen'}
            </span>
          </div>
        </div>
        <button
          className="w-full bg-purple-700 text-white px-6 py-2 mt-2 text-sm"
          onClick={handleSubmit}
        >
          Create
        </button>
      </div>
    </div>
  );
};

const AdminPortal = () => {
  const [section, setSection] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeTab, setActiveTab] = useState('Courses Info');
  const [showCreateForm, setShowCreateForm] = useState(false);

  const [courseDetails, setCourseDetails] = useState({
    fsreact2301: { name: 'fsreact2301', trainer: 'Amit', modules: 3, liveClassName: 'React Basics' },
    fsreact2304: { name: 'fsreact2304', trainer: 'Sneha', modules: 4, liveClassName: 'React Pro' },
    fsreact2305: { name: 'fsreact2305', trainer: 'Ravi', modules: 5, liveClassName: 'Advanced React' },
    fspython2301: { name: 'fspython2301', trainer: 'Priya', modules: 6, liveClassName: 'Python Bootcamp' },
    powerbi2304: { name: 'powerbi2304', trainer: 'Nikita', modules: 2, liveClassName: 'PowerBI Essentials' },
    awsdevops2307: { name: 'awsdevops2307', trainer: 'Deepak', modules: 3, liveClassName: 'AWS DevOps Intro' },
    awsdevops2308: { name: 'awsdevops2308', trainer: 'Kiran', modules: 4, liveClassName: 'AWS Advanced' },
    azuredevops2308: { name: 'azuredevops2308', trainer: 'Anita', modules: 4, liveClassName: 'Azure Tools' },
    azuredevops2301: { name: 'azuredevops2301', trainer: 'Vikram', modules: 2, liveClassName: 'Azure Basics' },
    azuredevops2303: { name: 'azuredevops2303', trainer: 'Pooja', modules: 3, liveClassName: 'DevOps Pipeline' },
    fscorejava2302: { name: 'fscorejava2302', trainer: 'Rahul', modules: 4, liveClassName: 'Java Intro' },
    fscorejava2307: { name: 'fscorejava2307', trainer: 'Neha', modules: 5, liveClassName: 'Java Advanced' },
  });

  const tabs = ['Courses Info', 'Modules', 'Projects', 'Resources', 'Enrolled', 'Resume'];

  const handleCreateCourse = (id, newCourseData) => {
    setCourseDetails((prev) => ({
      ...prev,
      [id]: newCourseData,
    }));
    setSelectedCourse(id);
    setShowCreateForm(false);
    setSection('courses');
  };

  const courses = Object.keys(courseDetails);

  return (
    <div className="flex flex-col h-screen text-gray-800 bg-white font-sans overflow-hidden">
      <div className="flex items-center justify-between bg-white border-b border-gray-300 px-6 py-2 h-[60px]">
        <img src="src/assets/logo.png" alt="Logo" className="h-10" />
        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold cursor-pointer">
          B
        </div>
      </div>
      <div className="flex overflow-hidden">
        <div className="w-[200px] border-r border-gray-300">
          <div className="border-b border-gray-300 flex flex-col">
            <div className="flex justify-between items-center">
              <span
                className="font-semibold border-gray-100 text-gray-500 text-m cursor-pointer ml-4"
                onClick={() => {
                  setSection('courses');
                  setShowCreateForm(false);
                  setSelectedCourse(null);
                }}
              >
                Courses
              </span>
              <button
                className="font-semibold text-m text-gray-500 cursor-pointer bg-black text-white w-1/2 py-2 mx-auto block mr-0"
                onClick={() => {
                  setShowCreateForm(true);
                }}
              >
                +ADD
              </button>
            </div>
          </div>
          <div
            className={`px-4 py-2 text-m text-gray-500 font-semibold cursor-pointer ${section === 'users' ? 'bg-gray-100 border-none' : 'border-b border-gray-200'}`}
            onClick={() => {
              setSection('users');
              setShowCreateForm(false);
              setSelectedCourse(null);
            }}
          >
            Users
          </div>
        </div>
        <div className="flex-1 flex overflow-hidden">
          {section === 'courses' && (
            <div className="w-[240px] border-r border-gray-200 bg-white overflow-y-auto">
              {section === 'courses' && (
                <div className="px-4 py-2 border border-gray-200 text-m text-gray-500 font-semibold cursor-pointer">
                  <input
                    type="text"
                    placeholder="Search Courses"
                    className="w-full text-sm bg-white focus:outline-none"
                  />
                </div>
              )}
              {courses.map((course, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedCourse(course);
                    setActiveTab('Courses Info');
                    setShowCreateForm(false);
                  }}
                  className={`px-4 py-2 border border-gray-200 text-m text-gray-500 font-semibold cursor-pointer hover:bg-gray-100 ${selectedCourse === course && !showCreateForm ? 'font-bold bg-gray-100' : ''}`}
                >
                  {course}
                </div>
              ))}
            </div>
          )}
          <div className={`flex-1 px-8 py-6 overflow-auto w-full ${section === 'courses' ? 'shadow-[4px_0_6px_-4px_rgba(0,0,0,0.1)]' : ''}`}>
            {section === 'courses' && showCreateForm && (
              <CreateCourseForm onCreateCourse={handleCreateCourse} />
            )}
            {section === 'courses' && selectedCourse && !showCreateForm && (
              <>
                <div className="mb-8">
                  <div className="flex space-x-10 mb-4 text-gray-500 text-base font-medium border-b border-black">
                    {tabs.map((tab, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-2 border-b-2 transition-all ${activeTab === tab
                          ? 'border-black text-black font-semibold'
                          : 'border-transparent hover:border-black hover:text-black'
                          }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
                {activeTab === 'Courses Info' && (
                  <CoursesInfo key={selectedCourse} courseInfo={courseDetails[selectedCourse]} />
                )}
                {activeTab === 'Modules' && <Modules />}
                {activeTab === 'Projects' && <Projects />}
                {activeTab === 'Resources' && <Resources />}
                {activeTab === 'Enrolled' && <Enrolled />}
                {activeTab === 'Resume' && <Resume />}
              </>
            )}
            {section === 'users' && <Users />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;
