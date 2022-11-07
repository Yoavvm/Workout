import { Routes, Route } from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Main from './components/main/Main';
import MyAccount from './components/MyAccount/MyAccount';
import AdminDashboard from './components/adminDashboard/AdminDashboard';
import './components/styles.css'
import Footer from "./components/footer/Footer";
import { useEffect } from "react";
import { useAppDispatch } from "./redux/Hooks";
import getAllExercises from "./redux/features/exercises/getAllExercises";



const App = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllExercises())
  })

  return (
    <div className="app">
      <Navbar />
      <Main>

        <Routes>
          <Route path='register' element={<Register />} />
          <Route path='myaccount' element={<MyAccount />} />
          <Route path='admin' element={<AdminDashboard />} />
          <Route path='*' element={<Login />} />

        </Routes>
      </Main>
      <Footer />

    </div>
  );
}

export default App;
