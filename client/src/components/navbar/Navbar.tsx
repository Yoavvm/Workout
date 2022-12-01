
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {MdLogout} from 'react-icons/md'


import { Portal } from '../../Portal';
import { logout } from '../../redux/features/user/UserSlice';
import { handleLogout } from '../../redux/features/workout/workoutSlice';
import { useAppDispatch, useAppSelector } from '../../redux/Hooks';

import '../styles.css';
import CreateExercise from '../adminDashboard/CreateExercise';


type navbarConfigItem = {
    title: string,
    path: string,
    role: 'guest' | 'admin' | 'user'
}

type props = {
    navbarItems: navbarConfigItem[],
}

const navbarConfig: navbarConfigItem[] = [
    { title: 'Login', path: 'login', role: 'guest' },
    { title: 'Register', path: 'register', role: "guest" },
    { title: 'Admin', path: 'admin', role: "user" },
    { title: 'My Account', path: 'myaccount', role: "user" },
]

const Navbar = () => {

    const navigate = useNavigate();
    const userState = useAppSelector(state => state.User)
    const dispatch = useAppDispatch();

    const onLogoutClick = () => {
        dispatch(logout())
        dispatch(handleLogout());
        navigate('')
    }


    return (
        <div className='navbar container'>
            <NavbarButtons navbarItems={navbarConfig} />
            {userState.userData && <button onClick={onLogoutClick}><MdLogout/></button>}
        </div>
    )
}

const NavbarButtons = ({ navbarItems }: props) => {
    const navigate = useNavigate();
    const userState = useAppSelector(state => state.User)

    return (
        <>  

            {navbarItems.map(navbarItem => { 
               if (navbarItem.role == 'guest' && !userState.userData) {
                   return <button key={navbarItem.title+'btn'} onClick={()=> navigate(navbarItem.path)}>{navbarItem.title}</button>
                }
                if (navbarItem.role != 'guest' && userState.userData) {
                   return <button key={navbarItem.title+'btn'} onClick={()=> navigate(navbarItem.path)}>{navbarItem.title}</button>
               }
            })}
        </>
    )

}

export default Navbar