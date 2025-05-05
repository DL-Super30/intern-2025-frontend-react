import React from "react";
import { useState , useEffect } from "react";
import { useForm } from "react-hook-form";

function Users(){

    const [fileName, setFileName] = useState('');
    const [message, setMessage] = useState('');
    const { register , handleSubmit , formState:{errors} , watch } = useForm();
    const [ userFound , setUserFound ] = useState(false);
    const [ EmailMessage , setEmailMessage ] = useState('');

    const users = [
        { name: 'Y Sai Harshith' , email: 'y.saiharshith@gmail.com'},
        { name: 'John', email: 'John@gmail.com' },
        { name: 'alice', email: 'alice@gmail.com' },
        { name: 'jake', email: 'jake@gmail.com' },
        {name: 'Jane Smith' , email: 'jane@example.com'}
    ]

    
        const handleChange = (e) => {
            const file = e.target.files[0];
            if (file) {
                setFileName(file.name);
                setMessage('');
            }
        }
    
        const upload = () => {
            if (fileName) {
                setMessage('File Uploaded Successfully');
            } else {
                setMessage('Please Upload a File')
            }
        }

        const findUser = (data) => {
            const found = users.find(user => user.email === data.email.trim());
            if (found) {
                setEmailMessage(`Founded user`);
            } else {
                setEmailMessage("User not found");
            }
        };

        const email = watch("email");

        useEffect(() => {
          if (EmailMessage) {
            setEmailMessage("");
          }
        }, [email]);


    return(

        <div className="flex flex-col items-center justify-center">
            <div className="text-center">
            <h2 className="text-3xl text-black font-semibold ml-96 px-36 py-4">Import Users</h2>
            </div>
             
            <form>
            <div className="mr-5 ml-42">
                <h2 className="text-md text-slate-900 font-medium">Upload user file</h2>
            </div>

                <div className="ml-42">
                    <h2 className="text-md text-gray-500 font-medium">Sample-user.csv</h2>
                </div>

                <div className="mt-1 ml-42">
                    <h2 className="text-xl mb-2">Upload new Project</h2>
                    <div className="border border-blue-600 focus:outline-none focus:border-blue-600 px-3 py-2 inline-flex items-center space-x-3 w-[300px] rounded-sm">
                        <label htmlFor="upload" className="bg-gray-400 hover:bg-gray-600 hover:text-white p-1  text-center rounded-sm cursor-pointer">Choose File
                            <input type="file" onChange={handleChange} name="" id="upload" className="hidden" />
                        </label>
                        <span className="text-gray-800 truncate w-40 text-sm">{fileName || "No File Chosen"}</span>
                    </div>
                </div>

               <div>
               <div className=" mt-4 ml-42">
                    <h2 className="bg-blue-700 text-white hover:bg-blue-900 w-24 text-center cursor-pointer p-2 ml-1" onClick={upload}>Upload</h2>
                </div>
                {message && (
                    <p className="mt-2 text-green-500 text-md ml-42 font-normal">{message}</p>
                )}
               </div>
            </form>

            <form onSubmit={handleSubmit(findUser)}>
            <div className="flex items-center justify-center text-center ml-86 mt-6">
                <h2 className="text-3xl text-black font-semibold text-center">Find Users Information</h2>
            </div>

            <div>
                <h2 className="text-md text-slate-900 font-medium text-center mt-4">Enter user email</h2>
                <input
                    type="text"
                    className="border border-blue-500 focus:outline-none focus:border-blue-700 rounded-sm py-2 mt-2 ml-68 w-96"
                    {...register('email', {
                        required: 'Field is Mandatory',
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Incorrect Email Format"
                        }
                    })}
                />
            </div>

            <p className="text-red-500 ml-70">{errors.email?.message}</p>

            <div className="mt-4 flex items-center justify-center">
                <button type="submit" className="bg-blue-700 text-white hover:bg-blue-900 text-md text-center cursor-pointer w-24 mr-2 py-2" >
                Find User
                </button>
            </div>

            {EmailMessage && (
                <p className="text-green-500 text-center font-medium mt-2">{EmailMessage}</p>
            )}
            
        </form>
        </div>
    )
}

export default Users;