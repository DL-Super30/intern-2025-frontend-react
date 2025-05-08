import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import arrow from '../assets/arrow.png';

const videos = [
  { title: 'React class1', src: 'https://www.youtube.com/watch?v=LX4JUscM9Sk' },
  { title: 'React class2', src: 'https://www.youtube.com/watch?v=s2skans2dP4&pp=ygUYcmFjdC5qcyAxMCBtaW51dGVzIHZpZGVv' },
  { title: 'React class3', src: 'https://www.youtube.com/watch?v=HnXPKtro4SM&pp=ygUYcmFjdC5qcyAxMCBtaW51dGVzIHZpZGVv' },
];

const songs = [
  { title: 'Python class1', src: 'https://www.youtube.com/watch?v=FqP-aGq-zKk&pp=ygURcHl0aG9uIDEwIG1pbnV0ZXPSBwkJfwkBhyohjO8%3D' },
  { title: 'Python class2', src: 'https://www.youtube.com/watch?v=fWjsdhR3z3c&pp=ygURcHl0aG9uIDEwIG1pbnV0ZXPSBwkJfwkBhyohjO8%3D' },
  { title: 'Python class3', src: 'https://www.youtube.com/watch?v=5Jazz4ph4i4&pp=ygURcHl0aG9uIDEwIG1pbnV0ZXM%3D' },
];

const Header = () => (
  <div className="flex items-center h-20 shadow-lg justify-between px-6 py-3 bg-white">
    <img src={logo} alt="Logo" className="h-16 w-auto" />
    <div className="flex items-center space-x-4">
      <h1 className="flex items-center justify-center text-white bg-blue-500 text-2xl font-semibold h-10 w-10 rounded-full border border-black">
        N
      </h1>
    </div>
  </div>
);

const Dropdown = ({ name, items, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="w-[260px] transition-all duration-300">
      <button
        onClick={toggleDropdown}
        type="button"
        className="inline-flex justify-between items-center w-full border border-gray-300 bg-blue-200 py-1 px-3 text-sm font-medium text-blue-500 shadow"
      >
        {name}
        <svg
          className={`ml-2 w-4 h-4 mb-4 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="origin-top-right mt-0 w-full bg-white ring-1 ring-gray-300 ring-opacity-100 rounded">
          <div className="py-0">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => onSelect(item)}
                className={`w-full text-left text-gray-700 px-4 py-2 text-sm hover:bg-gray-100 ${
                  index !== items.length - 1 ? 'border border-gray-200' : ''
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

function Video() {
  const [currentMedia, setCurrentMedia] = useState(null);
  const navigate = useNavigate();
  const handleBack = () => navigate('/dashboard');

  const isYouTube = (url) => url.includes('youtube.com') || url.includes('youtu.be');

  const getYouTubeEmbedUrl = (url) => {
    const videoIdMatch = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
    return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : null;
  };

  return (
    <div className="flex flex-col h-screen font-sans bg-gray-50">
      <Header />

      <div className="flex items-center gap-4 px-6 py-4">
        <img
          src={arrow}
          alt="Back"
          className="h-6 w-4 cursor-pointer hover:scale-105 transition-transform"
          onClick={handleBack}
        />
        <h1 className="text-2xl font-semibold text-gray-800 ms-180">fsreact2301</h1>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-70 bg-white p-4 flex flex-col shadow">
          <Dropdown name="Routing 1" items={videos} onSelect={setCurrentMedia} />
          <Dropdown name="Routing 2" items={songs} onSelect={setCurrentMedia} />
        </div>

        {/* Video Display Area */}
        <div className="flex-1 p-5 flex items-center justify-center bg-white">
          {currentMedia ? (
            isYouTube(currentMedia.src) ? (
              <iframe
                className="w-full h-[90vh] rounded shadow"
                src={getYouTubeEmbedUrl(currentMedia.src)}
                title={currentMedia.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video controls autoPlay className="w-full max-h-[90vh] rounded shadow">
                <source src={currentMedia.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )
          ) : (
            <p className="text-gray-500 text-lg">Select a video to play</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Video;
