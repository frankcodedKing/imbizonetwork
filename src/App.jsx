import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Register from './components/pages/Register';
import Dashboard from './components/dashpages/Dashboard';
import Users from './components/adminpages/Users';
import Adduser from './components/adminpages/Adduser';
import Viewuser from './components/adminpages/Viewuser';
import Edituser from './components/adminpages/Edituser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  

  return (
   <>
  <ToastContainer></ToastContainer>
<Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />

        {/* USER DASHBOARD */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* ADMIN DASHBOARD */}
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/createuser" element={<Adduser />} />
        <Route path="/admin/updateuser/:userid" element={<Edituser />} />
        <Route path="/admin/detailuser/:userid" element={<Viewuser />} />
      </Routes>
</Router>

      
    </>
  )
}

export default App
