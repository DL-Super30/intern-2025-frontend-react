import React, { useState } from 'react';
import Info from './courses/Courses_info';
import Projects from './courses/project';
import Resources from './courses/resources';
import Resume from './courses/Resume';

const AdminPortal = () => {
    const [selectedCourse, setSelectedCourse] = useState('fsreact2304');
    const [activeTab, setActiveTab] = useState('Info');

    const courseInfo = {
        name: 'fsbasics2303',
        trainer: 'deepak',
        modules: 2,
        liveClassName: 'NA',
    };

    const courses = [
        'fsreact2301', 'fsreact2304', 'fsreact2305', 'fspython2301', 'powerbi2304',
        'awsdevops2307', 'awsdevops2308', 'azuredevops2308', 'azuredevops2301',
        'azuredevops2303', 'fscorejava2302', 'fscorejava2307',
    ];

    const tabs = ['Info', 'Modules', 'Projects', 'Resources', 'Enrolled', 'Resume'];

    return (
        <div className="flex flex-col h-screen text-gray-800 bg-white font-sans">
            {/* Top Navbar */}
            <div className="flex items-center justify-between bg-white border-b border-gray-300 px-6 py-2 h-[60px]">
                <img src="src/assets/logo.png" alt="Logo" className="h-10" />
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold cursor-pointer">
                    B
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-1">
                {/* Sidebar */}
                <div className="w-[200px] border-r border-gray-300">
                    <div className="border-b border-gray-300 p-3 flex justify-between items-center">
                        <span className="font-semibold text-sm">Courses</span>
                        <button className="text-xs bg-gray-800 text-white px-2 py-1 rounded">+ADD</button>
                    </div>
                    <div className="px-4 py-2 border-b border-gray-300 text-sm font-semibold cursor-pointer hover:bg-gray-100">
                        Users
                    </div>
                </div>
                <div className="flex-1 flex">

                    <div className="w-[240px] border-r border-gray-200 bg-white">
                        <div className="overflow-auto max-h-[calc(100vh-60px)]">
                            <div className="px-4 py-2 text-sm border-b border-gray-200">
                                <input
                                    type="text"
                                    placeholder="Search Courses"
                                    className="w-full text-sm bg-white focus:outline-none"
                                />
                            </div>

                            {courses.map((course, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedCourse(course)}
                                    className={`px-4 py-2 text-sm border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${selectedCourse === course ? 'font-bold bg-gray-100' : ''
                                        }`}
                                >
                                    {course}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 px-8 py-6 overflow-auto w-full">
                        <div className="mb-8">
                            <div className="flex space-x-10 mb-4 text-gray-500 text-base font-medium border-b border-black">
                                {tabs.map((tab, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveTab(tab)}
                                        className={`pb-2 border-b-2 transition-all ${activeTab === tab
                                                ? 'border-black text-black font-semibold'
                                                : 'border-transparent hover:border-black hover:text-black'
                                            }`} >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Tab Content */}
                        {activeTab === 'Info' && <Info Info={Info} />}
                        {activeTab === 'Projects' && <Projects />}
                        {activeTab === 'Resources' && <Resources />}
                        {activeTab === 'Resume' && <Resume />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPortal;