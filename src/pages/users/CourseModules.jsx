import React, { useState } from "react";

function CourseModules() {

    const [selectedCourse , setSelectedCourse ] = useState(null);
    const [videos , setVideos ] = useState([
        {name:'ReactJS' , Link:'https://www.youtube.com/watch?v=UBOj6rqRUME'},
        {name:'NextJS' , Link:'https://www.youtube.com/watch?v=9P8mASSREYM'},
        {name:'' , Link:''}, 
    ])

    const addVideo = () => {
        setVideos([...videos , { name:'' , Link:'' }])
    }

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

    const DeleteVideo = () => {
        const updated = [...videos];
        updated.splice(index , 1);
        setVideos(updated);
    }
    return (

        <div>
            <div className="mt-2">
                {courses.name}
            </div>
            <div className="text-end mt-4">
                <button className="bg-blue-500 text-white hover:bg-blue-700 rounded-md cursor-pointer p-2">Add Module</button>
            </div>

            <div className="border p-6 w-fit rounded-md shadow-md mt-4">
            <div className="flex justify-between items-center mb-4 space-x-104">
           <h2 className="text-lg font-semibold">fs funfamentals 1</h2>
                <div className="space-x-4 text-end">
                    <button className="bg-blue-500 text-white hover:bg-blue-700 rounded-md p-2 text-end cursor-pointer" onClick={() => addVideo()}>Add Video</button>
                    <button className="bg-blue-500 text-white hover:bg-blue-700 rounded-md p-2 text-end cursor-pointer">Delete Module</button>
                </div>
            </div>

            <div className="flex space-x-56 items-start">
                    <div className="ml-2">Video Name</div>
                    <div>Video Link</div>
                </div>

               {videos.map((video , idx ) => (
                 <React.Fragment>
                 <div className="flex">
                 <input type="text" name="" id="" value={video.name} className="border border-gray-400 w-56 py-1 mt-2 ml-2" onChange={(e) => handleChange(idx, 'name' , e.target.value)}/>
                 <input type="text" value={video.Link} name="" id="" className="border border-gray-400 w-56 py-1 mt-2 ml-22" />
                 <button className="cursor-pointer" onClick={() => DeleteVideo()}><i className="fa-solid fa-trash text-red-500 mt-4 ml-4 text-xl cursor-pointer"></i>
                 </button>
                 </div>
                 
             </React.Fragment>
               ))}
           </div>
        </div>
    )
}

export default CourseModules;