import React from "react";
import { useState } from "react";

function CoursePage() {

    const [toggle, setToggle] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState('');

    const openDropdown = (index) => {
        setToggle(toggle === index ? null : index);
    }

    const Videos = [
        {
            id: "vid1",
            title1: "JavaScript in 3 Hours",
            youtubeId: "PkZNo7MFNFg",
        },
        {
            id: "vid2",
            title2: "JavaScript ES6",
            youtubeId: "CozSF5abcTA",
        },
        {
            id: "vid3",
            title3: "JavaScript Full Course",
            youtubeId: "jS4aFq5-91M",
        },
        {
            id: "vid4",
            title4: "React With TypeScript",
            youtubeId: "xTVQZ46wc28",
        },
        {
            id: "vid5",
            title5: "TypeScript in React",
            youtubeId: "DxqiBrERv6o",
        },
        {
            id: "vid6",
            title6: "Next JS Beginners Guide",
            youtubeId: "OTuHnVvxTDs",
        },
        {
            id: "vid7",
            title7: "Redux ToolKit with NextJs and TypeScript",
            youtubeId: "G6YoUlYrr9M",
        },
        {
            id: "vid8",
            title8: "Next Js in 7 Hours",
            youtubeId: "843nec-IvW0",
        },
        {
            id: "vid9",
            title9: "Java",
            youtubeId: "r3GGV2TG_vw",
        },
        {
            id: "vid10",
            title10: "Python",
            youtubeId: "H2EJuAcrZYU",
        },
        {
            id: "vid11",
            title11: "Sap",
            youtubeId: "1jFQMadZLfs",
        },
        {
            id: "vid12",
            title12: "SQL",
            youtubeId: "iuvzjf7nU1I",
        }
    ]

    return (

        <div className=" flex gap-8">
            <div className="w-72 border-r bg-white border-gray-300 shadow-lg h-100 rounded-t-md min-h-[510px] mt-6 ml-10">
                <div className="flex items-center justify-between bg-blue-100 hover:bg-blue-300 text-blue-600 font-medium px-4 py-3 cursor-pointer"
                    onClick={() => openDropdown(0)}
                >
                    <div className="flex items-center gap-2">
                        <span className="bg-blue-500 text-white rounded-full flex items-center justify-center w-6 h-6 text-sm">1</span>
                        <span>Module-1</span>
                    </div>
                    <span><i className={`fa-solid ${toggle === 0 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i></span>
                </div>

                {toggle === 0 && (
                    <div className="bg-white divide-y divide-gray-200 text-center">
                        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            {Videos.map((video) => (
                                <button key={video.id} className="cursor-pointer" onClick={() => setSelectedVideo(video)}>{video.title1}</button>
                            ))}
                        </div>
                        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            {Videos.map((video) => (
                                <button key={Videos.id} className="cursor-pointer" onClick={() => setSelectedVideo(video)}>{video.title2}</button>
                            ))}
                        </div>
                    </div>
                )}

                <div className="border border-gray-300 rounded-t-md w-72">
                    <div className="flex items-center justify-between bg-blue-100 hover:bg-blue-300 text-blue-600 font-medium px-4 py-2 cursor-pointer" onClick={() => openDropdown(1)}>
                        <div className="flex items-center gap-2">
                            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center">2</span>
                            <span>Module-2</span>
                        </div>
                        <span><i className={`fa-solid ${toggle === 1 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i></span>
                    </div>
                    {toggle === 1 && (
                        <div className="bg-white divide-y divide-gray-200 text-center">
                            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                {Videos.map((video) => (
                                    <button key={Videos.id} className="cursor-pointer" onClick={() => setSelectedVideo(video)}>{video.title3}</button>
                                ))}
                            </div>
                            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                {Videos.map((video) => (
                                    <button key={Videos.id} className="cursor-pointer" onClick={() => setSelectedVideo(video)}>{video.title4}</button>
                                ))}
                            </div>
                            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                {Videos.map((video) => (
                                    <button key={Videos.id} className="cursor-pointer" onClick={() => setSelectedVideo(video)}>{video.title5}</button>
                                ))}
                            </div>
                            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                {Videos.map((video) => (
                                    <button key={Videos.id} className="cursor-pointer" onClick={() => setSelectedVideo(video)}>{video.title6}</button>
                                ))}
                            </div>
                            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                {Videos.map((video) => (
                                    <button key={Videos.id} className="cursor-pointer" onClick={() => setSelectedVideo(video)}>{video.title7}</button>
                                ))}
                            </div>
                            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                {Videos.map((video) => (
                                    <button key={Videos.id} className="cursor-pointer" onClick={() => setSelectedVideo(video)}>{video.title8}</button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="border border-gray-200 rounded-t-md w-72">
                    <div className="flex items-center justify-between bg-blue-100 hover:bg-blue-300 text-blue-600 font-medium px-4 py-2 cursor-pointer" onClick={() => openDropdown(2)}>
                        <div className="flex items-center gap-2">
                            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center">3</span>
                            <span>Module-3</span>
                        </div>
                        <span><i className={`fa-solid ${toggle === 2 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i></span>
                    </div>

                    {toggle === 2 && (

                        <div className="bg-white divide-y divide-gray-200 text-center">
                            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                {Videos.map((video) => (
                                    <button key={Videos.id} className="cursor-pointer" onClick={() => setSelectedVideo(video)}>{video.title9}</button>
                                ))}
                            </div>
                            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                {Videos.map((video) => (
                                    <button key={Videos.id} className="cursor-pointer" onClick={() => setSelectedVideo(video)}>{video.title10}</button>
                                ))}
                            </div>
                            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                {Videos.map((video) => (
                                    <button key={Videos.id} className="cursor-pointer" onClick={() => setSelectedVideo(video)}>{video.title11}</button>
                                ))}
                            </div>
                            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                {Videos.map((video) => (
                                    <button key={Videos.id} className="cursor-pointer" onClick={() => setSelectedVideo(video)}>{video.title12}</button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex-1 flex justify-center items-center mt-6 min-h-[300px]">
                {selectedVideo ? (
                    <iframe
                        src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
                        title={selectedVideo.title}
                        className="w-[1100px] h-[510px] rounded-md shadow-lg"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <p className="text-gray-500 text-lg">Select a Video to play</p>
                )}
            </div>
        </div>
    )
}

export default CoursePage;