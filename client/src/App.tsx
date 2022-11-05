import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Login from './components/login/Login';
import Register from './components/register/Register';
import './App.css'
import Main from './components/main/Main';
import MyAccount from './components/MyAccount/MyAccount';
import AdminDashboard from './components/adminDashboard/AdminDashboard';



function App() {


  return (
    <div>
      <Navbar />
      <Main>

        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='myaccount' element={<MyAccount />} />
          <Route path='admin' element={<AdminDashboard />} />
          <Route path='*' element={<Login />} />

        </Routes>
      </Main>

    </div>
  );
}

export default App;
