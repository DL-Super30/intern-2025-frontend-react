import React, { useState } from "react";
import { useForm } from "react-hook-form";

function CourseEnrolled({ CourseName }) {

    const [users, setUsers] = useState([
        { name: 'John', email: 'John@gmail.com' },
        { name: 'alice', email: 'alice@gmail.com' },
        { name: 'jake', email: 'jake@gmail.com' }
    ])
    

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data, e) => {
        console.log("Successfully Enrolled", data);
        e.preventDefault();

        const email = data.email.trim();
        if (!email) return;

        const username = email.split("@")[0];

        setUsers((prev) => [...prev , {name:username , email}])

        reset();
    }

    const deleteUser = (index) => {
        setUsers((prev) => prev.filter((_,i) => i !== index))
    }


    return (

        <div>
            <div className="mt-8 ml-8">
                <h2 className="text-4xl font-semibold">Add user to {CourseName}</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex items-start space-x-4">
                    <div className="">
                        <input type="text" name="" id="" className="border border-black px-2 py-2 w-64 mt-6 ml-10" placeholder="Enter your Email address"
                            {...register('email', {
                                required: { value: true, message: "Email is required" },
                                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Incorrect Email Format" }
                            })}
                        />
                        <p className="text-red-500 ml-10">{errors['email']?.message}</p>
                    </div>
                    <button className="bg-blue-500 text-white hover:bg-blue-700 px-2 py-2 mt-6 w-36 text-center cursor-pointer focus:outline-none focus:border-gray-200">Enroll</button>
                </div>
            </form>

            <div className="p-2">
                <table className="min-w-full border border-gray-300 mt-4 ml-4 overflow-auto">
                    <thead>
                        <tr>
                            <th className="text-xl text-black border border-gray-600 px-2 py-2 text-left">Username</th>
                            <th className="text-xl text-black border border-gray-600 px-2 py-2 text-left">Email</th>
                            <th className="text-xl text-black border border-gray-600 px-2 py-2 text-left">Remove access</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map(( user, idx) => (
                            <tr key={idx} className="hover:bg-gray-100 border border-gray-600">
                                <td className="border border-gray-600 px-4 py-2 text-left">{user.name}</td>
                                <td className="border border-gray-600 px-4 py-2 text-left">{user.email}</td>
                                <td>
                                <button type="button" onClick={() => deleteUser(idx)}><i className="fa-solid fa-trash ml-5 mt-3 text-md text-red-500 text-md hover:text-red-600 cursor-pointer"></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CourseEnrolled;