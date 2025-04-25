import React from "react";
import { data } from "react-router-dom";

function CourseEnrolled(){

    const table = [
            ['John','John@gmail.com'],
            ['alice','alice@gmail.com']
    ]

    return(

        <div>
            <div className="mt-8 ml-8">
                <h2 className="text-4xl font-semibold">Add user to {}</h2>
            </div>
            <div className="space-x-4">
                <input type="text" name="" id="" className="border border-black px-2 py-2 w-64 mt-6 ml-10" placeholder="Enter your Email address" />
                <button className="bg-blue-500 text-white hover:bg-blue-700 px-2 py-2 w-36 text-center cursor-pointer focus:outline-none focus:border-gray-200">Enroll</button>
            </div>
            
            <div className="p-2">
                <table className="min-w-full border border-gray-300 mt-4 ml-4">
                    <thead>
                    <tr>
                        <th className="text-xl text-black border border-gray-200 px-1 py-1 text-left">Username</th>
                        <th className="text-xl text-black border border-gray-200 px-1 py-1 text-left">Email</th>
                        <th className="text-xl text-black border border-gray-200 px-1 py-1 text-left">Remove access</th>
                    </tr>
                    </thead>

                    <tbody>
                        {table.map((row, idx ) => (
                            <tr key={idx} className="hover:bg-gray-100 border border-gray-200">
                                {row.map((data,dataidx) => (
                                  <td key={dataidx} className=" border border-gray-200 px-4 py-2 text-left">{data}</td>
                                ))}
                                <td><i className="fa-solid fa-trash ml-2 text-red-500 cursor-pointer"></i></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CourseEnrolled;