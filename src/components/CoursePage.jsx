import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CoursePage() {
  const [toggle, setToggle] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const navigate = useNavigate();

  const openDropdown = (index) => {
    setToggle(toggle === index ? null : index);
  };

  const ModulesPage = [
    {
      module: "Module 1",
      videos: [
        {
          title: "Vedio 1",
          url: "https://www.youtube.com/embed/ajdRvxDWH4w",
        },
        {
          title: "Vedio 2",
          url: "https://www.youtube.com/embed/Zg4-uSjxosE",
        },
      ],
    },
    {
      module: "Module 2",
      videos: [
        {
          title: "Vedio 3",
          url: "https://www.youtube.com/embed/2ZIpFytCSVc",
        },
        {
          title: "Vedio 4",
          url: "https://www.youtube.com/embed/gFWhbjzowrM",
        },
        {
          title: "Vedio 5",
          url: "https://www.youtube.com/embed/P0XMXqDGttU",
        },
        {
          title: "Vedio 6",
          url: "https://www.youtube.com/embed/3qBXWUpoPHo",
        },
        {
          title: "Vedio 7",
          url: "https://www.youtube.com/embed/tgbNymZ7vqY",
        },
      ],
    },
    {
      module: "Module 3",
      videos: [
        {
          title: "Vedio 8",
          url: "https://www.youtube.com/embed/MkESyVB4oUw",
        },
        {
          title: "Vedio 9",
          url: "https://www.youtube.com/embed/N-O4w6PynGY",
        },
        {
          title: "Vedio 10",
          url: "https://www.youtube.com/embed/CyGodpqcid4",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full bg-white shadow-lg border-b border-gray-200 flex justify-between items-center px-4 py-3 relative">
        <img
          src="src/assets/digital_lync_logo.png"
          alt="Logo"
          className="h-8"
        />
        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
          B
        </div>
      </div>
      <div className="flex items-center justify-center text-gray-600 relative py-3 mb-2 mt-2">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 text-4xl text-black-200 hover:text-black "
        >
          ←
        </button>
        <h1 className="text-3xl font-semibold">fsreact2301</h1>
      </div>
      <div className="flex">
        <div className="w-64 p-4">
          <div className="border rounded-lg shadow-sm overflow-hidden bg-white">
            {ModulesPage.map((module, index) => (
              <div
                key={index}
                className="mb-2 border border-gray-200 rounded-md overflow-hidden"
              >
                <div
                  className="flex items-center justify-between text-white text-sm font-semibold px-3 py-2 cursor-pointer bg-blue-500"
                  onClick={() => openDropdown(index)}
                >
                  <div className="flex items-center gap-2">
                    <span className="bg-white text-blue-500 rounded-full flex items-center justify-center w-5 h-5 text-xs font-bold">
                      {index + 1}
                    </span>
                    <span>{module.module}</span>
                  </div>
                  <span>{toggle === index ? "▲" : "▼"}</span>
                </div>

                {toggle === index && (
                  <div className="bg-gray-50">
                    {module.videos.map((video, vIdx) => (
                      <div
                        key={vIdx}
                        className="px-4 py-1 text-xs text-gray-800 hover:text-blue-600 border-t border-gray-200 cursor-pointer"
                        onClick={() => setSelectedVideo(video.url)}
                      >
                        {video.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 px-6 py-4">
          <div className="w-full px-4">
            <div className="border-2 border-gray-300 rounded-md">
              {selectedVideo ? (
                <iframe
                  width="100%"
                  height="420"
                  src={selectedVideo}
                  title="Selected Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="flex justify-center items-center text-gray-500 text-lg h-[420px]">
                  Select a video to play
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursePage;
