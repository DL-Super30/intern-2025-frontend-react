import "./App.css"; 
import "./index.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import ForgotPassword from "./components/ForgetPassword";
import DashboardPage from "./components/DashBoard";
import CoursePage from "./components/CoursePage";
import UpdateProfile from "./components/UpdateProfile";
import AdminPortal from "./components/AdminPortal";
import CoursesInfo from "./components/CoursesInfo";
import Projects from "./components/Projects";
import Resources from "./components/Resources";
import Resume from "./components/Resume";
import ModulesPage from "./components/ModulesPage";
import Enrolled from "./components/Enrolled";
import Users from "./components/Users"
function App() {
    return (
        <>
            <div>
                <Routes>
                    <Route path="" element={<HomePage />}></Route>
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route
                        path="/forgotPassword" element={<ForgotPassword />}
                    ></Route>
                    <Route path="/DashboardPage" element={<DashboardPage/>}></Route>
                    <Route path="/CoursePage" element={<CoursePage/>}></Route>
                    <Route path="/updateprofile" element={<UpdateProfile/>}></Route>
                    <Route path="/adminportal" element={<AdminPortal/>}></Route>
                    <Route path="/courseinfo" element={<CoursesInfo/>}></Route>
                    <Route path="/projects" element={<Projects/>}></Route>
                    <Route path="/resources" element={<Resources/>}></Route>
                    <Route path="/resume" element={<Resume/>}></Route>
                    <Route path="/ModulesPage" element={<ModulesPage/>}></Route>
                    <Route path="/enrolled" element={<Enrolled/>}></Route>
                    <Route path="/users" element={<Users/>}></Route>
                 
                </Routes>
            </div>
        </>
    );
}

export default App;
