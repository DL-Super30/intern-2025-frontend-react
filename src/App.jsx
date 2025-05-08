import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home.jsx';
import Login from './component/login.jsx';
import Dashboard from './component/dashboard.jsx';
import ErrorBoundary from './component/ErrorBoundary.jsx';
import Video from './component/courses_page.jsx';
import Profile from './component/my_profile.jsx';
import Page from './component/b.jsx';
import Courses_list from './component/courses_list.jsx';
import Navbar from './component/Navbar/Navbar.jsx';
import Info from './component/courses/Courses_info.jsx';
import Module from './component/courses/Module.jsx'
import ProjectUpload from './component/courses/project.jsx';
import UserManagement from './component/courses/enrolled.jsx';
import Resume from './component/courses/Resume.jsx';
import Resource from './component/courses/resources.jsx';
import CreateCourseForm from './component/courses/coursesform.jsx';
import AdminPortal from './component/Adminportal.jsx';
import UserImport from './component/courses/UserImport.jsx';
import Edit from './component/courses/meg.jsx';
import ForgotPassword from './component/forgotPassword.jsx';



function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
          <Route path='/video' element={<Video />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/screen' element={<Page />}></Route>
          <Route path='/courses' element={<Courses_list />}></Route>
          <Route path='/navbar' element={<Navbar />}></Route>
          <Route path='/info' element={<Info />}></Route>
          <Route path='/module' element={<Module />}></Route>
          <Route path='/project' element={<ProjectUpload />}></Route>
          <Route path='/enoll' element={<UserManagement />}></Route>
          <Route path='/resorces' element={<Resource />}></Route>
          <Route path='/resume' element={<Resume />}></Route>
          <Route path='/createcoure' element={<CreateCourseForm />}></Route>
          <Route path='/protal' element={< AdminPortal/>}></Route>
          <Route path='/user' element={<UserImport/>}></Route>
          <Route path='/meg' element={<Edit/>}></Route>
          <Route path='/password' element={< ForgotPassword/>}></Route>
         
      </Routes>
    </BrowserRouter>
    </ErrorBoundary >
  );
}

export default App;
