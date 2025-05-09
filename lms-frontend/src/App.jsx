import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import ForgotPassword from "./components/ForgetPassword";
import Dashboard from "./components/DashBoard";
import CoursePage from "./components/courseDetails";
import UpdateProfile from "./components/profilePage";
import AdminPortal from "./components/adminPortal";
import Projects from "./components/Projects";
import Resources from "./components/Resources";
import Resume from "./components/Resume";
import Enrolled from "./components/Enrolled";
import CoursesInfo from"./components/CoursesInfo";
import AddPage from "./components/Add";
import ImportUsers from "./components/ImportUsers";
import Modules from "./components/Modules";
function App() {
    return (
        <>
            <div>
                <Routes>
                    <Route path="" element={<HomePage/>}></Route>
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route
                        path="/forgotPassword" element={<ForgotPassword/>} ></Route>
                    <Route path="/DashBoard" element={<Dashboard/>}></Route>
                    <Route path="/CourseDetails" element={<CoursePage/>}></Route>
                    <Route path="/profilePage" element={<UpdateProfile/>}></Route>
                    <Route path="/adminPortal" element={<AdminPortal/>}></Route>
                    <Route path="/Projects" element={<Projects/>}></Route>
                    <Route path="Resources/" element={<Resources/>}></Route>
                    <Route path="/Resume" element={<Resume/>}></Route>  
                    <Route path="/CoursesInfo" element={<CoursesInfo/>}></Route>
                    <Route path="/Enrolled" element={<Enrolled/>}></Route>
                    <Route path="/Add" delement={<AddPage/>}></Route>
                    <Route path="/ImportUsers" element={<ImportUsers/>}></Route>
                    <Route path="/Modules" element={<Modules/>}></Route>



                </Routes>
            </div>
        </>
    );
}

export default App;