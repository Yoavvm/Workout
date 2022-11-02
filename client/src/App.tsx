import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Login from './components/login/Login';
import Register from './components/register/Register';
import Exercises from './components/exercises/Exercises';
import './App.css'
import Main from './components/main/Main';



function App() {


  return (
    <div>
      <Navbar />
      <Main>

        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='exercises' element={<Exercises />} />
          <Route path='*' element={<Login />} />

        </Routes>
      </Main>

    </div>
  );
}

export default App;
