import React, { useState } from 'react';

function Navbar({ onTabChange }) {
  const [activeTab, setActiveTab] = useState('info');

  const tabs = [
    { id: 'info', label: 'Courses Info' },
    { id: 'Modules', label: 'Modules' },
    { id: 'project', label: 'Projects' },
    { id: 'resorces', label: 'Resources' },
    { id: 'enoll', label: 'Enrolled' },
    { id: 'resume', label: 'Resume' },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    onTabChange(tabId);
  };

  return (
    <div className="flex-1 px-8 py-6 w-200 ">
      <div className="mb-8">
        <div className="flex space-x-10 mb-4 text-gray-500 text-base font-medium border-b border-black">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`w-20 pb-2 border-b-2 transition-all ${
                activeTab === tab.id
                  ? 'border-black text-black font-semibold'
                  : 'border-transparent hover:border-black hover:text-black'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
