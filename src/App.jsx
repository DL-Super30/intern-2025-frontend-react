import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import HomePage from './pages/Home';
import './App.css'
import Login from './pages/Login';
import AdminDashboard from './pages/admin/AdminDashboard';
import ForgotPassword from './pages/ForgotPassword';
import Confirm from './pages/ConfirmEmail';
import UpdateProfile from './pages/UpdateProfile';
import Videos from './pages/users/Videos';
import CourseList from './pages/users/CourseList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <BrowserRouter>
        <Routes>
          <Route path='' element={< HomePage />}></Route>
          <Route path='/login' element={< Login />}></Route>
          <Route path='/admin-dashboard' element={< AdminDashboard />}></Route>
          <Route path='/forgot-password' element={< ForgotPassword />}></Route>
          <Route path='/forgot-password/confirm-email' element={< Confirm />}></Route>
          <Route path='/admin-dashboard/update-profile' element={< UpdateProfile />}></Route>
          <Route path='/admin-dashboard/Videos' element={< Videos />}></Route>
          <Route path='/admin-dashboard/course-list' element={< CourseList />}></Route>
        </Routes>
        </BrowserRouter>
       
      </div>
    
    </>
  )
}

export default App
